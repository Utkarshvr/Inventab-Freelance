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
            <button
              className="btn btn-primary rounded-1 py-2 px-4 d-flex justify-content-center align-items-center"
              // onClick={handleTable}
            >
              Add
            </button>
          </div>

          {/* Table */}
          <div className="row">
            <div className="col-lg-12">
              <div className="card p-3">
                <div className="table-responsive111 pb-4">
                  <table className="table header-border table-responsive-sm111">
                    <thead>
                      <tr>
                        <th scope="col">Part No</th>
                        <th scope="col">Description</th>
                        <th scope="col">Qty Expected</th>
                        <th scope="col">Qty Recieved</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="select-port">
                            <Select
                              options={partsOption}
                              value={selectedPart}
                              onChange={(selected) => setSelectedPart(selected)}
                              placeholder="Select PO No"
                              isSearchable={false}
                              className="text-start"
                              style={{ zIndex: 1000000000000000 }}
                            />
                          </div>
                        </td>
                        <td>
                          <input
                            className="new_input_class"
                            type="text"
                            name="short_description"
                            value={desc || "Select A Part No"}
                            disabled={!selectedPart}
                            readOnly
                          />
                        </td>
                        <td>
                          <input
                            className="new_input_class"
                            type="number"
                            name="quantity"
                            value={quantity || 0}
                            disabled={!selectedPart}
                            readOnly
                          />
                        </td>
                        {!isSerialized ? (
                          <td>
                            <input
                              className="new_input_class"
                              type="number"
                              name="qtyRecieved"
                              value={qtyRecieved}
                              onChange={(e) =>
                                setQtyRecieved(
                                  e.target.value < 0 ? 0 : e.target.value
                                )
                              }
                              disabled={!selectedPart}
                            />
                          </td>
                        ) : (
                          <td onClick={() => setShowModal((prev) => !prev)}>
                            <input
                              style={{
                                border: "1px solid rebeccapurple",
                                color: "rebeccapurple",
                                cursor: "pointer",
                              }}
                              className="new_input_class"
                              type="number"
                              name="qtyRecieved"
                              value={qtyRecieved}
                              disabled={!selectedPart}
                            />
                          </td>
                        )}
                        <td>
                          <button
                            className="btn btn-danger btn-sm"
                            // onClick={() => handleRemovePart(index)}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
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
