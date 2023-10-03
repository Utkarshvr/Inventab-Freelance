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
import toast from "react-hot-toast";
import { useFormik } from "formik";
import { read, utils } from "xlsx";

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
  const [selectedGrId, setSelectedGrId] = useState(null);

  const [po, setPO] = useState(null);

  const [partsOption, setPartsOption] = useState([]);

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
        // setParts(parts || []);

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
        // setSelectedPart(uniqueArr[0]);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [po]);

  function handleAddSNO(grId) {
    setSerialNumbers((prev) => [...prev, { grId, sn: [""] }]);

    const prevSn = serialNumbers.find((sn) => grId === sn?.grId)?.sn || [];

    const newArrWOCurrentIndex = serialNumbers?.filter(
      (sn) => sn?.grId !== grId
    );
    setSerialNumbers(() => [
      ...newArrWOCurrentIndex,
      { grId, sn: [...prevSn, ""] },
    ]);
  }
  function handleRemoveSNO(grId, i) {
    const newSn = serialNumbers
      .find((sn) => grId === sn?.grId)
      ?.sn?.filter((_sn, index) => index !== i);

    const newArrWOCurrentIndex = serialNumbers?.filter(
      (sn) => sn?.grId !== grId
    );
    updateQty(i);

    setSerialNumbers((prev) => [...newArrWOCurrentIndex, { grId, sn: newSn }]);
  }
  console.log({ serialNumbers });
  // form submit
  const { setFieldValue, values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      goods_received: goodReceived || [],
    },
    onSubmit: async (values) => {
      try {
        const payload = values.goods_received.map((gr) => ({
          id: gr?.id,
          part_no: gr?.part_no?.id,
          short_description: gr?.short_description,
          quantity_received: gr?.quantity_received,
          serialized: gr?.serialized,
          gr_parts: serialNumbers
            ?.find((sn) => sn?.grId === gr?.id)
            ?.sn?.map((sn) => ({
              serial_number: sn,
              part_number: gr?.part_no?.id,
            })),
        }));
        console.log({
          payload: { goods_received: payload },
          url: `/inventory/gr/create/${grnId}`,
        });

        const { data } = await axios.put(`/inventory/gr/create/${grnId}/`, {
          goods_received: payload,
        });
        console.log({
          goods_received: payload,
          data,
        });
        toast.success("GR Updated", { duration: 2000 });

      } catch (error) {
        setLoading(false);
        toast.error(error?.msg || "Couldn't Update GR", { duration: 2000 });
        console.log(error);
      }
    },
  });
  // console.log(values.goods_received);
  const updateQty = (index, type, updatedSerialNumbers) => {
    if (type === "INSTANTANEOUS_CHANGE") {
      const xyz = updatedSerialNumbers
        ?.find((sn) => sn?.grId === selectedGrId)
        ?.sn?.filter(
          (sn) => sn && sn !== null && sn !== undefined && sn !== ""
        );

      console.log({ xyz, selectedGrId });
      setFieldValue(`goods_received[${index}].quantity_received`, xyz?.length);
    } else {
      const xyz = serialNumbers
        ?.find((sn) => sn?.grId === selectedGrId)
        ?.sn?.filter(
          (sn) => sn && sn !== null && sn !== undefined && sn !== ""
        );

      console.log({ xyz, selectedGrId });
      setFieldValue(`goods_received[${index}].quantity_received`, xyz?.length);
    }
  };

  useEffect(() => {
    setFieldValue(
      "goods_received",
      goodReceived?.map((gr) => ({
        ...gr,
        quantity_received: gr?.serialized ? 0 : gr?.quantity_received,
      }))
    );
    setSerialNumbers(() =>
      goodReceived?.map((gr) => ({ grId: gr?.id, sn: [] }))
    );
  }, [goodReceived]);

  function handleRemoveGR(id) {
    setFieldValue(
      "goods_received",
      values.goods_received.filter((gr) => gr?.part_no?.id !== id)
    );
  }

  const [excelData, setExcelData] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const data = event.target.result;
        const workbook = read(data, { type: "binary" });
        const sheetName = workbook.SheetNames[0]; // Assuming the first sheet
        const sheet = workbook.Sheets[sheetName];
        const extractedData = utils.sheet_to_json(sheet, { header: 1 });
        setExcelData(extractedData);
      };

      reader.readAsBinaryString(file);
    }
  };

  useEffect(() => {
    if (excelData) {
      const prevSn =
        serialNumbers.find((sn) => selectedGrId === sn?.grId)?.sn || [];

      const newArrWOCurrentIndex = serialNumbers?.filter(
        (sn) => sn?.grId !== selectedGrId
      );

      const newSerialNums = excelData.filter((data, index) => index !== 0);
      console.log({ excelData });
      const newArr = [
        ...newArrWOCurrentIndex,
        {
          grId: selectedGrId,
          sn: [...prevSn, ...newSerialNums.map((e) => e[0])],
        },
      ];

      setSerialNumbers(() => newArr);

      const grIndex = values.goods_received?.findIndex(
        (gr) => gr?.id === selectedGrId
      );
      console.log({ grIndex });
      updateQty(grIndex, "INSTANTANEOUS_CHANGE", newArr);

      console.log({
        selectedGrId,
        newSerialNums,
        excelData,
        prevSn,

        newSerials: [
          ...newArrWOCurrentIndex,
          { grId: selectedGrId, sn: [...prevSn, ...newSerialNums] },
        ],
      });
    }
  }, [excelData]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <PageTitle title="UPDATE GR" />
          {/* <SectionTitle heading="Add GR" /> */}
          <div className="d-flex gap-4 align-items-center">
            <Select
              value={po}
              placeholder="Select PO No"
              isSearchable
              className="text-start w-25 my-4 "
            />
          </div>
          <form onSubmit={handleSubmit}>
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
                                    name={`goods_received[${index}].part`}
                                    options={partsOption}
                                    isSearchable
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
                                  name={`goods_received[${index}].description`}
                                  value={gr?.part_no?.short_description}
                                  onChange={handleChange}
                                />
                              </td>

                              {gr?.serialized ? (
                                <td
                                  style={{ cursor: "pointer" }}
                                  onClick={() => {
                                    setShowModal(true);
                                    setSelectedGrId(gr?.id);
                                  }}
                                >
                                  <input
                                    style={{
                                      border: "1px solid rebeccapurple",
                                      color: "rebeccapurple",
                                      cursor: "pointer",
                                    }}
                                    className="new_input_class"
                                    type="number"
                                    placeholder="Quantity"
                                    name={`goods_received[${index}].quantity_received`}
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
                                    name={`goods_received[${index}].quantity_received`}
                                    value={gr.quantity_received}
                                    onChange={handleChange}
                                  />
                                </td>
                              )}

                              <td>
                                <button
                                  type="button"
                                  className="btn btn-danger btn-sm"
                                  onClick={() =>
                                    handleRemoveGR(gr?.part_no?.id)
                                  }
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
            <button className="btn btn-primary rounded-1" type="submit">
              Update GR
            </button>
          </form>

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
                    <input
                      type="file"
                      className="btn btn-primary"
                      onChange={handleFileChange}
                      accept=".xls, .xlsx, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                    />

                    <button
                      type="button"
                      className="btn-close"
                      onClick={() => setShowModal(false)}
                    />
                  </div>
                  <div className="table-responsive">
                    <table className="table table-bordered text-center">
                      <thead>
                        <tr>
                          <th className="text-light ps-4 fs-5">Serial No</th>
                          <th className="text-light ps-4 fs-5">
                            <button
                              onClick={() => handleAddSNO(selectedGrId)}
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
                        {serialNumbers
                          ?.find((sn) => sn?.grId === selectedGrId)
                          ?.sn?.map((sn, index) => (
                            <tr key={index}>
                              <td>
                                <input
                                  className="new_input_class mb-3"
                                  type="text"
                                  name="short_description"
                                  value={sn}
                                  onChange={(event) => {
                                    const prevSerials =
                                      serialNumbers?.find(
                                        (sn) => sn?.grId === selectedGrId
                                      )?.sn || [];
                                    prevSerials[index] = event.target.value;
                                    const newArrWOCurrentIndex =
                                      serialNumbers?.filter(
                                        (sn) => sn?.grId !== selectedGrId
                                      );
                                    console.log({
                                      prevSerials,
                                      newArrWOCurrentIndex,
                                    });

                                    const newArr = [
                                      ...newArrWOCurrentIndex,
                                      {
                                        grId: selectedGrId,
                                        sn: prevSerials,
                                      },
                                    ];
                                    setSerialNumbers(() => newArr);

                                    const grIndex =
                                      values.goods_received?.findIndex(
                                        (gr) => gr?.id === selectedGrId
                                      );
                                    console.log({ grIndex });
                                    updateQty(
                                      grIndex,
                                      "INSTANTANEOUS_CHANGE",
                                      newArr
                                    );
                                  }}
                                />
                              </td>
                              <td>
                                <button
                                  onClick={() =>
                                    handleRemoveSNO(selectedGrId, index)
                                  }
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
