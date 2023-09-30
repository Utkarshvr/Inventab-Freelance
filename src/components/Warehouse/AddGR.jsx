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
import { useLocation, useParams } from "react-router-dom";
import DataTable from "react-data-table-component";
import toast from "react-hot-toast";
import { useFormik } from "formik";

export default function AddGR() {
  const [loading, setLoading] = useState(false);

  const axios = useAxiosPrivate();
  const { auth } = useAuth();
  const { orgId } = auth;
  const { grnId } = useParams();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const GRN = queryParams.get("GRN");

  const [showModal, setShowModal] = useState(false);
  const [serialNumbers, setSerialNumbers] = useState([]);

  const [po, setPO] = useState(null);

  const [parts, setParts] = useState([]);
  const [partsOption, setPartsOption] = useState([]);
  const [selectedPart, setSelectedPart] = useState(null);

  const [goodReceived, setGoodReceived] = useState([]);
  // load department, Client, sub-organization
  useEffect(() => {
    const controller = new AbortController();
    let isMount = true;
    (async function () {
      try {
        const { data } = await axios.get(
          `/inventory/grn/fetch/?grn_id=${GRN}`,
          {
            signal: controller.signal,
          }
        );
        console.log({ GRN: data });
        const goods_received = data?.results[0]?.goods_received;
        const po = data?.results[0]?.po;
        setGoodReceived(goods_received);
        setPO({ label: po?.po_id, value: po?.id });
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
    const poId = po?.value;
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
  }, [po]);

  useEffect(() => {
    const xyz = serialNumbers?.filter(
      (sn) => sn && sn !== null && sn !== undefined && sn !== ""
    );
    // setQtyRecieved(xyz?.length);
  }, [serialNumbers]);

  function handleAddSNO() {
    setSerialNumbers((prev) => [...prev, ""]);
  }
  function handleRemoveSNO(i) {
    setSerialNumbers((prev) => prev.filter((_sn, index) => index !== i));
  }

  // form submit
  const { setFieldValue, values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      goods_received: goodReceived || [],
    },
  });

  useEffect(() => {
    setFieldValue("goods_received", goodReceived);
  }, [goodReceived]);

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
              value={po}
              placeholder="Select PO No"
              isSearchable
              className="text-start w-25 my-4 "
            />
          </div>

          <div className="table-responsive111">
            {values.goods_received?.length > 0 ? (
              <div>
                <table className="table table-bordered table-responsive-sm111">
                  <thead>
                    <tr>
                      <th scope="col">Part No</th>
                      <th scope="col">Description</th>
                      <th scope="col">Qty Received</th>
                    </tr>
                  </thead>
                  {values?.goods_received?.map((gr, index) => {
                    return (
                      <>
                        <tbody>
                          <tr key={index + 1}>
                            <td>
                              <div className="select-part">
                                <Select
                                  className="select"
                                  placeholder="Select Part No"
                                  value={{
                                    label: gr?.part_no?.part_number,
                                    value: gr?.part_no?.id,
                                  }}
                                  options={partsOption}
                                  name="part_id"
                                  isSearchable
                                  isClearable
                                  // onChange={(selectedOption) =>
                                  //   handlePartSelectChange(
                                  //     selectedOption,
                                  //     index
                                  //   )
                                  // }
                                />
                              </div>
                            </td>
                            <td>
                              <input
                                className="new_input_class"
                                type="text"
                                placeholder="Short Description"
                                name={`parts[${index}].short_description`}
                                value={gr?.part_no?.short_description}
                                onChange={handleChange}
                              />
                            </td>

                            {gr?.serialized ? (
                              <td
                                style={{ cursor: "pointer" }}
                                // onClick={() =>
                                //   handleQuanityClickForSerializedParts(
                                //     index,
                                //     gr?.part_no?.id
                                //   )
                                // }
                              >
                                <input
                                  style={{
                                    border: "1px solid rebeccapurple",
                                    color: "rebeccapurple",
                                    cursor: "pointer",
                                  }}
                                  className="new_input_class"
                                  type="number"
                                  placeholder="Quntity"
                                  name={`parts[${index}].quantity`}
                                  value={gr.quantity_received}
                                  readOnly
                                />
                              </td>
                            ) : (
                              <td>
                                <input
                                  className="new_input_class"
                                  type="number"
                                  placeholder="Quntity"
                                  name={`parts[${index}].quantity`}
                                  value={gr.quantity_received}
                                  onChange={handleChange}
                                />
                              </td>
                            )}

                            <td>
                              <button
                                type="button"
                                className="btn btn-danger btn-sm"
                                // onClick={() => handleRemovePart(index)}
                              >
                                Remove
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </>
                    );
                  })}
                </table>
              </div>
            ) : (
              <h3 className="text-center">No Parts Added</h3>
            )}
          </div>

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
