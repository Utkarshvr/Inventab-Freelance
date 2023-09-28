import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useAuth } from "../../hooks/useAuth";

import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import PageTitle from "../Shared/PageTitle";
import Select from "react-select";
import { Toaster, toast } from "react-hot-toast";
import InputText from "../Form/InputText";
import {
  removeDuplicateObjects,
  removeUndefinedObj,
} from "../../utils/utilityFunc/utilityFunc";
import TextArea from "../Form/TextArea";
import { useParams } from "react-router-dom";

export default function AddProjectDataForm(props) {
  const axios = useAxiosPrivate();
  const { auth } = useAuth();
  const { orgId } = auth;
  const { id } = useParams();

  const { setToggleForm } = props.modalState || {};

  const [isInitialWorkDone, setIsInitialWorkDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [client, setClient] = useState([]);
  const [currency, setCurrency] = useState(null);
  const [manager, setManager] = useState([]);
  const [status, setStatus] = useState(false);
  const [saleable, setSaleable] = useState(false);
  const [so, setSo] = useState([]);
  const [uploadedDocuments, setUploadedDocuments] = useState([]);
  const [document, setDocument] = useState(null);
  const [filteredSo, setFilteredSo] = useState([]);
  const [allProjects, setAllProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState(null);
  console.log({ currentProject });

  const handleDocumentUploaded = (files) => {
    const uploadedFiles = Array.from(files);
    setUploadedDocuments([...uploadedDocuments, ...uploadedFiles]);
  };

  const handleRemoveDocument = (index) => {
    const updatedDocuments = [...uploadedDocuments];
    updatedDocuments.splice(index, 1);
    setUploadedDocuments(updatedDocuments);
  };

  const currencyOptions = [
    { value: "Indian Rupees", label: "Indian Rupees" },
    { value: "US Dollar", label: "US Dollar" },
    { value: "Euro", label: "Euro" },
  ];

  const handleCurrencyChange = (selectedOption) => {
    setCurrency(selectedOption);
  };

  useEffect(() => {
    let isMount = true;
    const controller = new AbortController();

    (async function () {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `projects/get/projects/?org_id=${orgId}`,
          {
            signal: controller.signal,
          }
        );
        // console.log({ data });
        setAllProjects(data?.results);
        setLoading(false);

        // Assuming your data structure is an array of projects and each project has a 'client' property
        const clientArr = data?.results?.map((project) => ({
          label: project?.client?.company_name,
          value: project?.client?.id,
        }));

        // Remove undefined and duplicate entries
        const uniqueClients = removeDuplicateObjects(
          removeUndefinedObj(clientArr)
        );

        // Update the state with the unique client data
        if (isMount) {
          setClient(uniqueClients);
        }
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    })();

    (async function () {
      try {
        setLoading(true);
        const { data } = await axios.get(`projects/get/document-type`, {
          signal: controller.signal,
        });
        setLoading(false);

        const documentArr = data?.results?.map((document) => ({
          label: document?.name,
          value: document?.id,
        }));
        const processedDocument = removeDuplicateObjects(
          removeUndefinedObj(documentArr)
        );

        if (isMount) {
          setDocument(processedDocument);
        }
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    })();

    (async function () {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `projects/get/projects/?org_id=${orgId}`,
          {
            signal: controller.signal,
          }
        );
        setLoading(false);
        const managerArr = data?.results?.map((manager) => ({
          label: `${manager?.project_manager?.first_name} ${manager?.project_manager?.last_name}`,
          value: manager?.project_manager?.id,
        }));
        const processedManager = removeDuplicateObjects(
          removeUndefinedObj(managerArr)
        );
        if (isMount) {
          setManager(processedManager);
        }
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    })();

    (async function () {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `projects/get/projects/?org_id=${orgId}`,
          {
            signal: controller.signal,
          }
        );
        setLoading(false);
        const statusArr = data?.results?.map((status) => ({
          label: status?.status,
          value: status?.id,
        }));
        const processStatus = removeDuplicateObjects(
          removeUndefinedObj(statusArr)
        );
        if (isMount) {
          setStatus(processStatus);
        }
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    })();

    (async function () {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `projects/get/projects/?org_id=${orgId}`,
          {
            signal: controller.signal,
          }
        );
        setLoading(false);
        const soArr = data?.results?.map((so) => ({
          label: so?.so?.so_id,
          value: so?.so?.id,
          client: so?.client?.id,
        }));
        const processedSo = removeDuplicateObjects(removeUndefinedObj(soArr));
        if (isMount) {
          setSo(processedSo);
        }
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    })();

    return () => {
      (isMount = false), controller.abort();
    };
  }, [axios, orgId, id]);

  const initialValues = {
    project_name: currentProject?.project_name,
    client: {
      label: currentProject?.client?.company_name,
      value: currentProject?.client?.id,
    },
    so: currentProject?.so,

    project_id: currentProject?.project_id,
    project_budget: currentProject?.project_budget,
    saleable: currentProject?.saleable,
    description: currentProject?.description,
    status: currentProject?.status,
    org: orgId,
    project_manager: {
      value: currentProject?.project_manager?.id,
      label:
        currentProject?.project_manager?.first_name +
        " " +
        currentProject?.project_manager?.last_name,
    },
    sub_org: {
      value: currentProject?.sub_org?.id,
      label: currentProject?.sub_org?.sub_company_name,
    },
  };
  console.log({ initialValues });

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      try {
        const projectData = {
          project_id: values.project_id,
          project_name: values.project_name,
          project_budget: values.project_budget,
          saleable: values.saleable,
          description: values.description,
          status: values.status,
          org: orgId,
          project_manager: values.project_manager?.value,
          so: values.so?.value,
          created_by: auth.userId,
          client: values.client?.value,
          sub_org: null,
          documents: uploadedDocuments.map((doc) => ({
            name: doc.name,
            attachment: null,
            document_type: doc.type,
          })),
        };

        const response = await axios.put(
          `projects/update/project/${id}/`, //b4e3dd8e-d31d-4211-86d3-75b740aad66a//
          JSON.stringify(projectData)
        );

        if (response?.status === 200) {
          toast.success("Data updated successfully, please update history");
          setTimeout(() => {
            setToggleForm(true);
          }, 2000);
        }
      } catch (error) {
        toast.error(error?.message, { duration: 2000 });
        console.log(error);
      }
    },
  });

  useEffect(() => {
    // console.log({ values: formik.values });
  }, [formik.values]);

  useEffect(() => {
    const currentProj = allProjects.find((project) => project.id === id);
    setCurrentProject(currentProj);
  }, [allProjects]);

  useEffect(() => {
    if (!isInitialWorkDone && currentProject) {
      const initialValues = {
        project_name: currentProject?.project_name,
        client: {
          label: currentProject?.client?.company_name,
          value: currentProject?.client?.id,
        },
        so: currentProject?.so,
        documents: currentProject?.documents,
        project_id: currentProject?.project_id,
        project_budget: currentProject?.project_budget,
        saleable: currentProject?.saleable,
        description: currentProject?.description,
        status: currentProject?.status,
        org: orgId,
        project_manager: {
          value: currentProject?.project_manager?.id,
          label:
            currentProject?.project_manager?.first_name +
            " " +
            currentProject?.project_manager?.last_name,
        },
        sub_org: {
          value: currentProject?.sub_org?.id,
          label: currentProject?.sub_org?.sub_company_name,
        },
        budget_currency: {
          value: currentProject?.budget_currency,
          label: currentProject?.budget_currency,
        },
      };

      [
        "project_name",
        "client",
        "so",
        "project_id",
        "project_budget",
        "saleable",
        "description",
        "status",
        "org",
        "project_manager",
        "sub_org",
        "budget_currency",
      ].map((fieldName) => {
        formik.setFieldValue(fieldName, initialValues[fieldName]);
      });

      setIsInitialWorkDone(true);
    }
  }, [currentProject]);

  //update && change select options
  const handleSelectChange = (selectedOption, name) => {
    // console.log(selectedOption);
    formik.setFieldValue(name, selectedOption);

    if (name === "client") {
      const selectedClientId = selectedOption?.value;
      const filteredSoOptions = so.filter((soOption) => {
        return soOption.client === selectedClientId;
      });
      formik.setFieldValue("so", null);
      setFilteredSo(filteredSoOptions);
    }
  };

  return (
    <div>
      <Toaster />
      <PageTitle title="Add Project" />
      <div className="card">
        <div className="card-body">
          <form onSubmit={formik.handleSubmit}>
            <div className="row">
              {/* Project input */}
              <div className="mb-3 col-md-6">
                <label className="mb-2 text-dark text-capitalize">Client</label>
                <Select
                  title="Client"
                  isLoading={loading}
                  placeholder="Select Client"
                  name="client"
                  options={client}
                  onChange={(selectedOption) =>
                    handleSelectChange(selectedOption, "client")
                  }
                  value={formik.values.client}
                  isClearable
                  isSearchable
                />
              </div>
              <div className="mb-3 col-md-6">
                <label className="mb-2 text-dark text-capitalize">
                  SO Number
                </label>
                <Select
                  title="SO"
                  placeholder="Enter SO Number"
                  name="so"
                  isLoading={loading}
                  options={filteredSo}
                  onChange={(selectedOption) =>
                    handleSelectChange(selectedOption, "so")
                  }
                  value={formik.values.so}
                  isClearable
                  isSearchable
                />
              </div>
              <div className="mb-3 col-md-6">
                <label className="mb-2 text-dark text-capitalize">
                  Project Name
                </label>
                <InputText
                  type="text"
                  isLoading={loading}
                  placeholder="Select Project Name"
                  name="project_name"
                  value={formik.values.project_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isClearable
                  isSearchable
                />
              </div>
              <div className="mb-3 col-md-6">
                <label className="mb-2 text-dark text-capitalize">
                  Project Budget
                </label>
                <InputText
                  type="text"
                  placeholder="Enter Project Budget"
                  name="project_budget"
                  value={formik.values.project_budget}
                />
              </div>

              <div className="mb-3 col-md-6">
                <label className="mb-2 text-dark text-capitalize">
                  Project Currency
                </label>
                <Select
                  placeholder="Select Project Currency"
                  isLoading={loading}
                  name="budget_currency"
                  isSearchable
                  options={currencyOptions}
                  value={formik.values.budget_currency}
                  onChange={(selectedOption) =>
                    handleSelectChange(selectedOption, "budget_currency")
                  }
                />
              </div>

              <div className="mb-3 col-md-6">
                <label className="mb-2 text-dark text-capitalize">
                  Project Manager
                </label>
                <Select
                  title="Manager"
                  isLoading={loading}
                  placeholder="Select Project Manager"
                  name="project_manager"
                  options={manager}
                  value={formik.values.project_manager}
                  onChange={(selectedOption) =>
                    handleSelectChange(selectedOption, "project_manager")
                  }
                  isClearable
                  isSearchable
                />
              </div>
              <div className="mb-3">
                <label
                  className="mx-2 text-dark text-capitalize"
                  htmlFor="saleable"
                >
                  Saleable Project
                </label>
                <input
                  className="ms-2 mt-3"
                  type="checkbox"
                  id="saleable"
                  checked={saleable}
                  onChange={() => setSaleable(!saleable)}
                />
              </div>
              <div className="mb-3">
                <label className='mx-2 text-dark text-capitalize htmlFor="status'>
                  Status
                </label>
                <input
                  className="ms-2"
                  type="checkbox"
                  id="status"
                  checked={status}
                  onChange={() => setStatus(!status)}
                />
              </div>
              <div className="mb-3 col-12">
                <TextArea
                  title="Description*"
                  className="w-100"
                  placeholder="Description"
                  name="description"
                  value={formik.values.description}
                />
                <br />
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="table-responsive111">
                      <table className="table header-border table-resposvie-sm111">
                        <thead>
                          <tr>
                            <th scope="col">Select Document Name</th>
                            <th scope="col">Select Type</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="select-port">
                                <input
                                  className="btn rounded-1 py-2 px-4 d-flex justify-content-center align-items-center"
                                  type="file"
                                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                                  onChange={(e) =>
                                    handleDocumentUploaded(e.target.files)
                                  }
                                />
                              </div>
                            </td>
                            <td>
                              <div className="select-port">
                                <Select
                                  placeholder="Select Document Type"
                                  isLoading={loading}
                                  name="documents"
                                  options={document}
                                  isSearchable
                                  onChange={(selectedOption) =>
                                    handleSelectChange(
                                      selectedOption,
                                      "document"
                                    )
                                  }
                                />
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="table-responsive111">
                    <table className="table header-border table-resposvie-sm111">
                      <thead>
                        <tr>
                          <th scope="col">Document Name</th>
                          <th scope="col">Document Type</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {uploadedDocuments.map((uploadedDoc, index) => (
                          <tr key={index}>
                            <td>{uploadedDoc.name}</td>
                            <td>{uploadedDoc.type}</td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-danger btn-sm"
                                onClick={() => handleRemoveDocument(index)}
                              >
                                Remove
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-end my-4">
              <input
                className="btn btn-primary btn-common rounded-1"
                type="submit"
                value="Update Projects"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
