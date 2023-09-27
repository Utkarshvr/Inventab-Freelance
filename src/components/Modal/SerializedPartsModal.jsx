import DataTable from "react-data-table-component";

export default function SerializedPartsModal({
  serialNumbers,
  handleClose,
  setFieldValue,
  serialModalState,
  selectedNums,
  setSelectedNums,
  updateNetPrice,
}) {
  console.log({ selectedNums });

  const selectedSerials =
    selectedNums?.find((num) => num.index === serialModalState.index)
      ?.selectedSerials || [];

  // columns for table
  const columns = [
    {
      name: "No",
      selector: (gr_part, index) => "Sl-" + ++index,
    },
    {
      name: "Serial No",
      selector: (gr_part) => gr_part?.serial_number,
    },

    {
      name: "Serial No",
      selector: (gr_part) => {
        const checked = !!selectedSerials?.find(
          (sn) => sn.serial_number === gr_part?.serial_number
        );

        return (
          <div className="form-check w-100 d-flex justify-content-center align-items-center">
            <input
              onChange={() => {
                console.log({ selectedSerials, selectedNums });
                if (checked) {
                  const prevSelectedSerials = selectedSerials;

                  const newArrWOCurrentIndex = selectedNums?.filter(
                    (sn) => sn.index !== serialModalState.index
                  );
                  console.log({ prevSelectedSerials, newArrWOCurrentIndex });

                  const newArr = [
                    ...newArrWOCurrentIndex,
                    {
                      index: serialModalState.index,
                      selectedSerials: prevSelectedSerials?.filter(
                        (sn) => sn.serial_number !== gr_part?.serial_number
                      ),
                    },
                  ];

                  setSelectedNums(() => newArr);

                  setFieldValue(
                    `parts[${serialModalState.index}].quantity`,
                    prevSelectedSerials?.length - 1
                  );
                  updateNetPrice(
                    serialModalState.index,
                    prevSelectedSerials?.length - 1,
                    "quantity"
                  );
                } else {
                  const prevSelectedSerials = selectedSerials;

                  const newArrWOCurrentIndex = selectedNums?.filter(
                    (sn) => sn.index !== serialModalState.index
                  );
                  console.log({ prevSelectedSerials, newArrWOCurrentIndex });
                  const newArr = [
                    ...newArrWOCurrentIndex,
                    {
                      index: serialModalState.index,
                      selectedSerials: [
                        ...prevSelectedSerials,
                        { serial_number: gr_part?.serial_number },
                      ],
                    },
                  ];
                  setSelectedNums(() => newArr);
                  setFieldValue(
                    `parts[${serialModalState.index}].quantity`,
                    prevSelectedSerials?.length + 1
                  );
                  updateNetPrice(
                    serialModalState.index,
                    prevSelectedSerials?.length + 1,
                    "quantity"
                  );
                }
              }}
              className="form-check-input"
              type="checkbox"
              value={gr_part?.serial_number}
              checked={checked}
            />
          </div>
        );
      },
      //         {serialNumbers[0]?.gr_parts?.map((gr_part, index) => {
      //           const checked = !!selectedNums?.find(
      //             (num) => num.serial_number === gr_part?.serial_number
      //           );
      //           return (
      //             <div
      //               key={gr_part?.serial_number}
      //               style={{ marginBottom: "1em" }}
      //               className="form-check w-100 d-flex justify-content-center align-items-center"
      //             >
      //               <input
      //                 onClick={() => {
      //                   if (checked)
      //                     setSelectedNums((prev) =>
      //                       prev.filter(
      //                         (num) =>
      //                           num.serial_number !==
      //                           gr_part?.serial_number
      //                       )
      //                     );
      //                   else
      //                     setSelectedNums((prev) => [
      //                       ...prev,
      //                       {
      //                         serial_number: gr_part?.serial_number,
      //                         index,
      //                       },
      //                     ]);
      //                 }}
      //                 className="form-check-input"
      //                 type="checkbox"
      //                 value={gr_part?.serial_number}
      //                 checked={checked}
      //               />
      //             </div>
      //           );
      //         })}
    },
  ];

  return (
    <div
      className="modal fade show"
      style={{
        display: "block",
        background: "rgba(0,0,0,0.6)",
      }}
    >
      <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-4" id="exampleModalLabel">
              Serial Numbers
            </h1>
            <button
              type="button"
              className="btn-close"
              onClick={handleClose}
            ></button>
          </div>
          <DataTable
            data={serialNumbers[0]?.gr_parts || []}
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
                  // width: "170px",
                },
              },
            }}
            noContextMenu
            fixedHeader
            fixedHeaderScrollHeight="550px"
            striped
            highlightOnHover
            subHeader
          />
        </div>
      </div>
    </div>
  );
}
