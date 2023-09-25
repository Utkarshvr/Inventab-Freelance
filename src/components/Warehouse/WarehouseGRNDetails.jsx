import { useState } from "react";
import Loader from "../../ui/Loader";
import Select from "react-select";
import DataTable from "react-data-table-component";
import PageTitle from "../Shared/PageTitle";
import SectionTitle from "../Shared/SectionTitle";

export default function WarehouseGRNDetails() {
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
      name: "Qty Expected",
      selector: (row) => row?.name,
      sortable: true,
    },
    {
      name: "Qty Received",
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
          <PageTitle title="Invoices" />
          <SectionTitle title="Invoices" />

          <Select
            options={[]}
            // value={selectedYr}
            // onChange={(selected) => setSelectedYr(selected)}
            placeholder="Select PO No"
            isSearchable={false}
            className="text-start w-25 mb-4 "
          />

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
