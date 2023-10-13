import { useEffect, useState } from "react";
import { CSVLink } from "react-csv";
import DataTable from "react-data-table-component";
import { FiDownload } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import Select from "react-select";
import PageTitle from "../Shared/PageTitle";
import SectionTitle from "../Shared/SectionTitle";

import { Toaster } from "react-hot-toast";
import { useAuth } from "../../hooks/useAuth";

import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import Loader from "../../ui/Loader";

const SalesLead = () => {
    const axios = useAxiosPrivate();
    const { auth } = useAuth();
    const { orgId } = auth;
    const {id} = useParams();

    const [search, setSearch] = useState("");
    const [pi, setPi] = useState([]);
    const [searchData, setSearchData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [csv, setCsv] = useState([]);
    // const [selectedFiled, setSelectedfield] = useState("");
    const [selectedEl, setSelectedEL] = useState(null);
  
    // load leads
    useEffect(() => {
      let isMount = true;
      const controller = new AbortController();
      // fetch table
      const getPi = async () => {
        try {
          setLoading(true);
          const { data } = await axios.get(
            `pipo/pi/fetch/?org=${orgId}`,
            {
              signal: controller.signal,
            }
          );
          // pipo/sales/lead/?org={org_id}&financial_year=2023-2024
          setLoading(false);
          isMount && setPi(data?.results);
          isMount && setSearchData(data?.results);
        } catch (error) {
          setLoading(false);
  
          console.log(error);
        }
      };
      getPi();
  
      return () => {
        (isMount = false), controller.abort();
      };
    }, [axios, orgId]);
  

    const formatDate = (dateString) => {
      const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    };

    // columns for table
    const columns = [
      {
        name: "PID",
        cell: (row) => {
          "purchase/update-pi/:id"
          return (
            <Link
              className="text-center text-info dark_theme_text"
              to={`/dashboard/purchase/update-pi/${row.id}?pi_id=${row?.pi_id}`}
            >
              {row?.pi_id}
            </Link>
          );
        },
      },
      {
        name: "Type",
        selector: (row) => row?.pi_type.name,
        sortable: true,
      },
      
      {
        name: "Creation Date",
        selector: (row) => formatDate(row?.created),
        sortable: true,
      },
      {
        name: "Expected Date",
        selector: (row) => row?.expected_date,
        sortable: true,
      },
      {
        name: "Status",
        selector: (row) => row.status ? "ACTIVE" : "INACTIVE",
        sortable: true,
      },
    ];
  
    // search function
    useEffect(() => {
      let result;
      if (selectedEl?.value) {
        result = pi.filter((piData) => {
          switch (selectedEl?.value) {
            case "pi_id":
              return piData?.pi_id
                ?.toLowerCase()
                ?.match(search.toLowerCase());
  
            case "type":
              return piData?.pi_type
                ?.toLowerCase()
                ?.match(search.toLowerCase());
  
            
  
            case "created":
              return piData?.created
                ?.toLowerCase()
                ?.match(search.toLowerCase());
  
                case "expected_date":
                  return piData?.expected_date
                    ?.toLowerCase()
                    ?.match(search.toLowerCase());
      
                    // case "status":
                    //     return piData?.status?.toLowerCase()?.match(search.toLowerCase());
  
            default:
              return pi;
          }
        });
        setSearchData(result);
      } else {
        // if somehow failed the sorting
        setSearchData(pi);
      }
    }, [search, pi, selectedEl?.value]);
  
    // export as csv
    const exportAsCsv = () => {
      let data = [];
      searchData.forEach((piData) => {
        // @desc total value calculation
        let total = 0;
        piData?.parts?.forEach((part) => {
          return (total += part?.quantity * part?.unit_cost);
        });
  
        // @desc sales leads csv object
        const csvObj = {
          "PID": piData?.pi_id || "",
          type: piData?.pi_type || "",
         "Creation Date": piData?.created || "",
          "Expected Date": piData?.expected_date || "",
          Status: salesData?.status || "",
        };
  
        data.push(csvObj);
      });
  
      setCsv((prev) => [...prev, ...data]);
    };
  
    // react select options
    const options = [
      { value: "pi_id", label: "PID" },
      { value: "pi_type", label: "Type" },
      { value: "created", label: "Creation Date" },
      { value: "expected_date", label: "Expected Date" },
    //   { value: "status", label: "status" },
    ];
  
    //  main func
    return (
      <div>
        {/* react select */}
  
        <PageTitle title="PI" />
        <SectionTitle title="PI" />
  
        <div className="row">
          <Toaster />
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                {loading ? (
                  <Loader />
                ) : (
                  <DataTable
                    title={<h2>PI</h2>}
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
                    // progressPending={loading}
                    //Search & select area start
                    subHeaderAlign="left"
                    subHeaderComponent={
                      <div
                        style={{ width: "60%" }}
                        className="searchBox-salesLead rounded my-4"
                      >
                        {/* Select Area */}
                        <Select
                          className="select text-start"
                          options={options}
                          onChange={setSelectedEL}
                          isClearable
                          isSearchable
                          placeholder="Search"
                        />
                        {/* Input Search Area */}
                        <input
                          type="search"
                          placeholder="Search here"
                          className="form-control shadow-none" /* border-0 bg-transparent shadow-none */
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                        />
                      </div>
                    }
                    // Search & select area start
                    actions={
                      <>
                        <CSVLink
                          enclosingCharacter={` `}
                          data={csv}
                          filename={`PI-${new Date(
                            Date.now()
                          ).toLocaleDateString("en-IN")}`}
                          className="bg-primary btn text-white mb-3 border-0 d-flex align-items-center rounded-1"
                          onClick={exportAsCsv}
                        >
                          <FiDownload className="fs-4 me-2" />
                          Export as CSV
                        </CSVLink>
                        {/* Add Sale Order */}
                        <Link to="/dashboard/purchase/add-pi">
                          <button className="bg-primary btn text-white mb-3 border-0 d-flex align-items-center ms-2 rounded-1">
                            Add PI
                          </button>
                        </Link>
                      </>
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

export default SalesLead;