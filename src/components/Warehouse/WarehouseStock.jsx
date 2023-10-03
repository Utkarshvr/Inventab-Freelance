import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import Loader from "../../ui/Loader";
import DataTable from "react-data-table-component";
import { CSVLink } from "react-csv";
import { FiDownload } from "react-icons/fi";

export default function WarehouseStock() {
  const [loading, setLoading] = useState(false);
  const [stockList, setStockList] = useState([]);

  const [csv, setCsv] = useState([]);

  const axios = useAxiosPrivate();
  const { auth } = useAuth();
  const { orgId } = auth;

  // GET Stock LIST
  useEffect(() => {
    // orders
    (async function () {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `/inventory/grn/stockmodel/?org=${orgId}`
        );
        setLoading(false);
        console.log({ data });
        setStockList(data?.results);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    })();
  }, [axios, orgId]);
  // columns for table
  const columns = [
    {
      name: "Part No",
      selector: (row) => row?.part_no?.part_number,
      sortable: true,
    },
    {
      name: "Desc",
      selector: (row) => row?.part_no?.short_description || 0,
      sortable: true,
    },
    {
      name: "Qty",
      selector: (row) => row?.quantity,
      sortable: true,
    },
    {
      name: "Value",
      selector: (row) => row?.quantity * row?.part_no?.mrp,
      sortable: true,
    },
  ];

  // export as csv
  const exportAsCsv = () => {
    let data = [];
    stockList.forEach((stock) => {
      // @desc sales invoice csv object
      const csvObj = {
        "Part No": stock?.part_no?.part_number || "",
        Description: stock?.part_no?.short_description || "",
        Qty: stock?.quantity || 0,
        Value: stock?.quantity * stock?.part_no?.mrp || 0,
      };

      data.push(csvObj);
    });

    setCsv((prev) => [...prev, ...data]);
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <h1 className="text-center">Stock List</h1>

          <div className="card">
            <div className="card-body">
              <DataTable
                data={stockList}
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
                actions={
                  <>
                    <CSVLink
                      enclosingCharacter={` `}
                      data={csv}
                      filename={`Stock-${new Date(
                        Date.now()
                      ).toLocaleDateString("en-IN")}`}
                      className="bg-primary btn text-white mb-3 border-0 d-flex align-items-center rounded-1"
                      onClick={exportAsCsv}
                    >
                      <FiDownload className="fs-4 me-2" />
                      Export as CSV
                    </CSVLink>
                  </>
                }
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}
