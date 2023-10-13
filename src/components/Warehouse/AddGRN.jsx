import { useState, useEffect } from "react";
import Loader from "../../ui/Loader";
import Select from "react-select";
import PageTitle from "../Shared/PageTitle";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useAuth } from "../../hooks/useAuth";
import DataTable from "react-data-table-component";

import toast from "react-hot-toast";
import { useFormik } from "formik";
import { read, utils } from "xlsx";

export default function AddGRN() {
  const [loading, setLoading] = useState(false);

  const axios = useAxiosPrivate();
  const { auth } = useAuth();
  const { orgId } = auth;

  const [allPOs, setAllPOs] = useState([]);
  const [purchaseOrders, setPurchaseOrders] = useState([]);
  const [selectedParts, setSelectedParts] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [serialNumbers, setSerialNumbers] = useState([]);
  const [selectedPartId, setSelectedPartId] = useState(null);

  // load department, Client, sub-organization
  useEffect(() => {
    const controller = new AbortController();
    let isMount = true;
    (async function () {
      try {
        const { data } = await axios.get(
          `/pipo/purchase-order/list/?org=${orgId}`,
          {
            signal: controller.signal,
          }
        );
        console.log({ data });
        setAllPOs(data?.results);
        const poOptions = data?.results.map((poOpt) => ({
          label: poOpt?.po_id,
          value: poOpt?.id,
        }));

        setPurchaseOrders(poOptions || []);

        // const allVendors = data?.results?.map((po) => po?.vendor);
        // setVendors(allVendors);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    })();

    return () => {
      (isMount = false), controller.abort();
    };
  }, [axios, orgId]);

  // form submit
  const { setFieldValue, values, handleSubmit, handleChange } = useFormik({
    initialValues: {
      po: null,
      org: orgId,
      vendor: null,
      parts: [],
      // vendor: selectedvendor?.id,
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        const payload = {
          po: values?.po?.value,
          org: orgId,
          vendor: values?.vendor?.value,
          goods_received: values.parts.map((part) => ({
            // id: part?.parts_id?.id,
            part_no: part?.parts_id?.id,
            short_description: part?.short_description,
            quantity_received: part?.quantity,
            serialized: part?.parts_id?.serialization,
            gr_parts: serialNumbers
              ?.find((sn) => sn?.partId === part?.parts_id?.id)
              ?.sn?.map((sn) => ({
                serial_number: sn,
                part_number: part?.parts_id?.id,
              })),
          })),
        };
        console.log({
          payload,
        });

        const { data } = await axios.post(`/inventory/grn/create/`, payload);
        console.log({ data });

        toast.success("GRN Created", { duration: 2000 });
        resetForm();
      } catch (error) {
        setLoading(false);
        console.log(error);
        toast.error(error?.msg || "Couldn't Create The GRN", {
          duration: 2000,
        });
      }
    },
  });

  useEffect(() => {
    if (values.po) {
      const poId = values.po?.value;
      const selectedPO = allPOs.find((po) => po?.id === poId);
      const PoVendor = selectedPO?.vendor;
      const selectedParts = selectedPO?.parts;
      const option = {
        label: PoVendor?.company_name,
        value: PoVendor?.id,
      };
      setFieldValue("vendor", option);
      setSelectedParts(selectedParts);
      setFieldValue("parts", selectedParts);
    }
  }, [values.po]);

  console.log({ selectedParts });

  function handleAddSNO(partId) {
    const prevSn = serialNumbers.find((sn) => partId === sn?.partId)?.sn || [];

    const newArrWOCurrentIndex = serialNumbers?.filter(
      (sn) => sn?.partId !== partId
    );
    setSerialNumbers(() => [
      ...newArrWOCurrentIndex,
      { partId, sn: [...prevSn, ""] },
    ]);
  }
  function handleRemoveSNO(partId, i, partIndex) {
    const newSn = serialNumbers
      .find((sn) => partId === sn?.partId)
      ?.sn?.filter((_sn, index) => index !== i);

    const newArrWOCurrentIndex = serialNumbers?.filter(
      (sn) => sn?.partId !== partId
    );

    setSerialNumbers((prev) => [
      ...newArrWOCurrentIndex,
      { partId, sn: newSn },
    ]);
    updateQty(partIndex, "INSTANTANEOUS_CHANGE", [
      ...newArrWOCurrentIndex,
      { partId, sn: newSn },
    ]);
  }

  function handleRemovePart(id) {
    setFieldValue(
      "parts",
      values.parts.filter((part) => part?.parts_id?.id !== id)
    );
  }

  console.log({ serialNumbers });

  const updateQty = (index, type, updatedSerialNumbers) => {
    if (type === "INSTANTANEOUS_CHANGE") {
      const xyz = updatedSerialNumbers
        ?.find((sn) => sn?.partId === selectedPartId)
        ?.sn?.filter(
          (sn) => sn && sn !== null && sn !== undefined && sn !== ""
        );

      console.log({ xyz, selectedPartId });
      setFieldValue(`parts[${index}].quantity`, xyz?.length);
    } else {
      const xyz = serialNumbers
        ?.find((sn) => sn?.partId === selectedPartId)
        ?.sn?.filter(
          (sn) => sn && sn !== null && sn !== undefined && sn !== ""
        );

      console.log({ xyz, selectedPartId });
      setFieldValue(`parts[${index}].quantity`, xyz?.length);
    }
  };

  useEffect(() => {
    setSerialNumbers(() =>
      selectedParts?.map((part) => ({ partId: part?.parts_id?.id, sn: [] }))
    );
  }, [selectedParts]);

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
        serialNumbers.find((sn) => selectedPartId === sn?.partId)?.sn || [];

      const newArrWOCurrentIndex = serialNumbers?.filter(
        (sn) => sn?.partId !== selectedPartId
      );

      const newSerialNums = excelData.filter((data, index) => index !== 0);

      const newArr = [
        ...newArrWOCurrentIndex,
        {
          partId: selectedPartId,
          sn: [...prevSn, ...newSerialNums.map((e) => e[0])],
        },
      ];

      setSerialNumbers(() => newArr);

      const partIndex = values.parts?.findIndex(
        (part) => part?.parts_id?.id === selectedPartId
      );
      console.log({ partIndex });
      updateQty(partIndex, "INSTANTANEOUS_CHANGE", newArr);

      console.log({
        selectedPartId,
        newSerialNums,
        excelData,
        prevSn,

        newSerials: [
          ...newArrWOCurrentIndex,
          { partId: selectedPartId, sn: [...prevSn, ...newSerialNums] },
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
          <PageTitle title="Add GRN" />
          {/* <SectionTitle heading="Add part" /> */}
          <form className="mb-4" onSubmit={handleSubmit}>
            {/* FIELDS */}
            <div className="row">
              {/* Sales Sales Order */}
              <div className="mb-3 col-md-6">
                <label className="mb-2 text-dark text-capitalize">
                  Purchase Order
                </label>
                <Select
                  name="po"
                  options={purchaseOrders}
                  value={values.po}
                  placeholder="Select PO No"
                  isSearchable
                  className="text-start"
                  onChange={(option) => setFieldValue("po", option)}
                />
              </div>
              {/* add Inv Date input */}
              <div className="mb-3 col-md-6">
                <label className="mb-2 text-dark text-capitalize">Vendor</label>
                <input
                  className="new_input_class"
                  name="vendor"
                  value={values.vendor?.label}
                  placeholder="Select Vendor No"
                  readOnly
                />
              </div>
            </div>
            <div className="table-responsive111">
              {values.parts?.length > 0 ? (
                <div>
                  <table className="table table-bordered table-responsive-sm111">
                    <thead>
                      <tr>
                        <th scope="col">Part No</th>
                        <th scope="col">Description</th>
                        <th scope="col">Qty Received</th>
                      </tr>
                    </thead>
                    {values?.parts?.map((part, index) => {
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
                                      label: part?.parts_id?.part_number,
                                      value: part?.parts_id?.id,
                                    }}
                                    name={`parts[${index}].part`}
                                    // options={partsOption}0
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
                                  name={`parts[${index}].description`}
                                  value={part?.short_description}
                                />
                              </td>

                              {part?.parts_id?.serialization ? (
                                <td
                                  style={{ cursor: "pointer" }}
                                  onClick={() => {
                                    setShowModal(true);
                                    setSelectedPartId(part?.parts_id?.id);
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
                                    name={`parts[${index}].quantity`}
                                    value={part.quantity}
                                    readOnly
                                  />
                                </td>
                              ) : (
                                <td>
                                  <input
                                    className="new_input_class"
                                    type="number"
                                    placeholder="Quantity"
                                    name={`parts[${index}].quantity`}
                                    value={part.quantity}
                                    onChange={handleChange}
                                  />
                                </td>
                              )}

                              <td>
                                <button
                                  type="button"
                                  className="btn btn-danger btn-sm"
                                  onClick={() =>
                                    handleRemovePart(part?.parts_id?.id)
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
              Create GRN
            </button>
          </form>

          {/* Modal for serial no */}
          {showModal ? (
            <div
              className="modal fade show"
              id="ser-nums"
              style={{
                display: "block",
                backpartound: "rgba(0,0,0,0.6)",
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
                              onClick={() => handleAddSNO(selectedPartId)}
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
                          ?.find((sn) => sn?.partId === selectedPartId)
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
                                        (sn) => sn?.partId === selectedPartId
                                      )?.sn || [];
                                    prevSerials[index] = event.target.value;
                                    const newArrWOCurrentIndex =
                                      serialNumbers?.filter(
                                        (sn) => sn?.partId !== selectedPartId
                                      );
                                    console.log({
                                      prevSerials,
                                      newArrWOCurrentIndex,
                                    });

                                    const newArr = [
                                      ...newArrWOCurrentIndex,
                                      {
                                        partId: selectedPartId,
                                        sn: prevSerials,
                                      },
                                    ];
                                    setSerialNumbers(() => newArr);

                                    const partIndex = values.parts?.findIndex(
                                      (part) =>
                                        part?.parts_id?.id === selectedPartId
                                    );
                                    console.log({ partIndex });
                                    updateQty(
                                      partIndex,
                                      "INSTANTANEOUS_CHANGE",
                                      newArr
                                    );
                                  }}
                                />
                              </td>
                              <td>
                                <button
                                  onClick={() =>
                                    handleRemoveSNO(
                                      selectedPartId,
                                      index,
                                      values.parts?.findIndex(
                                        (part) =>
                                          part?.parts_id?.id === selectedPartId
                                      )
                                    )
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
