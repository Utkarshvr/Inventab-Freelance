import React, { useEffect, useState } from "react";
import PageTitle from "../Shared/PageTitle";
import SectionTitle from "../Shared/SectionTitle";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import Select from "react-select";
import Loader from "../../ui/Loader";
import { Toaster } from "react-hot-toast";
import { CSVLink } from "react-csv";
import { FiDownload } from "react-icons/fi";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useAuth } from "../../hooks/useAuth";

const BacklogOthersWork = () => {
  const axios = useAxiosPrivate();
  const { auth } = useAuth();
  const { orgId } = auth;

  const [search, setSearch] = useState("");
  const [backlog, setBacklog] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedEl, setSelectedEL] = useState(null);
  const [projects, setProjects] = useState([]);
  console.log({ backlog });

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
        console.log({ projects: response.data });
        if (isMount) {
          // Extract the 'results' array from the API response
          const projectsData = response.data?.results || [];

          // Map through the projects to extract the 'name' property from 'tasks'
          const mappedProjects = projectsData.map((projectItem) => ({
            id: projectItem?.id,
            project_id: projectItem?.project_id,
          }));

          setProjects(mappedProjects);
          // console.log(mappedProjects, "checking");
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

  useEffect(() => {
    let isMount = true;
    const controller = new AbortController();

    const getLog = async () => {
      try {
        setLoading(true);
        const promises = projects.map(async (projectData) => {
          const { id, project_id } = projectData;
          console.log({ id, project_id });
          const { data } = await axios.get(
            `projects/get/project/backlog/?project_id=${id}`,
            {
              signal: controller.signal,
            }
          );
          setLoading(false);
          if (isMount) {
            const logData = data?.results || [];

            const mappedLog = logData.map((logItem) => ({
              backlog: logItem?.backlog_id,
              title: logItem?.project_desc,
              project: logItem?.project,
              project_id: project_id,
              type: logItem?.user_story,
              priority: logItem?.priority,
              status: logItem?.status,
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

  const columns = [
    {
      name: "Backlog ID",
      cell: (row) => {
        return (
          <Link
            className="text-center text-info dark_theme_text"
            to={`engg/update-backlog/${row?.backlog}`}
          >
            {row?.backlog}
          </Link>
        );
      },
    },

    {
      name: "Title",
      selector: (row) => row?.title,
      sortable: true,
    },

    {
      name: "Project Id",
      selector: (row) => row?.project_id,
      sortable: true,
    },

    {
      name: "Type",
      selector: (row) => row?.type,
      sortable: true,
    },

    {
      name: "Priority",
      selector: (row) => row?.priority || 0,
      sortable: true,
    },

    {
      name: "Status",
      selector: (row) => row?.status,
      sortable: true,
    },
  ];

  useEffect(() => {
    let result;
    if (selectedEl?.value) {
      result = backlog.filter((backlogData) => {
        switch (selectedEl?.value) {
          case "backlog":
            return backlogData?.backlog
              ?.toLowerCase()
              ?.includes(search.toLowerCase());

          case "title":
            return backlogData?.title
              ?.toLowerCase()
              ?.includes(search.toLowerCase());

          case "project":
            return backlogData?.project
              ?.toLowerCase()
              ?.includes(search.toLowerCase());

          case "type":
            return backlogData?.type
              ?.toLowerCase()
              ?.includes(search.toLowerCase());

          case "priority":
            return backlogData?.priority
              ?.toLowerCase()
              ?.includes(search.toLowerCase());

          case "status":
            return backlogData?.status
              ?.toLowerCase()
              ?.includes(search.toLowerCase());

          default:
            return backlog;
        }
      });
      setSearchData(result);
    } else {
      setSearchData(backlog);
    }
  }, [search, backlog, selectedEl?.value]);

  const exportAsCsv = (searchData) => {
    let data = [];
    searchData.forEach((backlogData) => {
      const csvObj = {
        "Backlog ID": backlogData?.backlog || "",
        Title: backlogData?.title || "",
        "Project ID": backlogData?.project || "",
        Type: backlogData?.type || "",
        Priority: backlogData?.priority || "",
        Status: backlogData?.status || "",
      };

      data.push(csvObj);
    });

    return data;
  };

  const options = [
    { value: "backlog", label: "Backlog Id" },
    { value: "title", label: "Title" },
    { value: "project", label: "Project Id" },
    { value: "type", label: "Type" },
    { value: "priority", label: "Priority" },
    { value: "status", label: "Status" },
  ];

  const csvData = exportAsCsv(searchData);

  return (
    <div>
      <PageTitle title="Backlog" />
      <SectionTitle title="Backlog" />
      <div className="row">
        <Toaster />
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              {loading ? (
                <Loader />
              ) : (
                <DataTable
                  title={<h2>Backlog</h2>}
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
                        onChange={setSelectedEL}
                        isClearable
                        isSearchable
                        placeholder="Search"
                      />
                      <input
                        type="search"
                        placeholder="Search here"
                        className="form-control shadow-none"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                    </div>
                  }
                  actions={
                    <div className="d-flex">
                      <CSVLink
                        data={csvData}
                        filename={`Backlog - ${new Date().toLocaleDateString(
                          "en-IN"
                        )}.csv`}
                        className="bg-primary btn text-white mb-3 border-0 align-items-center rounded-1"
                      >
                        <FiDownload className="fs-4 me-2" />
                        Export as CSV
                      </CSVLink>
                      <Link to="/dashboard/engg/add-backlog">
                        <button className="bg-primary btn text-white mb-3 border-0 align-items-center ms-2 rounded-1">
                          Add Backlog
                        </button>
                      </Link>
                    </div>
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
export default BacklogOthersWork;
