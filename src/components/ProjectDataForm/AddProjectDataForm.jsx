import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useAuth } from "../../hooks/useAuth";
import PageTitle from "../Shared/PageTitle";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import Select from "react-select";
import { Toaster, toast } from "react-hot-toast";
import InputText from "../Form/InputText";
import {
  removeDuplicateObjects,
  removeUndefinedObj,
} from "../../utils/utilityFunc/utilityFunc";
import TextArea from "../Form/TextArea";

export default function AddProjectDataForm() {
  const [loading, setLoading] = useState(false);
  const [dept, setDept] = useState([]);
  const [client, setClient] = useState([]);
  const [subOrg, setsubOrg] = useState([]);
  const [projects, setProjects] = useState([]);
  const [currency, setCurrency] = useState(null);
  const [budget, setBudget] = useState([]);
  const [manager, setManager] = useState([]);
  const [status, setStatus] = useState(false);
  const [saleable, setSaleable] = useState(false);
  const [so, setSo] = useState([]);
  const [uploadedDocuments, setUploadedDocuments] = useState([]);
  const [document, setDocument] = useState(null);

  const handleDocumentUploaded = (files) => {
    const uploadedFiles = Array.from(files);
    setUploadedDocuments([...uploadedDocuments, ...uploadedFiles]);
  };
  const handleAddDocument = () => {
    if (document && uploadedDocuments.length > 0) {
      const newDocument = {
        name: uploadedDocuments[0].name,
        type: document.value,
      };
      setUploadedDocuments([...uploadedDocuments, newDocument]);
      setDocument(null);
      const fileInput = document.getElementById("fileInput");
      if (fileInput) {
        fileInput.value = null;
      }
    }
  };

  const handleRemoveDocument = (index) => {
    const updatedDocuments = [...uploadedDocuments];
    updatedDocuments.splice(index, 1);
    setUploadedDocuments(updatedDocuments);
  };

  const documentTypeOptions = [
    { value: "doc", label: "doc" },
    { value: "pdf", label: "pdf" },
    { value: "docx", label: "docx" },
    { value: "jpg", label: "jpg" },
    { value: "jpeg", label: "jpeg" },
    { value: "png", label: "png" },
  ];

  const handleDocumentType = (selecteOption) => {
    setDocument(selecteOption);
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
          `projects/get/projects/?org=0a055b26-ae15-40a9-8291-25427b94ebb3`,
          {
            signal: controller.signal,
          }
        );
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
        const { data } = await axios.get(`projects/get/projects/org`, {
          signal: controller.signal,
        });
        setLoading(false);

        const projectArr = data?.results?.map((projects) => ({
          label: projects?.project_name,
          value: projects?.id,
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

    (async function () {
      try {
        setLoading(true);
        const { data } = await axios.get(`projects/get/projects/org`, {
          signal: controller.signal,
        });
        setLoading(false);
        const budgetArr = data?.results?.map((budget) => ({
          label: budget?.project_budget,
          value: budget?.id,
        }));
        const processedBudget = removeDuplicateObjects(
          removeUndefinedObj(budgetArr)
        );

        if (isMount) {
          setSo(processedBudget);
        }
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    })();

    (async function () {
      try {
        setLoading(true);
        const { data } = await axios.get(`projects/get/projects/org`, {
          signal: controller.signal,
        });
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
        const { data } = await axios.get(`projects/get/projects/org`, {
          signal: controller.signal,
        });
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
        const { data } = await axios.get(`projects/get/projects/org`, {
          signal: controller.signal,
        });
        setLoading(false);
        const soArr = data?.results?.map((so) => ({
          label: so?.so?.so_id,
          value: so?.so?.id,
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
  }, []);

  const formik = useFormik({
    initialValues: {
      // project_name: "",
    },
    onSubmit: async (values) => {
      try {
        // if (!values.project_name){
        //   console.error("Project name is required.");
        //   return;
        // }

        const projectData = {
          project_id: values.id,
          project_name: values.project_name?.label,
          project_budget: parseFloat(values.project_budget) || 34000,
          // budget_currency: values.budget_currency?.label,
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

        if (values?.id === undefined) {
          delete projectData.id;
        }

        const createLeadObj = {
          ...values,
          org: "0a055b26-ae15-40a9-8291-25427b94ebb3",
        };
        console.log(createLeadObj);
        resetForm({ values: "" });
      } catch (error) {
        console.log(error);
      }
    },
  });
  //update && change select options
  const handleSelectChange = (selectedOption, name) => {
    // console.log(selectedOption);
    setFieldValue(name, selectedOption);
  };
  return (
    <div>
      <Toaster />
      <PageTitle title="Add Project" />
      <div className="d-flex justify-content-end me-5 mb-4 ">
        <Link
          to="/dashboard/eng-project"
          className="btn btn-primary rounded-1 border-0 text-white"
        >
          <BsArrowLeft className="me-2" />
          Back
        </Link>
      </div>
      <div className="card">
        <div className="card-header flex">
          <h4 className="card-title">Add Project</h4>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
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
                  options={so}
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
                <Select
                  title="Project"
                  isLoading={loading}
                  placeholder="Select Project Name"
                  name="project_name"
                  options={projects}
                  onChange={(selectedOption) =>
                    handleSelectChange(selectedOption, "project_name")
                  }
                  value={formik.values.project_name}
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
                  name="Project_Budget"
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
                  value={values.budget_currency}
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
                  // value={formik.values.project_manager}
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
                  // value={description}
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
                                  isSearchable
                                  options={documentTypeOptions}
                                  value={document}
                                  onChange={handleDocumentType}
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
