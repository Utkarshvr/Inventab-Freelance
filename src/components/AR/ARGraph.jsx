import { useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useAuth } from "../../hooks/useAuth";

import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import Loader from "../../ui/Loader";
import {
  numDifferentiation,
  // formateReportsForTable,
  dueDate,
  daysLeftForSearchFunc,
} from "../../utils/utilityFunc/utilityFunc";
import ARChart from "../Chart/ARChart";
import { SelectedYrContext } from "../../context/selectedYrContext";

const getUnpaidAmountFromInvoices = (invoices, reportsWithPaidAmount) => {
  const totalAmount = invoices?.reduce((acc, report) => {
    const reportTotal = report?.parts_invoice?.reduce(
      (totalAmount, invoice) => {
        return totalAmount + invoice?.price * invoice?.quantity;
      },
      0
    );

    return acc + reportTotal;
  }, 0);

  const PaidAmount = invoices?.reduce((acc, report) => {
    return (
      acc + reportsWithPaidAmount.find((e) => e.id === report?.id)?.total || 0
    );
  }, 0);

  const unPaidAmount = totalAmount - PaidAmount;
  console.log({ totalAmount, PaidAmount, unPaidAmount });
  return unPaidAmount;
};

export default function ARGraph({ dontShowGraph }) {
  const { selectedYr } = useContext(SelectedYrContext);
  const axios = useAxiosPrivate();
  const { auth } = useAuth();
  const { orgId } = auth;
  const [loading, setLoading] = useState(false);

  const [reports, setReports] = useState([]);
  const [total, setTotal] = useState(0);

  const [reportsWithPaidAmount, setReportsWithPaidAmount] = useState([]);
  const [formatedReports, setFormatedReports] = useState([]);
  console.log(reports, reportsWithPaidAmount);

  const formateReportsForTableDUPLICATE = (reports, paymentRecords) => {
    let results;
    // push age property in every report object
    results = reports?.map((report) => {
      let date = dueDate(report);
      let age = daysLeftForSearchFunc(date);
      return { ...report, age };
    });

    const DEPS = ["SLS-KAM-WEST1", "SLS-KAM-NORTH", "SLS-KAM-SOUTH"];
    const formateReports = [];

    DEPS.forEach((name) => {
      let overDueMT30DaysInvoices = results.filter(
        (result) => result.age >= 30 && result.dept.name === name
      );

      const overDueMT30Days = getUnpaidAmountFromInvoices(
        overDueMT30DaysInvoices,
        paymentRecords
      );

      let overDueMT15DaysInvoices = results.filter(
        (result) =>
          result.age < 30 && result.age >= 15 && result.dept.name === name
      );

      const overDueMT15Days = getUnpaidAmountFromInvoices(
        overDueMT15DaysInvoices,
        paymentRecords
      );

      let overDueLT15DaysInvoices = results.filter(
        (result) =>
          result.age > 0 && result.age < 15 && result.dept.name === name
      );

      const overDueLT15Days = getUnpaidAmountFromInvoices(
        overDueLT15DaysInvoices,
        paymentRecords
      );

      let dueIn15DaysInvoices = results.filter(
        (result) =>
          result.age < 0 && result.age >= -15 && result.dept.name === name
      );

      const dueIn15Days = getUnpaidAmountFromInvoices(
        dueIn15DaysInvoices,
        paymentRecords
      );

      let dueIn30DaysInvoices = results.filter(
        (result) =>
          result.age < -15 && result.age >= -30 && result.dept.name === name
      );

      const dueIn30Days = getUnpaidAmountFromInvoices(
        dueIn30DaysInvoices,
        paymentRecords
      );

      let dueInMT30DaysInvoices = results.filter(
        (result) => result.age < -30 && result.dept.name === name
      );
      const dueInMT30Days = getUnpaidAmountFromInvoices(
        dueInMT30DaysInvoices,
        paymentRecords
      );

      formateReports.push({
        name,
        overDueMT30Days,
        overDueMT15Days,
        overDueLT15Days,
        dueIn15Days,
        dueIn30Days,
        dueInMT30Days,
      });
    });

    // Initialize totals with zeros
    const totals = {
      name: "Total",
      overDueMT30Days: 0,
      overDueMT15Days: 0,
      overDueLT15Days: 0,
      dueIn15Days: 0,
      dueIn30Days: 0,
      dueInMT30Days: 0,
    };

    // Calculate the totals
    formateReports.forEach((item) => {
      for (const key in totals) {
        if (key !== "name") {
          totals[key] += item[key] || 0;
        }
      }
    });

    // Add the totals object to the data array
    formateReports.push(totals);

    return formateReports;
  };
  const fetchPaymentRecords = async (invoice_id) => {
    try {
      const { data } = await axios.get(
        `invoices/get/payment/?invoice=${invoice_id}`
      );
      return data?.results;
    } catch (error) {
      console.log(error);
    }
  };
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

        isMount && setReports(response?.results);
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

  useEffect(() => {
    if (reports.length > 0) {
      // Use Promise.all to wait for all the promises to resolve.
      Promise.all(
        reports.map(async (report) => {
          const id = report?.id;
          try {
            const paymentRecord = await fetchPaymentRecords(id);
            const total = paymentRecord?.reduce(
              (accumulator, record) => accumulator + (record?.amount || 0),
              0
            );
            return { total, id };
          } catch (error) {
            // Handle individual errors here if needed.
            console.error(
              `Error fetching payment records for report with id ${id}:`,
              error
            );
            return { total: 0, id }; // Or some other default behavior for failed requests.
          }
        })
      )
        .then((paymentRecords) => {
          setReportsWithPaidAmount(paymentRecords);
        })
        .catch((error) => {
          // Handle errors from Promise.all, if necessary.
          console.error("Error in Promise.all:", error);
        });
    }
  }, [reports]);

  useEffect(() => {
    if (reportsWithPaidAmount.length > 0) {
      const formattedReports = formateReportsForTableDUPLICATE(
        reports,
        reportsWithPaidAmount
      );
      console.log({ formattedReports });
      setFormatedReports(formattedReports);

      formattedReports?.forEach((report) => {
        if (report.name === "Total") {
          const acc =
            report.dueIn15Days +
            report.dueIn30Days +
            report.dueInMT30Days +
            report.overDueLT15Days +
            report.overDueMT15Days +
            report.overDueMT30Days;
          setTotal(acc);
        }
      });
    }
  }, [reportsWithPaidAmount]);
  // columns for table
  const columns = [
    {
      name: "Department",
      selector: (row) => row?.name,
      sortable: true,
    },
    {
      name: "Due in > 30 Days",
      selector: (row) => numDifferentiation(row?.dueInMT30Days),
      sortable: true,
    },
    {
      name: "Due in 30 Days",
      selector: (row) => numDifferentiation(row?.dueIn30Days),
      sortable: true,
    },
    {
      name: "Due in 15 Days",
      selector: (row) => numDifferentiation(row?.dueIn15Days),
      sortable: true,
    },
    {
      name: "Overdue (<15days)",
      selector: (row) => numDifferentiation(row?.overDueLT15Days),
      sortable: true,
    },
    {
      name: "Overdue (>15days)",
      selector: (row) => numDifferentiation(row?.overDueMT15Days),
      sortable: true,
    },
    {
      name: "Overdue (>30 days)",
      selector: (row) => numDifferentiation(row?.overDueMT30Days),
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
          <ARChart chartData={formatedReports} />
          <DataTable
            data={formatedReports}
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
