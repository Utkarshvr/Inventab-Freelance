import { useEffect, useState } from "react";
import Loader from "../../ui/Loader";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useAuth } from "../../hooks/useAuth";

export default function WarehouseGRN() {
  const [loading, setLoading] = useState(false);
  const [grnList, setGrnList] = useState([]);

  const axios = useAxiosPrivate();
  const { auth } = useAuth();
  const { orgId } = auth;

  // columns for table
  const columns = [
    {
      name: "GRN",
      selector: (row) => (
        <Link
          to={`${row?.id}?GRN=${row?.grn_id}`}
          className="text-center text-info dark_theme_text"
        >
          {row?.grn_id}
        </Link>
      ),
      sortable: true,
    },
    {
      name: "PO",
      selector: (row) => row?.po?.po_id,
      sortable: true,
    },
    {
      name: "Vendor",
      selector: (row) => row?.vendor?.company_name,
      sortable: true,
    },
    {
      name: "Qty Expected",
      selector: (row) =>
        row?.po?.parts?.reduce((acc, part) => acc + part?.quantity, 0) || 0,
      sortable: true,
    },
    {
      name: "Qty Received",
      selector: (row) =>
        row?.goods_received?.reduce(
          (acc, gr) => acc + gr?.quantity_received,
          0
        ) || 0,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row?.status,
      sortable: true,
    },
  ];

  // GET GRN LIST
  useEffect(() => {
    // orders
    (async function () {
      try {
        setLoading(true);
        const { data } = await axios.get(`/inventory/grn/fetch/`);
        setLoading(false);
        console.log({ data });
        setGrnList(data?.results);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    })();
  }, [axios, orgId]);

  const [search, setSearch] = useState("");
  const [filteredGRNList, setFilteredGRNList] = useState([]);
  // search function
  useEffect(() => {
    console.log(grnList);
    if (Boolean(search)) {
      let result = grnList.filter((grn) =>
        grn?.grn_id?.toLowerCase()?.match(search.toLowerCase())
      );
      setFilteredGRNList(result);
    }
    // else setFilteredGRNList(grnList);
  }, [search]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <h1 className="text-center">Good Reciept Note (GRN)</h1>

          <div className="card">
            <div className="card-body">
              <DataTable
                data={search !== "" ? filteredGRNList : grnList || []}
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
                    <Link to="/dashboard/warehouse/grn/add-grn">
                      <button className="bg-primary btn text-white mb-3 border-0 d-flex align-items-center ms-2 rounded-1">
                        Add GRN
                      </button>
                    </Link>
                  </>
                }
                subHeaderComponent={
                  <div style={{ width: "60%" }} className="rounded my-4">
                    {/* Input Search Area */}
                    <input
                      className="new_input_class"
                      type="text"
                      placeholder="Search here"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                }
                subHeaderAlign="left"
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}
