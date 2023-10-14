import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import Select from "react-select";
import PageTitle from "../../components/Shared/PageTitle";
import { useAuth } from "../../hooks/useAuth";
import { format } from "date-fns";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import Loader from "../../ui/Loader";
import {
  calculateTotalExtdGrossPrice,
  calculateTotalNetPrice,
  removeDuplicateObjects,
  removeUndefinedObj,
  calculateExtdGrossPrice,
} from "../../utils/utilityFunc/utilityFunc";
import InputText from "./../../components/Form/InputText";
import TextArea from "./../../components/Form/TextArea";
import { leadsSchema } from "../../schema/validationSchema";
import { v4 as uuidv4 } from "uuid";

const UpdatePi = () => {
  const axios = useAxiosPrivate();
  const { auth } = useAuth();
  const { orgId } = auth;
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [type, setType] = useState([]);
  const [date, setdate] = useState([]);
  const [subOrg, setsubOrg] = useState([]);
  const [parts, setParts] = useState([]);
  const [pi, setPi] = useState(null);
  const [piList, setPiList] = useState([]);
  const [partFullObj, setPartFullObj] = useState([]);
  const [selectPart, setSelectPart] = useState(null);
  const [partsLoading, setPartsLoading] = useState(false);

  console.log({ pi });

  // table lowerpart data
  const [short_description, setshort_description] = useState("");
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [unitCost, setUnitCost] = useState(0);
  const [status, setstatus] = useState("");
  const [gst, setgst] = useState();
  const [net_price, setNet_price] = useState(0);
  const [extd_gross_price, setExtd_gross_price] = useState(0);

  // set net price
  useEffect(() => {
    if (totalQuantity && totalQuantity > 0 && unitCost && unitCost > 0) {
      setNet_price(parseInt(totalQuantity * unitCost));
    } else {
      setNet_price(0);
    }
  }, [totalQuantity, unitCost]);

  // useEffect(() => {
  //   if (piList.length > 0) setPi(piList.find((PI) => PI?.id === id));
  // }, [piList]);

  useEffect(() => {
    let isMount = true;
    const controller = new AbortController();
    // pi of given id
    (async function () {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `pipo/pi/fetch/?org=${orgId}&id=${id}`,
          {
            signal: controller.signal,
          }
        );
        setLoading(false);
        console.log({ data });
        setPi(data?.results[0]);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    })();
    // organization || department
    (async function () {
      try {
        setLoading(true);
        const { data } = await axios.get(`pipo/pi/fetch/?org=${orgId}`, {
          signal: controller.signal,
        });
        setLoading(false);
        const typeArr = [];
        isMount &&
          data?.results?.forEach((type) => {
            const typeObj = {
              label: type?.pi_type?.name,
              value: type?.id,
            };
            typeArr.push(typeObj);
          });

        const removeUndefinedData = removeUndefinedObj(typeArr);
        const uniqueArr = removeDuplicateObjects(removeUndefinedData);
        setType(uniqueArr);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    })();

    (async function () {
      try {
        setLoading(true);
        const { data } = await axios.get(`pipo/pi/fetch/?org=${orgId}`, {
          signal: controller.signal,
        });
        setLoading(false);
        // setPi(data?.results || []);
        setPiList(data?.results || []);

        const ordersArr = [];
        isMount &&
          data?.results?.forEach((PID) => {
            const PIDObj = {
              label: PID?.id,
              value: PID?.pi_id,
            };
            ordersArr.push(PIDObj);
          });

        const removeUndefinedData = removeUndefinedObj(ordersArr);
        const uniqueArr = removeDuplicateObjects(removeUndefinedData);
        // setPi(uniqueArr);
        console.log(uniqueArr, " results chek PI");
      } catch (error) {
        setLoading(false);
        console.log(error, "error");
      }
    })();

    // sub org
    (async function () {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `http://inventab.io/api/v1/organizations/get/suborg/?org=${orgId}`,
          {
            signal: controller.signal,
          }
        );
        setLoading(false);
        const subOrgArr = [];
        isMount &&
          data?.results?.forEach((sub) => {
            const clientObj = {
              label: sub?.sub_company_name,
              value: sub?.id,
            };
            subOrgArr.push(clientObj);
          });

        const removeUndefinedData = removeUndefinedObj(subOrgArr);
        const uniqueArr = removeDuplicateObjects(removeUndefinedData);
        setsubOrg(uniqueArr);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    })();

    // parts
    (async function () {
      try {
        setPartsLoading(true);
        const { data } = await axios.get(`parts/parts`, {
          signal: controller.signal,
        });
        setPartsLoading(false);
        setPartFullObj(data?.results);
        const partArr = [];
        data?.results?.forEach((data) => {
          const partObj = {
            label: data?.part_number,
            value: data?.id,
          };
          partArr.push(partObj);
        });
        const removeUndefinedData = removeUndefinedObj(partArr);
        const uniqueArr = removeDuplicateObjects(removeUndefinedData);
        setParts(uniqueArr);
      } catch (error) {
        setPartsLoading(false);
        console.log(error);
      }
    })();

    return () => {
      (isMount = false), controller.abort();
    };
  }, [axios, orgId]);

  // status options
  const statusOptions = [
    { label: "ACTIVE", value: 1 },
    { label: "INACTIVE", value: 0 },
  ];

  // form submit
  const {
    setFieldValue,
    errors,
    handleBlur,
    values,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      // department: null,
      // sub_org: null,
      // probability: 0,
      total: 0,
      status: "",
      // client: null,
      expected_date: "",
      // expected_invoice_date: "",
      // contact_name: "",
      // mobile: "",
      comments: "",
      type: null,
      pi_id: null,

      parts: [],
    },
    // validationSchema: leadsSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const expectedDate = values.expected_date
          ? format(new Date(values.expected_date), "yyyy-MM-dd")
          : "";

        const {
          type,
          pi_id,
          expected_date,
          comments,
          status,
          parts: partArr,
        } = values;

        let parts = [];
        console.log(partArr);
        partArr.forEach((p) => {
          const partObj = {
            lead_part_id: p?.lead_part_id,
            part_id: p?.part_id?.id,
            short_description: p?.short_description,
            quantity: parseFloat(p?.quantity),
            unit_cost: parseFloat(p?.unit_cost),
            status: "Active",
            gst: parseFloat(p?.gst),
            net_price: parseFloat(p?.net_price),

            extd_gross_price: parseFloat(p?.extd_gross_price),
          };

          if (p?.lead_part_id == undefined) {
            delete partObj.lead_part_id;
          }

          parts?.push(partObj);
        });

        const createLeadObj = {
          ...values,
          org: orgId,
          pi_type: type?.value || null,
          pi_id: pi_id?.value,
          expected_date: expectedDate,
          status: status?.valueOf || null,
          comments: comments || "",
          parts,
        };
        // return console.log(createLeadObj);
        const res = await axios.put(
          `pipo/create/pi/${id}/`,
          JSON.stringify(createLeadObj)
        );
        console.log({ res });
        resetForm({ values: "" });
        toast.success("Lead created successfully");
        if (res?.status === 201) {
        }
      } catch (error) {
        toast.error(
          error?.response?.status === 400
            ? "Fill all the  * fields"
            : error?.message,
          { duration: 2000 }
        );
        console.log({ error });
      }
    },
  });

  // **TO FILL THE PREVIOUS VALUES**
  // ---- START ----
  const [isInitialWorkDone, setIsInitialWorkDone] = useState(false);
  const [isInititalPartsSetup, setIsInititalPartsSetup] = useState(false);

  useEffect(() => {
    if (!isInitialWorkDone && pi) {
      const initialValues = {
        type: {
          label: pi?.pi_type?.name,
          value: pi?.pi_type?.id,
        },
        status: {
          label: pi?.status === 1 ? "ACTIVE" : "INACTIVE",
          value: pi?.status,
        },
        expected_date: pi?.expected_date,
        comments: pi?.comments,
      };

      ["expected_date", "status", "comments", "type"].map((fieldName) =>
        setFieldValue(fieldName, initialValues[fieldName])
      );
      console.log({ initialValues });
      setIsInitialWorkDone(true);
    }
  }, [pi]);

  console.log({ partFullObj });

  useEffect(() => {
    if (
      isInitialWorkDone &&
      !isInititalPartsSetup &&
      pi &&
      partFullObj.length > 0
    ) {
      const newParts = pi?.parts?.map((partInv) => {
        let wantedPart = partFullObj.find(
          (part) => part?.id === partInv?.parts_id
        );
        const quantity = partInv?.quantity;
        const unit_cost = partInv?.price;
        const net_price = quantity * unit_cost;

        const gst = wantedPart?.gst_itm?.country_gst[0]?.gst_percent;

        console.log({ wantedPart, gst });

        const newPart = {
          part_id: {
            id: wantedPart?.id,
            part_number: wantedPart?.part_number,
          },
          short_description: wantedPart?.short_description,
          serialization: wantedPart?.serialization,
          quantity,
          unit_cost,
          net_price,
          gst,
          extd_gross_price: calculateExtdGrossPrice(gst, net_price),
        };
        console.log({ newPart });
        return newPart;
      });

      setFieldValue("parts", newParts);

      setIsInititalPartsSetup(true);
    }
  }, [pi, partFullObj]);
  // ----- END ----

  // Function to update net_price based on unit_cost and quantity
  const updateNetPrice = (index, value, changedForm) => {
    const part = values.parts[index];
    console.log({ part });
    let unitCost;
    let quantity;
    let gst = part.gst;

    if (changedForm === "quantity") {
      quantity = parseFloat(value) || 0;
      unitCost = parseFloat(part.unit_cost) || 0;
    } else {
      unitCost = parseFloat(value) || 0;
      quantity = parseFloat(part.quantity) || 0;
    }

    const netPrice = unitCost * quantity;
    let extd_gross_price = calculateExtdGrossPrice(gst, netPrice, quantity);

    setFieldValue(`parts[${index}].net_price`, netPrice.toFixed(2)); // You can format the net_price as needed
    setFieldValue(
      `parts[${index}].extd_gross_price`,
      parseFloat(extd_gross_price).toFixed(2)
    ); // You can format the net_price as needed
  };

  useEffect(() => {
    if (values && values?.parts?.length) {
      // console.log({ TOTAL_NET_PRICE: calculateTotalNetPrice(values.parts) });
      console.log({ parrts: values.parts });
      setFieldValue("total", calculateTotalNetPrice(values.parts));
      setFieldValue(
        "extd_gross_price",
        calculateTotalExtdGrossPrice(values.parts)
      );
    }
  }, [values]);

  //parts created staff
  const handleTable = (event) => {
    event.preventDefault();

    const newPart = {
      part_id: {
        id: selectPart?.value,
        part_number: selectPart?.label,
      },
      short_description,
      quantity: totalQuantity,
      unit_cost: unitCost,
      status: status?.value,
      gst,
      net_price,
      extd_gross_price: calculateExtdGrossPrice(gst, net_price, totalQuantity),
    };

    setFieldValue("parts", [...values.parts, newPart]);
    // clear input field
    setSelectPart(null);
    // setSelectPart({ label: "", value: "" });
    setshort_description("");
    setTotalQuantity(0);
    setUnitCost(0);
    setstatus(null);
    setgst(0);
    setNet_price(0);
    setExtd_gross_price(0);
  };

  // remove row
  const handleRemovePart = (index) => {
    const updatedParts = [...values.parts];
    updatedParts.splice(index, 1); // Remove the object at the specified index
    setFieldValue("parts", updatedParts);
  };

  //update && change select options
  const handlePartSelectChange = (selectedOption, index) => {
    const { value, label } = selectedOption;
    const updatedParts = [...values.parts];

    if (value) {
      updatedParts[index].part_id.id = value;
      updatedParts[index].part_id.part_number = label;
      let s = partFullObj.find((part) => part?.id === value);
      updatedParts[index].short_description = s?.short_description || "";
    }

    setFieldValue("parts", updatedParts);
  };

  // select part for the [PART NO]
  const handleSelectPart = (option) => {
    let { value } = option;
    if (value) {
      let s = partFullObj.find((part) => part?.id === value);
      console.log({ s });
      setSelectPart(option);
      setshort_description(s?.short_description || "");

      setTotalQuantity(1);
      setUnitCost(s?.mrp);
      setstatus(
        s?.is_active
          ? { label: "Active", value: "Active" }
          : { label: "Inactive", value: "Inactive" }
      );

      // Calc GST & NET PRICE
      const netprice = s?.mrp * 1;
      setNet_price(netprice);
      const gst = s?.gst_itm?.country_gst[0]?.gst_percent;
      setgst(gst);
      const extdgrossprice = calculateExtdGrossPrice(gst, netprice);
      setExtd_gross_price(extdgrossprice);
    } else {
      setshort_description("");
    }
  };

  if (loading || partsLoading) return <Loader />;
  return (
    <>
      <PageTitle title="Add PI" />
      {/* back button */}
      <div className="d-flex justify-content-end me-5 mb-4 ">
        <Link
          to="/dashboard/purchase-pi"
          className="btn btn-primary rounded-1 border-0 text-white"
        >
          <BsArrowLeft className="me-2" />
          Back
        </Link>
      </div>
      <div className="card">
        <div className="card-header flex">
          <h4 className="card-title">Update PI</h4>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              {/* Sales Lead input */}
              <div className="mb-3 col-md-6">
                <label className="mb-2 text-dark text-capitalize">
                  PI type
                </label>
                <Select
                  // title="Department"
                  placeholder="Select PI Type"
                  name="type"
                  isClearable
                  isSearchable
                  options={type}
                  value={values.type}
                  // onBlur={handleBlur}
                  onChange={(option) => setFieldValue("type", option)}
                />
              </div>

              {/* add status input */}
              <div className="mb-3 col-md-6">
                <label className="mb-2 text-dark text-capitalize">
                  Status*
                </label>
                <Select
                  placeholder="Select Status"
                  isLoading={loading}
                  isClearable
                  isSearchable
                  name="status"
                  value={values?.status}
                  options={statusOptions}
                  onChange={(option) => setFieldValue("status", option)}
                />
              </div>

              {/* add po date input */}
              <div className="mb-3 col-md-6">
                <InputText
                  title="Expected Date*"
                  type="date"
                  name="expected_date"
                  value={values.expected_date}
                  onChange={handleChange}
                />
              </div>

              {/* description input */}
              <div className="mb-3 col-12">
                <TextArea
                  title="enter terms and conditions*"
                  className="w-100"
                  placeholder="comments"
                  name="comments"
                  value={values.comments}
                  onChange={handleChange}
                />
                <br />
              </div>
            </div>
            {/* Table Part */}
            {/* Table */}
            {/* Table */}
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="table-responsive111">
                    <table className="table header-border table-responsive-sm111">
                      <thead>
                        <tr>
                          <th scope="col">Part No</th>
                          <th scope="col">Short Description</th>
                          {/* <th scope="col">Quantity</th>
                            <th scope="col">Unit Cost</th>
                            <th scope="col">GST</th>
                            <th scope="col">Net Price</th>
                            <th scope="col">Extd Gross Price</th>
                            <th scope="col">Action</th> */}
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="select-port">
                              <Select
                                className="select"
                                placeholder="Select Part No"
                                isSearchable
                                isClearable
                                isLoading={partsLoading && parts?.length > 0}
                                options={parts}
                                menuPortalTarget={document.querySelector(
                                  "body"
                                )}
                                value={selectPart}
                                onChange={(option) => handleSelectPart(option)}
                              />
                            </div>
                          </td>
                          <td>
                            <input
                              className="new_input_class"
                              type="text"
                              // placeholder='Short Description'
                              name="short_description"
                              value={short_description || "Select A Part No"}
                              // onChange={(e) =>
                              //   setshort_description(e.target.value)
                              // }
                              readOnly
                            />
                          </td>

                          <td>
                            <button
                              className="btn btn-primary rounded-1 py-2 px-4 d-flex justify-content-center align-items-center"
                              disabled={
                                !(
                                  short_description ||
                                  totalQuantity ||
                                  unitCost ||
                                  status ||
                                  gst ||
                                  net_price ||
                                  extd_gross_price
                                )
                              }
                              onClick={handleTable}
                            >
                              Add
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}

            {/* dynamic table */}
            {partsLoading ? (
              <Loader />
            ) : (
              <>
                {" "}
                <div className="table-responsive111">
                  {values.parts.length > 0 ? (
                    <div>
                      <table className="table table-bordered table-responsive-sm111">
                        <thead>
                          <tr>
                            <th scope="col">Part No</th>
                            <th scope="col">Short Description</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Unit Cost</th>
                            {/* <th scope='col'>Status</th> */}
                            <th scope="col">GST</th>
                            <th scope="col">Net Price</th>
                            <th scope="col">Extd Gross Price</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        {values?.parts?.map((part, index) => {
                          return (
                            <>
                              <tbody>
                                <tr key={index + 1}>
                                  <td>
                                    <div className="select-port">
                                      <Select
                                        className="select"
                                        placeholder="Select Part No"
                                        value={{
                                          label: part?.part_id?.part_number,
                                          value: part?.part_id?.id,
                                        }}
                                        options={parts}
                                        name="part_id"
                                        isSearchable
                                        isClearable
                                        onChange={(selectedOption) =>
                                          handlePartSelectChange(
                                            selectedOption,
                                            index
                                          )
                                        }
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <input
                                      className="new_input_class"
                                      type="text"
                                      placeholder="Short Description"
                                      name={`parts[${index}].short_description`}
                                      value={part.short_description}
                                      onChange={handleChange}
                                    />
                                  </td>

                                  <td>
                                    <input
                                      className="new_input_class"
                                      type="number"
                                      placeholder="Total Quntity"
                                      name={`parts[${index}].quantity`}
                                      value={part.quantity}
                                      onChange={(e) => {
                                        handleChange(e);
                                        updateNetPrice(
                                          index,
                                          e.target.value,
                                          "quantity"
                                        ); // Update net_price when unit_cost changes
                                      }}
                                    />
                                  </td>

                                  <td>
                                    <input
                                      className="new_input_class"
                                      type="number"
                                      placeholder="Unit Cost"
                                      name={`parts[${index}].unit_cost`}
                                      value={part?.unit_cost}
                                      onChange={(e) => {
                                        handleChange(e);
                                        updateNetPrice(
                                          index,
                                          e.target.value,
                                          "unit-cost"
                                        ); // Update net_price when unit_cost changes
                                      }}
                                    />
                                  </td>

                                  <td>
                                    <input
                                      className="new_input_class"
                                      type="number"
                                      placeholder="Extd Net Cost"
                                      name={`parts[${index}].gst`}
                                      value={part?.gst || ""}
                                      // onChange={handleChange}
                                      readOnly
                                    />
                                  </td>

                                  <td>
                                    <input
                                      className="new_input_class"
                                      type="number"
                                      placeholder="Extd Net Cost"
                                      name={`parts[${index}].net_price`}
                                      value={part?.net_price}
                                      // onChange={handleChange}
                                      readOnly
                                    />
                                  </td>
                                  <td>
                                    <input
                                      className="new_input_class"
                                      type="number"
                                      placeholder="Extd Gross Cost"
                                      name={`parts[${index}].extd_gross_price`}
                                      value={part?.extd_gross_price}
                                      // onChange={handleChange}
                                      readOnly
                                    />
                                  </td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn btn-danger btn-sm"
                                      onClick={() => handleRemovePart(index)}
                                    >
                                      Remove
                                    </button>
                                  </td>
                                </tr>
                              </tbody>
                              {values.parts?.length === index + 1 ? (
                                <tbody>
                                  <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "flex-end",
                                      }}
                                    >
                                      <h3
                                        style={{
                                          fontSize: "20px",
                                        }}
                                      >
                                        Total
                                      </h3>
                                    </td>
                                    <td>
                                      <div className="w-full">
                                        <InputText
                                          type="number"
                                          name="total"
                                          value={values?.total || ""}
                                          readOnly
                                        />
                                      </div>
                                    </td>
                                    <td>
                                      <div className="w-full">
                                        <InputText
                                          type="number"
                                          name="extd_gross_price"
                                          value={values?.extd_gross_price || ""}
                                          readOnly
                                        />
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              ) : null}
                            </>
                          );
                        })}
                      </table>
                      <div className="w-100">
                        <InputText
                          title="Total"
                          type="number"
                          name="total"
                          value={values?.total}
                          readOnly
                        />
                      </div>
                    </div>
                  ) : (
                    <h3 className="text-center">No Parts Added</h3>
                  )}
                </div>
              </>
            )}

            {/* Submit Button */}
            <div className="d-flex justify-content-end my-4">
              <input
                className="btn btn-primary btn-common rounded-1"
                type="submit"
                value="Update PI"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdatePi;