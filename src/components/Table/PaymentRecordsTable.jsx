import DataTable from "react-data-table-component";

export default function PaymentRecordsTable({ paymentRecords }) {
  const columns = [
    {
      name: "Date Received",
      cell: (row) => row?.date_received,
    },

    {
      name: "Transaction ID",
      selector: (row) => row?.transaction_id,
      sortable: true,
    },

    {
      name: "Amount (Incl TDS)",
      selector: (row) => row?.amount,
      sortable: true,
    },

    {
      name: "Comments",
      selector: (row) => row?.comment,
      sortable: true,
    },
  ];
  const a = {
    id: "cd9083b6-0e04-47a6-ba0d-0408a383218e",
    created: "2023-09-18T18:02:33.735964+05:30",
    modified: "2023-09-18T18:02:33.735998+05:30",
    date_received: "2023-09-18",
    transaction_id: "",
    amount: 1000.0,
    comment: "TEST PAYMENT",
    invoice: "a3eae040-f393-42c0-bd96-dec48029c4f8",
  };

  return (
    <div className="card">
      <div className="card-body">
        <DataTable
          columns={columns}
          data={paymentRecords}
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
        />
      </div>
    </div>
  );
}
