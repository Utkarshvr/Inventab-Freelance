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
