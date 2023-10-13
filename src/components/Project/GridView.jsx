import React, { useEffect, useState } from "react";
import PageTitle from "../Shared/PageTitle";
import SectionTitle from "../Shared/SectionTitle";
import { BsArrowLeft } from "react-icons/bs";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import Select from "react-select";
import Loader from "../../ui/Loader";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useAuth } from "../../hooks/useAuth";

const GridView = () => {
  const axios = useAxiosPrivate();
  const { auth } = useAuth();
  const { orgId } = auth;

  const [search, setSearch] = useState("");
  const [backlog, setBacklog] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedEl, setSelectedEL] = useState({
    value: "user",
    label: "User",
  }); // Initialize with "User"
  const [projects, setProjects] = useState([]);
  const [filteredUserData, setFilteredUserData] = useState([]);

  console.log({ backlog, projects });

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
          const projectsData = response.data?.results || [];
          const mappedProjects = projectsData.map((projectItem) => ({
            id: projectItem?.id,
            project_id: projectItem?.project_id,
          }));

          setProjects(mappedProjects);
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
              id: logItem?.id,
              backlog: logItem?.backlog_id,
              title: logItem?.project_desc,
              ProjectId: project_id, // Fixed the column name
              BacklogId: logItem?.backlog_id, // Fixed the column name
              Priority: logItem?.priority || 0, // Fixed the column name
              Status: logItem?.status,
              user: logItem?.user || {},
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
  console.log("Backlog data:", backlog);

  useEffect(() => {
    if (selectedEl?.value === "user") {
      const result = backlog.filter((backlogData) => {
        return (
          backlogData.user &&
          backlogData.user.first_name &&
          backlogData.user.last_name &&
          (backlogData.user.first_name
            .toLowerCase()
            .includes(search.toLowerCase()) ||
            backlogData.user.last_name
              .toLowerCase()
              .includes(search.toLowerCase()))
        );
      });
      setSearchData(result);
    } else {
      setSearchData(backlog);
    }
  }, [search, backlog, selectedEl?.value]);

  const columns = [
    {
      name: "User",
      cell: (row) => {
        const userFirstName = row?.user?.first_name || "";
        const userLastName = row?.user?.last_name || "";
        const userName = `${userFirstName} ${userLastName}`;
        return userName;
      },
      sortable: true,
    },
    {
      name: "Priority",
      selector: (row) => row.Priority,
      sortable: true,
    },
    {
      name: "Project Id",
      selector: (row) => row.ProjectId,
      sortable: true,
    },
    {
      name: "Backlog Id",
      selector: (row) => row.BacklogId,
      sortable: true,
    },
  ];

  const filteredData = backlog.filter((backlogData) => backlogData.user);

  const options = [
    { value: "user", label: "User" },
    // Add other filter options here if needed
  ];

  return (
    <div>
      <PageTitle title="Grid" />
      <SectionTitle title="Grid" />
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              {loading ? (
                <Loader />
              ) : (
                <>
                  <DataTable
                    title={<h2>User Data</h2>}
                    columns={columns}
                    data={searchData} // Use filteredUserData here
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
                        <Link
                          to="/dashboard/eng-backlog"
                          className="btn btn-primary rounded-1 border-0 text-white"
                        >
                          <BsArrowLeft className="me-2" />
                          Back
                        </Link>
                      </div>
                    }
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridView;
