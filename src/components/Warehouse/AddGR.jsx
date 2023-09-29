import { useState, useEffect } from "react";
import Loader from "../../ui/Loader";
import Select from "react-select";
import PageTitle from "../Shared/PageTitle";
import SectionTitle from "../Shared/SectionTitle";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useAuth } from "../../hooks/useAuth";
import {
  removeDuplicateObjects,
  removeUndefinedObj,
} from "../../utils/utilityFunc/utilityFunc";
import { useParams } from "react-router-dom";
import DataTable from "react-data-table-component";

export default function AddGR() {
  const [loading, setLoading] = useState(false);

  const axios = useAxiosPrivate();
  const { auth } = useAuth();
  const { orgId } = auth;
  const { grnId } = useParams();

  const [showModal, setShowModal] = useState(false);
  const [serialNumbers, setSerialNumbers] = useState([]);

  const [purchaseOrders, setPurchaseOrders] = useState([]);
  const [purchaseOrdersOption, setPurchaseOrdersOption] = useState([]);
  const [selectedPO, setSelectedPO] = useState(null);

  const [parts, setParts] = useState([]);
  const [partsOption, setPartsOption] = useState([]);
  const [selectedPart, setSelectedPart] = useState(null);

  // FORM
  const [partId, setPartId] = useState("");
  const [desc, setDesc] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [qtyRecieved, setQtyRecieved] = useState(0);
  const [isSerialized, setIsSerialized] = useState(false);

  const [grnList, setGrnList] = useState([]);
  const [goodReceived, setGoodReceived] = useState([]);
  console.log(goodReceived);
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
  useEffect(() => {
    if (grnList?.length > 0)
      setGoodReceived(
        grnList?.find((grn) => grn?.id === grnId)?.goods_received
      );
  }, [grnList]);

  // load department, Client, sub-organization
  useEffect(() => {
    const controller = new AbortController();
    let isMount = true;
    // orders
    (async function () {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `/pipo/purchase-order/list/?org=${orgId}`,
          {
            signal: controller.signal,
          }
        );
        setLoading(false);

        const posArr = [];
        setPurchaseOrders(data?.results || []);

        data?.results?.forEach((po) => {
          const deptObj = {
            label: po?.po_id,
            value: po?.id,
          };
          posArr.push(deptObj);
        });

        const removeUndefinedData = removeUndefinedObj(posArr);
        const uniqueArr = removeDuplicateObjects(removeUndefinedData);
        setPurchaseOrdersOption(uniqueArr);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    })();

    return () => {
      (isMount = false), controller.abort();
    };
  }, [axios, orgId]);

  useEffect(() => {
    const poId = selectedPO?.value;
    (async function () {
      try {
        const { data } = await axios.get(
          `/pipo/purchase-order/list/?id=${poId}`
        );

        const partsArr = [];
        const parts = data?.results[0]?.parts;
        setParts(parts || []);

        parts?.forEach((part) => {
          const deptObj = {
            label: part?.parts_id?.part_number,
            value: part?.parts_id?.id,
          };
          partsArr.push(deptObj);
        });

        const removeUndefinedData = removeUndefinedObj(partsArr);
        const uniqueArr = removeDuplicateObjects(removeUndefinedData);
        setPartsOption(uniqueArr);
        setSelectedPart(uniqueArr[0]);
        setSerialNumbers([]);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [selectedPO]);

  useEffect(() => {
    const part = parts?.find(
      (part) => part?.parts_id?.id === selectedPart?.value
    );

    const description = part?.short_description;
    const quantity = part?.quantity;
    const isSerializedPart = part?.parts_id?.serialization;
    const part_id = part?.parts_id?.id;

    setDesc(description);
    setQuantity(quantity);
    setIsSerialized(isSerializedPart);
    setPartId(part_id);

    if (!selectedPart) setSerialNumbers([]);
  }, [selectedPart]);
  useEffect(() => {
    const xyz = serialNumbers?.filter(
      (sn) => sn && sn !== null && sn !== undefined && sn !== ""
    );
    setQtyRecieved(xyz?.length);
  }, [serialNumbers]);

  function handleAddSNO() {
    setSerialNumbers((prev) => [...prev, ""]);
  }
  function handleRemoveSNO(i) {
    setSerialNumbers((prev) => prev.filter((_sn, index) => index !== i));
  }

  async function createGRN() {
    try {
      const payload = {
        grn: grnId,
        part_no: partId,
        short_description: desc,
        quantity_received: qtyRecieved,
        serialized: isSerialized,
      };
      console.log({ payload });
      const { data } = await axios.post(`/inventory/gr/create/`, payload);
      console.log(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  const columns = [
    {
      name: "Part No",
      selector: (row) => row?.part_no?.part_number,
      sortable: true,
    },
    {
      name: "Description",
      selector: (row) => row?.part_no?.short_description || 0,
      sortable: true,
    },
    {
      name: "Qty Expected",
      selector: (row) => row?.quantity,
      sortable: true,
    },
    {
      name: "Qty Recieved",
      selector: (row) => row?.quantity_received,
      sortable: true,
    },
  ];
  // /api/v1/inventory/gr/list/?part_no={part_no_uuid}
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <PageTitle title="Add GR" />
          <SectionTitle heading="Add GR" />
          <div className="d-flex gap-4 align-items-center">
            <Select
              options={purchaseOrdersOption}
              value={selectedPO}
              onChange={(selected) => setSelectedPO(selected)}
              placeholder="Select PO No"
              isSearchable
              className="text-start w-25 my-4 "
            />
          </div>

          <div className="card">
            <div className="card-body">
              <DataTable
                data={goodReceived}
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
              />
            </div>
          </div>

          <button
            className="btn btn-primary btn-common rounded-1"
            onClick={createGRN}
          >
            Update GR
          </button>

          {/* Modal for serial no */}
          {showModal ? (
            <div
              className="modal fade show"
              id="ser-nums"
              style={{
                display: "block",
                background: "rgba(0,0,0,0.6)",
              }}
            >
              <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="btn-close"
                      onClick={() => setShowModal(false)}
                    />
                  </div>
                  <div className="table-responsive">
                    <table className="table table-bordered text-center">
                      <thead style={{ background: "#343A40" }}>
                        <tr>
                          <th className="text-light ps-4 fs-5">Serial No</th>
                          <th className="text-light ps-4 fs-5">
                            <button
                              onClick={handleAddSNO}
                              disabled={
                                serialNumbers.length > 0 &&
                                !serialNumbers?.find(
                                  (sn) =>
                                    sn &&
                                    sn !== null &&
                                    sn !== undefined &&
                                    sn !== ""
                                )
                              }
                              type="button"
                              className="btn btn-primary px-2 py-1"
                            >
                              Add
                            </button>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {serialNumbers?.map((sn, index) => (
                          <tr key={index}>
                            <td>
                              <input
                                className="new_input_class mb-3"
                                type="text"
                                name="short_description"
                                value={sn}
                                onChange={(event) => {
                                  setSerialNumbers(() => {
                                    const serialNumsCOPY = [...serialNumbers];
                                    serialNumsCOPY[index] = event.target.value;
                                    return serialNumsCOPY;
                                  });
                                }}
                              />
                            </td>
                            <td>
                              <button
                                onClick={() => handleRemoveSNO(index)}
                                type="button"
                                className="btn btn-primary px-2 py-1"
                              >
                                Remove
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </>
      )}
    </>
  );
}
