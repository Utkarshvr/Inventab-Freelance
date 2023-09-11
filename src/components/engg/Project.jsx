import React, { useEffect, useState } from "react";
// import "./Project.css";
import PageTitle from "../Shared/PageTitle";
import DataTable from "react-data-table-component";
import Select from "react-select";
import { Link } from "react-router-dom";
import SectionTitle from "../Shared/SectionTitle";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useAuth } from "../../hooks/useAuth";
import Loader from "../../ui/Loader";

const AddProject = () => {
  const axios = useAxiosPrivate();
  const { auth } = useAuth();
  const { orgId } = auth;

  const [search, setSearch] = useState("");
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const [selectedEl, setSelectedEL] = useState(null);

  useEffect(() => {
    let isMount = true;
    const controller = new AbortController();
    const getProject = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `projects/get/projects/?org_id=${orgId}`,
          {
            signal: controller?.signal,
          }
        );
        setLoading(false);
        console.log(response.data);
        if (isMount) {
          // Extract the 'results' array from the API response
          const projectsData = response.data?.results || [];

          // Map through the projects to extract the 'name' property from 'tasks'
          const mappedProjects = projectsData.map((projectItem) => ({
            id: projectItem?.id,
            project: projectItem?.project_id,
            name: projectItem?.project_name,
            status: projectItem?.status,
            so: projectItem?.so?.so_id,
            client: projectItem?.client?.company_name,
          }));

          setProject(mappedProjects);
          console.log(mappedProjects, "checking");
          setSearchData(mappedProjects);
        }
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    };
    getProject();

    return () => {
      isMount = false;
      controller.abort();
    };
  }, [axios, orgId]);
  // useEffect(() => {
  //   let isMount = true;
  //   const controller = new AbortController();
  //   const getProject = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await axios.get(`projects/get/projects/?org_id=${orgId}`, {
  //         signal:controller?.signal,
  //       });
  //       setLoading(false);
  //       if (isMount) {
  //         // Extract the 'results' array from the API response
  //         const projectsData = response.data?.results || [];
  //         setProject(projectsData);
  //         console.log(projectsData,"checking");
  //         setSearchData(projectsData);
  //       }
  //     } catch (error) {
  //       setLoading(false);
  //       console.log(error);
  //     }
  //   };
  //   getProject();

  //   return () => {
  //     (isMount = false), controller.abort();
  //   };
  // }, [axios, orgId]);

  const columns = [
    {
      name: "Project ID",
      sortable: true,
      selector: "project",
      cell: (row) => {
        return (
          <Link
            className="text-center text-info dark_theme_text"
            to={`/dashboard/engg/update-project/${row?.id}`}
          >
            {row?.project}
          </Link>
        );
      },
    },
    {
      name: "Name",
      selector: (row) => row?.name,
      sortable: true,
    },
    {
      name: "SO",
      selector: (row) => row?.so,
      sortable: true,
    },
    {
      name: "Client",
      selector: (row) => row?.client,
      sortable: true,
    },
    {
      name: "Backlog",
      sortable: true,
    },
    {
      name: "Timesheet",
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row?.status,
      sortable: true,
    },
  ];

  // search function
  useEffect(() => {
    let result;
    if (selectedEl?.value) {
      result = project.filter((projectData) => {
        switch (selectedEl?.value) {
          case "project":
            return projectData?.project
              ?.toLowerCase()
              ?.match(search.toLowerCase());

          case "name":
            return projectData?.name
              ?.toLowerCase()
              ?.match(search.toLowerCase());

          case "status":
            return projectData?.status
              ?.toLowerCase()
              ?.match(search.toLowerCase());

          case "client":
            return projectData?.client
              ?.toLowerCase()
              ?.match(search.toLowerCase());

          case "so":
            return projectData?.so?.toLowerCase()?.match(search.toLowerCase());

          default:
            return project;
        }
      });
      setSearchData(result);
    } else {
      setSearchData(project);
    }
  }, [search, project, selectedEl?.value]);

  const options = [
    { value: "project", label: "Project" },
    { value: "name", label: "Name" },
    { value: "status", label: "Status" },
    { value: "client", label: "Client" },
    { value: "so", label: "So" },
  ];

  return (
    <div>
      <PageTitle title="Project" />
      <SectionTitle title="Project" />
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              {loading ? (
                <Loader />
              ) : (
                <DataTable
                  title={<h2>Project</h2>}
                  columns={columns}
                  data={searchData}
                  customStyles={{
                    rows: {
                      style: {
                        fontSize: "16px",
                      },
                    },
                    headCells: {
                      style: {
                        fontSize: "19px",
                        width: "170px",
                      },
                    },
                  }}
                  noContextMenu
                  fixedHeader
                  fixedHeaderScrollHeight="550px"
                  pagination
                  striped
                  highlightOnHover
                  subHeader
                  subHeaderComponent={
                    <div className="searchBox-salesLead rounded my-4">
                      <Select
                        className="select text-start"
                        options={options}
                        onChanage={setSelectedEL}
                        isClearable
                        isSearchable
                        placeholder="Search"
                      />
                      <input
                        type="search"
                        placeholder="Search here"
                        className="form-control shadow-none" /* border-0 bg-transparent shadow-none */
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                    </div>
                  }
                  actions={
                    <Link to="/dashboard/engg/add-project">
                      <button className="bg-primary btn text-white mb-3 border-0 d-flex align-items-center ms-2 rounded-1">
                        Add Project
                      </button>
                    </Link>
                  }
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddProject;
