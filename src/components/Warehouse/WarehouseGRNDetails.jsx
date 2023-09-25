import { useState } from "react";
import Loader from "../../ui/Loader";
import Select from "react-select";
import DataTable from "react-data-table-component";
import PageTitle from "../Shared/PageTitle";
import SectionTitle from "../Shared/SectionTitle";

export default function WarehouseGRNDetails() {
  const [loading, setLoading] = useState(false);

  const [serialNumbers, setSerialNumbers] = useState([]);

  // columns for table
  const columns = [
    {
      name: "Part No",
      selector: (row) => (
        <p
          onClick={() => {
            // fetchSerialNumbers(index);
            setSerializedNo(part.id);
          }}
          className="text-primary link_txt"
          data-bs-toggle="modal"
          data-bs-target="#serializedNumsModal"
          style={{ cursor: "pointer" }}
        >
          {row?.name}
        </p>
        // {part?.parts_no?.serialization ? (
        //   <>
        //     {" "}
        //     <td
        //       onClick={() => {
        //         fetchSerialNumbers(index);
        //         setSerializedNo(part.id);
        //       }}
        //       className="text-primary link_txt"
        //       data-bs-toggle="modal"
        //       data-bs-target="#exampleModal"
        //       style={{ cursor: "pointer" }}
        //     >
        //       {/* {`${part?.short_description} (abcdefgh)`} */}
        //       {`${part?.short_description} (${part?.parts_no?.customer_part_number}) `}
        //     </td>
        //   </>
        // ) : (
        //   <td className="text-black">
        //     {part?.short_description}
        //   </td>
        // )}
      ),
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

          {/* Modal for serial no */}
          <div
            className="modal fade"
            id="serializedNumsModal"
            aria-labelledby="serializedNumsModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="table-responsive">
                  <table className="table table-bordered text-center">
                    <thead style={{ background: "#343A40" }}>
                      <tr>
                        <th className="text-light ps-4 fs-5">No</th>
                        <th className="text-light ps-4 fs-5">Serial No</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          {serialNumbers?.map((sn, index) => {
                            return <p key={sn}>{"Sl-" + ++index}</p>;
                          })}
                        </td>
                        <td>
                          {serialNumbers?.map((sn) => {
                            return <p key={sn}>{sn}</p>;
                          })}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
