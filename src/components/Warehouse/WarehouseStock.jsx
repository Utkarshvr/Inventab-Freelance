import { useState } from "react";
import Loader from "../../ui/Loader";
import DataTable from "react-data-table-component";

export default function WarehouseStock() {
  const [loading, setLoading] = useState(false);

  // columns for table
  const columns = [
    {
      name: "Part No",
      selector: (row) => row?.name,
      sortable: true,
    },
    {
      name: "Desc",
      selector: (row) => row?.name,
      sortable: true,
    },
    {
      name: "Qty",
      selector: (row) => row?.name,
      sortable: true,
    },
    {
      name: "Value",
      selector: (row) => row?.name,
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
                data={[{ name: "Hello" }]}
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
