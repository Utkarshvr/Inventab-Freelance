import { useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useAuth } from "../../../hooks/useAuth";

import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import Loader from "../../../ui/Loader";
import {
  formatChartData,
  kpiEachTotal,
  numDifferentiation,
  calculateMonthlyTotals,
} from "../../../utils/utilityFunc/utilityFunc";
import RevenueChart from "../../Chart/Chart";
import { SelectedYrContext } from "../../../context/selectedYrContext";

export default function KPIPOCOPY() {
  const { auth } = useAuth();
  const { orgId } = auth;

  const axios = useAxiosPrivate();
  const [kipPo, setKpiPo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [kpiPoChart, setKpiPoChart] = useState({});
  const { selectedYr } = useContext(SelectedYrContext);
  console.log(selectedYr);
  // load leads
  useEffect(() => {
    // get kpi po
    const getKpiPo = async () => {
      setLoading(true);
      try {
        // 0a055b26-ae15-40a9-8291-25427b94ebb3
        // const { data } = await axios.get(
        //   `pipo/kpi/list/?org=${orgId}&metric=PO&financial_year=${selectedYr}`
        // );
        const { data } = await axios.get(
          `pipo/kpi/list/?org=${orgId}&metric=PO`
        );

        // Calculate the total for each month of all departments
        const monthlyTot = calculateMonthlyTotals(data?.results);
        console.log(data?.results);
        setKpiPo([...data?.results, monthlyTot]);

        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };

    getKpiPo();
  }, [axios, selectedYr, orgId]);

  // sub total after mount this page
  useEffect(() => {
    if (!loading && kipPo?.length > 0) {
      let allTotal = 0;

      kipPo.forEach((kip, ind) => {
        let res = kpiEachTotal(kip);
        kip["total"] = res;

        // Check if it's the last element in the array
        // if it is, then don't total
        if (kipPo.length !== ind + 1) allTotal += res;
      });
      setTotal(allTotal);
    }

    const formatObj = formatChartData(kipPo);

    if (
      formatObj?.data?.length > 0 &&
      formatObj?.formattedDataWithTotal?.length > 0
    ) {
      setKpiPoChart(formatObj);
    }
  }, [loading, kipPo, kipPo?.length]);

  // columns for table
  const columns = [
    {
      name: "Department",
      selector: (row) => row?.department,
      sortable: true,
    },
    {
      name: "Apr",
      selector: (row) => numDifferentiation(row?.apr) || 0,
      sortable: true,
    },
    {
      name: "May",
      selector: (row) => numDifferentiation(row?.may) || 0,
      sortable: true,
    },
    {
      name: "Jun",
      selector: (row) => numDifferentiation(row?.jun) || 0,
      sortable: true,
    },
    {
      name: "Jul",
      selector: (row) => numDifferentiation(row?.jul) || 0,
      sortable: true,
    },
    {
      name: "Aug",
      selector: (row) => numDifferentiation(row?.aug) || 0,
      sortable: true,
    },
    {
      name: "Sep",
      selector: (row) => numDifferentiation(row?.sep) || 0,
      sortable: true,
    },
    {
      name: "Oct",
      selector: (row) => numDifferentiation(row?.oct) || 0,
      sortable: true,
    },
    {
      name: "Nov",
      selector: (row) => numDifferentiation(row?.nov) || 0,
      sortable: true,
    },
    {
      name: "Dec",
      selector: (row) => numDifferentiation(row?.dec) || 0,
      sortable: true,
    },
    {
      name: "Jan",
      selector: (row) => numDifferentiation(row?.jan) || 0,
      sortable: true,
    },
    {
      name: "Feb",
      selector: (row) => numDifferentiation(row?.feb) || 0,
      sortable: true,
    },
    {
      name: "Mar",
      selector: (row) => numDifferentiation(row?.mar) || 0,
      sortable: true,
    },
    {
      name: "Total",
      selector: (row) => numDifferentiation(row?.total) || 0,
      sortable: true,
    },
  ];

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <h1 className="text-center">KPI PO</h1>
          <RevenueChart chartData={kpiPoChart} />
          <DataTable
            data={kipPo}
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
            // total KPI PO amount
            actions={
              <>
                <h3 className="bg-primary text-white rounded-0 p-3">
                  Total: {numDifferentiation(total)}
                </h3>
              </>
            }
          />
        </>
      )}
    </>
  );
}
