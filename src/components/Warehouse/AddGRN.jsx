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

export default function AddGRN() {
  const [loading, setLoading] = useState(false);

  const axios = useAxiosPrivate();
  const { auth } = useAuth();
  const { orgId } = auth;

  const [serialNumbers, setSerialNumbers] = useState([]);

  const [purchaseOrders, setPurchaseOrders] = useState([]);
  const [purchaseOrdersOption, setPurchaseOrdersOption] = useState([]);
  const [selectedPO, setSelectedPO] = useState(null);

  const [parts, setParts] = useState([]);
  const [partsOption, setPartsOption] = useState([]);
  const [selectedPart, setSelectedPart] = useState(null);

  const [desc, setDesc] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [qtyRecieved, setQtyRecieved] = useState(0);

  console.log(purchaseOrders);

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
      } catch (error) {
        console.log(error);
      }
    })();
  }, [selectedPO]);

  useEffect(() => {
    setDesc("");
    const part = parts?.find(
      (part) => part?.parts_id?.id === selectedPart?.value
    );
    const description = part?.short_description;
    const quantity = part?.quantity;
    setDesc(description);
    setQuantity(quantity);
  }, [selectedPart]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <PageTitle title="Invoices" />
          <SectionTitle title="Invoices" />

          <Select
            options={purchaseOrdersOption}
            value={selectedPO}
            onChange={(selected) => setSelectedPO(selected)}
            placeholder="Select PO No"
            isSearchable={false}
            className="text-start w-25 mb-4 "
          />
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
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
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
