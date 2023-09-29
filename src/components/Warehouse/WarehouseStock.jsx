import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import Loader from "../../ui/Loader";
import DataTable from "react-data-table-component";

export default function WarehouseStock() {
  const [loading, setLoading] = useState(false);
  const [stockList, setStockList] = useState([]);

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
                // actions={
                //   <>
                //     <h3 className="bg-primary text-white rounded-0 p-3">
                //       Total: {numDifferentiation(total)}
                //     </h3>
                // </>
                // }
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}
