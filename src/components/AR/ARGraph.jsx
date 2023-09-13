import { useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useAuth } from "../../hooks/useAuth";

import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import Loader from "../../ui/Loader";
import {
  formatChartData,
  numDifferentiation,
  formateReportsForTable,
} from "../../utils/utilityFunc/utilityFunc";
import RevenueChart from "../Chart/Chart";
import { SelectedYrContext } from "../../context/selectedYrContext";

export default function ARGraph({ dontShowGraph }) {
  const { selectedYr } = useContext(SelectedYrContext);
  const axios = useAxiosPrivate();
  const { auth } = useAuth();
  const { orgId } = auth;
  const [reports, setReports] = useState([]);
  const [reportsChart, setReportsChart] = useState({});

  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  //   console.log(reports);

  useEffect(() => {
    // fetch table
    let isMount = true;
    const controller = new AbortController();
    const getInvoiceList = async () => {
      try {
        setLoading(true);
        const response = (
          await axios.get(`invoices/fetch/all/invoices/?org=${orgId}`, {
            signal: controller.signal,
          })
        ).data;
        setLoading(false);

        const formattedReports = formateReportsForTable(response?.results);
        console.log({ formattedReports });

        isMount && setReports(formattedReports);
      } catch (error) {
        setLoading(true);
        console.log(error);
      }
    };
    getInvoiceList();

    return () => {
      (isMount = false), controller.abort();
    };
  }, [auth?.orgId, axios]);

  // columns for table
  const columns = [
    {
      name: "Department",
      selector: (row) => row?.name,
      sortable: true,
    },
    {
      name: "Due in > 30 Days",
      selector: (row) => row?.dueInMT30Days,
      sortable: true,
    },
    {
      name: "Due in 30 Days",
      selector: (row) => row?.dueIn30Days,
      sortable: true,
    },
    {
      name: "Due in 15 Days",
      selector: (row) => row?.dueIn15Days,
      sortable: true,
    },
    {
      name: "Overdue (<15days)",
      selector: (row) => row?.overDueLT15Days,
      sortable: true,
    },
    {
      name: "Overdue (>15days)",
      selector: (row) => row?.overDueMT15Days,
      sortable: true,
    },
    {
      name: "Overdue (>30 days)",
      selector: (row) => row?.overDueMT30Days,
      sortable: true,
    },
  ];

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <h1 className="text-center">AR</h1>
          {/* {dontShowGraph ? null : <RevenueChart chartData={kpiInvoiceChart} />} */}
          <DataTable
            data={reports}
            columns={columns}
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
            // total KPI Invoice amount
            actions={
              <>
                <h3 className="bg-primary text-white rounded-0 p-3">
                  Total:{numDifferentiation(total)}
                </h3>
              </>
            }
          />
        </>
      )}
    </>
  );
}
