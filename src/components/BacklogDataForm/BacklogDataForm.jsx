import React, { useEffect, useState } from "react";
import PageTitle from "../Shared/PageTitle";
import { Link, useLocation, useParams } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import Select from "react-select";
import TextArea from "../Form/TextArea";
import InputText from "../Form/InputText";
import {
  removeDuplicateObjects,
  removeUndefinedObj,
} from "../../utils/utilityFunc/utilityFunc";
import { useFormik } from "formik";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useAuth } from "../../hooks/useAuth";
import { format } from "date-fns";
import { toast } from "react-hot-toast";

export default function AddBacklogDataForm({ selectedData, modalState }) {
  const axios = useAxiosPrivate();
  const { auth } = useAuth();
  const { orgId } = auth;
  const { id } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const BACKLOG_NAME = queryParams.get("backlog");
  console.log(BACKLOG_NAME);

  const { setToggleForm } = modalState || {};
  console.log({ selectedData });

  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);
  const [priorityOptions, setPriorityOptions] = useState([]);
  const [userOptions, setUserOptions] = useState([]);
  const [log, setLog] = useState([]);
  const [isInitialSettingDone, setIsInitialSettingDone] = useState(false);

  const statusOptions = [
    { value: "Work in process", label: "Work in process" },
    { value: "complete", label: "complete" },
    { value: "Hold", label: "Hold" },
  ];

  // Form Submit
  const formik = useFormik({
    initialValues: {
      backlog_id: BACKLOG_NAME,
      // backlog_id: null,
      title: "",
      project: { label: selectedData?.project, value: selectedData?.project },
      type: "",
      status: null,
      priority: null,
      end_date: "",
      description: selectedData?.project_desc || "",
      user: null,
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        const formattedEndDate = values.end_date
          ? format(new Date(values.end_date), "yyyy-MM-dd")
          : "";

        const logObj = {
          backlog_id: BACKLOG_NAME,
          project_desc: values.description,
          priority: values.priority?.value || 0,
          user_story: values.title,
          target_date: formattedEndDate,
          remark: "",
          project: values.project?.value || "", // Make sure this matches the field name in your form
          user: values.user?.value || "",
          status: values.status?.value || "Work in process",
        };

        const res = await axios.put(
          `projects/update/backlog/${id}/`,
          JSON.stringify(logObj),
          // JSON.stringify(values),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(res);
        if (res?.status === 201) {
          resetForm();

          toast.success("Data updated successfully, please update history");
          setTimeout(() => {
            setToggleForm(true);
          }, 2000);
        }
      } catch (error) {
        toast.error(error?.message, { duration: 2000 });
        // Display error message here using your toast library
        console.error(error);
      }
    },
  });
  useEffect(() => {
    if (!isInitialSettingDone && selectedData) {
      formik.setFieldValue("project", {
        label: selectedData?.project,
        value: selectedData?.project,
      });
      formik.setFieldValue("user", {
        label:
          selectedData?.user?.first_name + " " + selectedData?.user?.first_name,
        value: selectedData?.user?.id,
      });
      formik.setFieldValue("status", {
        label: selectedData?.status,
        value: selectedData?.status,
      });
      formik.setFieldValue("priority", {
        label: selectedData?.priority,
        value: selectedData?.priority,
      });

      formik.setFieldValue("title", selectedData?.user_story);

      formik.setFieldValue("type", selectedData?.type);

      setIsInitialSettingDone(true);
    }
  }, [selectedData]);

  useEffect(() => {
    let isMount = true;
    const controller = new AbortController();

    // Project
    (async function () {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `projects/get/projects/?org_id=${orgId}`,
          {
            signal: controller.signal,
          }
        );
        // console.log(data, "dataa....");
        setLoading(false);

        const projectArr = data?.results?.map((project) => ({
          // Changed 'projects' to 'project' to match the mapping
          label: project?.project_name,
          value: project?.id,
        }));
        const processedProjects = removeDuplicateObjects(
          removeUndefinedObj(projectArr)
        );

        if (isMount) {
          setProjects(processedProjects);
        }
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    })();

    // Priority
    const generatedPriorityOptions = Array.from({ length: 20 }, (_, index) => ({
      value: String(index + 1),
      label: String(index + 1),
    }));
    setPriorityOptions(generatedPriorityOptions);

    return () => {
      isMount = false; // Fixed the assignment of 'isMount'
      controller.abort();
    };
  }, [axios, orgId]);

  const getLog = async (value) => {
    // alert(value)
    try {
      setLoading(true);
      const { data } = await axios.get(
        `/projects/get/project/backlog/?project_id=${value}`
      );
      const logData = data?.results || [];

      const userOptions = logData.map((logItem) => ({
        label: logItem.user ? logItem.user.first_name : "No User",
        value: logItem.user ? logItem.user.id : null,
      }));

      // console.log(userOptions, "checking data");
      setUserOptions(userOptions);
      setLog(logData);
    } catch (error) {
      console.error("Error fetching backlog data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let isMount = true;
    const controller = new AbortController();
    // console.log(projects, "checkingggggg......");

    if (formik.values.project) {
      getLog(formik.values.project.value);
    }

    return () => {
      isMount = false;
      controller.abort();
    };
  }, [axios, formik.values.project]);

  return (
    <div>
      <PageTitle title="Add Backlog" />
      <div className="card">
        <div className="card-body">
          <form onSubmit={formik.handleSubmit}>
            <div className="row">
              <div className="mb-3 col-md-6">
                <label className="mb-2 text-dark text-capitalize">
                  Project Name
                </label>
                <Select
                  title="Project"
                  isLoading={loading}
                  placeholder="Select Project Name"
                  name="project"
                  options={projects}
                  value={formik.values.project}
                  onChange={(selectOption) => [
                    formik.setFieldValue("project", selectOption),
                    getLog(selectOption.value),
                  ]}
                  isClearable
                  isSearchable
                />
              </div>

              <div className="mb-3 col-md-6">
                <label className="mb-2 text-dark text-capitalize">User</label>
                <Select
                  title="User"
                  isLoading={loading}
                  placeholder="Select User"
                  name="user"
                  options={userOptions}
                  value={formik.values.user}
                  onChange={(selectOption) => [
                    formik.setFieldValue("user", selectOption),
                    getLog(selectOption.value),
                  ]}
                  isClearable
                  isSearchable
                />
              </div>

              <div className="mb-3 col-md-6">
                <InputText
                  title="Title"
                  type="text"
                  name="title"
                  placeholder="Enter Title"
                  isLoading={loading}
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>

              <div className="mb-3 col-md-6">
                <label className="mb-2 text-dark text-capitalize">Type</label>
                <InputText
                  type="text"
                  name="type"
                  placeholder="Enter Type"
                  isLoading={loading}
                  value={formik.values.type}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>

              <div className="mb-3 col-md-6">
                <label className="mb-2 text-dark text-capitalize">Status</label>
                <Select
                  title="Status"
                  options={statusOptions}
                  value={formik.values.status}
                  onChange={(selectOption) =>
                    formik.setFieldValue("status", selectOption)
                  }
                  placeholder="Select Status"
                  name="status"
                  isClearable
                  isSearchable
                />
              </div>
              <div className="mb-3 col-md-6">
                <label className="mb-2 text-dark text-capitalize">
                  Priority
                </label>
                <Select
                  title="Priority"
                  placeholder="Select Priority"
                  options={priorityOptions}
                  name="priority"
                  value={formik.values.priority}
                  onChange={(selectOption) =>
                    formik.setFieldValue("priority", selectOption)
                  }
                  isClearable
                  isSearchable
                />
              </div>

              <div className="mb-3 col-md-3">
                <InputText title="Start Date*" type="date" name="start_Date" />
              </div>

              <div className="mb-3 col-md-3">
                <InputText title="Start Time*" type="time" name="start_Time" />
              </div>

              <div className="mb-3 col-md-3">
                <InputText
                  title="End Date*"
                  type="date"
                  name="end_date"
                  isLoading={loading}
                  value={formik.values.end_date}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>

              <div className="mb-3 col-md-3">
                <InputText title="End Time*" type="time" name="end_Time" />
              </div>

              <div className="mb-3 col-12">
                <TextArea
                  title="Description*"
                  className="w-100"
                  placeholder="Description"
                  name="description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>

              <div className="d-flex justify-content-end my-4">
                <input
                  className="btn btn-primary btn-common rounded-1"
                  type="submit"
                  value="Update Backlog"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
