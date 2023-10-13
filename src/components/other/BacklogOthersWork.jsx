import React, { useEffect, useState } from "react";
import PageTitle from "../Shared/PageTitle";
import { Link } from "react-router-dom";
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

const AddBacklog = () => {
  const axios = useAxiosPrivate();
  const { auth } = useAuth();
  const { orgId } = auth;

  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);
  const [priorityOptions, setPriorityOptions] = useState([]);
  const [userOptions, setUserOptions] = useState([]);
  const [backlog, setBacklog] = useState([]);

  console.log(backlog);

  const statusOptions = [
    { value: "Work in process", label: "Work in process" },
    { value: "complete", label: "complete" },
    { value: "Hold", label: "Hold" },
  ];

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
        console.log(data);

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

    // User
    (async function () {
      try {
        setLoading(true);

        // Replace `getUserDataEndpoint` with the actual endpoint for user data
        const { data } = await axios.get(
          `projects/get/project/backlog/?project_id=${id}`, // Replace with your user API endpoint
          {
            signal: controller.signal,
          }
        );
        setLoading(false);

        const userArr = data?.results?.map((users) => ({
          label: `${users?.user?.first_name} ${users?.user?.last_name}`,
          value: users?.user?.id,
        }));
        const processedUsers = removeDuplicateObjects(
          removeUndefinedObj(userArr)
        );

        if (isMount) {
          setUserOptions(processedUsers);
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

  useEffect(() => {
    let isMount = true;
    const controller = new AbortController();

    const getLog = async () => {
      try {
        setLoading(true);
        const promises = projects.map(async (projectData) => {
          const { id, project_id } = projectData;
          // console.log({ id, project_id });
          const { data } = await axios.get(
            `projects/get/project/backlog/?project_id=${id}`,
            {
              signal: controller.signal,
            }
          );
          console.log({ data });
          setLoading(false);
          if (isMount) {
            const logData = data?.results || [];

            const mappedLog = logData.map((logItem) => ({
              id: logItem?.id,
              user: logItem.user?.value,
            }));
            return mappedLog;
          }
          return [];
        });

        const DATA = await Promise.all(promises);
        const backlogData = [].concat(...DATA);
        console.log(backlogData, "Backlog data .......");
        isMount && setBacklog(backlogData);
        isMount && setSearchData(backlogData.flat());
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    if (projects.length > 0) getLog();

    return () => {
      isMount = false;
      controller.abort();
    };
  }, [axios, projects]);

  // Form Submit
  const formik = useFormik({
    initialValues: {
      title: "", // Uncommented these fields
      project: null,
      type: "",
      status: null,
      priority: null,
      end_date: "",
      description: "",
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        const formattedEndDate = values.end_date
          ? format(new Date(values.end_date), "yyyy-MM-dd")
          : "";

        const logObj = {
          project_desc: values.description,
          priority: values.priority?.value || 0,
          user_story: values.title,
          target_date: formattedEndDate,
          remark: "",
          project_name: values.project?.value || "", // Make sure this matches the field name in your form
          // user: ,
        };

        const res = await axios.post(
          `projects/create/backlog/`,
          JSON.stringify(logObj),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (res?.status === 201) {
          resetForm(); // Reset the form without any values
          // Display success message here using your toast library
        }
      } catch (error) {
        // Display error message here using your toast library
        console.error(error);
      }
    },
  });

  return (
    <div>
      <PageTitle title="Add Backlog" />
      <div className="d-flex justify-content-end me-5 mb-4">
        <Link
          to="/dashboard/eng-backlog"
          className="btn btn-primary rounded-1 border-0 text-white"
        >
          <BsArrowLeft className="me-2" />
          Back
        </Link>
      </div>
      <div className="card">
        <div className="card-header flex">
          <h4 className="card-title">Add Backlog</h4>
        </div>
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
                  onChange={(selectOption) =>
                    formik.setFieldValue("project", selectOption)
                  }
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
                  onChange={(selectOption) =>
                    formik.setFieldValue("user", selectOption)
                  }
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
                  value="Add Backlog"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBacklog;
