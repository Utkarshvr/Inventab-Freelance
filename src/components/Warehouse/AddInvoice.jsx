import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import Select from "react-select";
import PageTitle from "../../components/Shared/PageTitle";
import { useAuth } from "../../hooks/useAuth";

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

export default function AddInvoice() {
  const axios = useAxiosPrivate();
  const { auth } = useAuth();
  const { orgId, userId } = auth;

  const [loading, setLoading] = useState(false);
  const [dept, setDept] = useState([]);
  const [client, setClient] = useState([]);
  const [subOrg, setsubOrg] = useState([]);
  const [parts, setParts] = useState([]);
  const [partFullObj, setPartFullObj] = useState([]);
  const [selectPart, setSelectPart] = useState(null);
  const [partsLoading, setPartsLoading] = useState(false);

  // OTHERS
  const [orders, setOrders] = useState([]);
  const [ordersOptions, setOrdersOptions] = useState([]);
  const [shipperOptions, setShipperOptions] = useState([]);

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

  // load department, Client, sub-organization
  useEffect(() => {
    let isMount = true;
    const controller = new AbortController();
    // orders
    (async function () {
      try {
        setLoading(true);
        const { data } = await axios.get(`pipo/so/order/?org=${orgId}`, {
          signal: controller.signal,
        });
        setLoading(false);
        console.log({ orderData: data });
        setOrders(data?.results || []);

        const ordersArr = [];
        isMount &&
          data?.results?.forEach((dept) => {
            const deptObj = {
              label: dept?.so_id,
              value: dept?.id,
            };
            ordersArr.push(deptObj);
          });

        const removeUndefinedData = removeUndefinedObj(ordersArr);
        const uniqueArr = removeDuplicateObjects(removeUndefinedData);
        setOrdersOptions(uniqueArr);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    })();

    // Shipper
    (async function () {
      try {
        setLoading(true);
        const { data } = await axios.get(`/invoices/get/shipper/`, {
          signal: controller.signal,
        });
        setLoading(false);
        const shipperArr = [];
        isMount &&
          data?.results?.forEach((shipper) => {
            const shipperObj = {
              label: shipper?.name,
              value: shipper?.id,
            };
            shipperArr.push(shipperObj);
          });

        const removeUndefinedData = removeUndefinedObj(shipperArr);
        const uniqueArr = removeDuplicateObjects(removeUndefinedData);
        setShipperOptions(uniqueArr);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    })();

    // organization || department
    (async function () {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `organizations/fetch/department/?org=${orgId}&role_id=4d5e5124-f4fd-4c91-981a-cc0074fb1356`,
          {
            signal: controller.signal,
          }
        );
        setLoading(false);
        const deptArr = [];
        isMount &&
          data?.results?.forEach((dept) => {
            const deptObj = {
              label: dept?.name,
              value: dept?.id,
            };
            deptArr.push(deptObj);
          });

        const removeUndefinedData = removeUndefinedObj(deptArr);
        const uniqueArr = removeDuplicateObjects(removeUndefinedData);
        setDept(uniqueArr);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    })();

    // client
    (async function () {
      try {
        setLoading(true);
        const { data } = await axios.get(`organizations/fetch/org/`, {
          signal: controller.signal,
        });
        setLoading(false);
        const clientArr = [];
        isMount &&
          data?.results?.forEach((client) => {
            const clientObj = {
              label: client?.company_name,
              value: client?.id,
            };
            clientArr.push(clientObj);
          });

        const removeUndefinedData = removeUndefinedObj(clientArr);
        const uniqueArr = removeDuplicateObjects(removeUndefinedData);
        setClient(uniqueArr);
      } catch (error) {
        setLoading(false);
        console.log(error);
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
        const { data } = await axios.get("parts/parts", {
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
    { label: "Prospect", value: "Prospect" },
    { label: "Approach", value: "Approach" },
    { label: "Qualify", value: "Qualify" },
    { label: "Pitch", value: "Pitch" },
    { label: "Handle Objections", value: "Handle Objections" },
    { label: "Close the Deal", value: "Close the Deal" },
    { label: "Lost Deal", value: "Lost Deal" },
  ];

  // form submit
  const { setFieldValue, values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      salesOrder: null, //
      invDate: null, //
      status: null, //
      refPONo: 0, //
      poDate: "", //
      client: null, //
      billingAddress: "", //
      shippingAddress: "", //
      paymentTerm: "", //
      shipmentCharges: 0, //
      deliveryTerm: "", //
      shipper: "",
      docketNo: "",

      parts: [],
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        // console.log(values);
        const {
          salesOrder,
          invDate,
          status,
          refPONo,
          poDate,
          client,
          billingAddress,
          shippingAddress,
          paymentTerm,
          shipmentCharges,
          deliveryTerm,
          shipper,
          docketNo,
          parts: partArr,
        } = values;
        // sort part obj data
        let parts = [];

        console.log({ partArr });
        partArr.forEach((p) => {
          const partObj = {
            lead_part_id: p?.lead_part_id,
            parts_no: p?.part_id?.id,
            customer_part_no: p?.part_id?.part_number,
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

        // created lead obj
        const Invoice_Payload = {
          parts_invoice: parts,
          po_number: refPONo,
          po_date: poDate,
          invoice_date: invDate,
          delivery_term: deliveryTerm?.label,
          payment_term: paymentTerm?.id,
          shipment_charges: shipmentCharges,
          current_org: orgId,
          dept: status?.id,
          client: client?.label,
          shipper: shipper?.id,
          docketNo,

          invoice_type: "138fef7c-8785-4b16-9deb-0fd49902f5fa",
          invoice_comment: "sdfdsa",

          billing_address: billingAddress?.id,
          shipping_address: shippingAddress?.id,

          sale_order: salesOrder?.id,

          org: orgId,
          created_by: userId,
        };

        const res = await axios.post(
          `/invoices/create/invoice/`,
          JSON.stringify(Invoice_Payload)
        );
        console.log({ res });
        if (res?.status === 201) {
          resetForm({ values: "" });
          toast.success("Invoice created successfully");
        }
      } catch (error) {
        toast.error(error?.message, { duration: 2000 });
        console.log(error);
      }
    },
  });

  useEffect(() => {
    const opt = values.salesOrder;
    const order = orders.find((e) => e.id === opt?.value);
    console.log({ order });
    if (order) {
      const {
        billing_address,
        shipping_address,
        department,
        ref_po,
        client,
        po_date,
        delivery_term,
        payment_term,
        expected_inv_date,
      } = order;
      // dept, po_no, ref_po_date, client, billind, shipping, payment term, delivery temr
      setFieldValue("client", { label: client?.company_name, id: client?.id });
      // dept
      setFieldValue("status", {
        label: department?.name,
        id: department?.id,
      });
      setFieldValue("refPONo", ref_po);
      setFieldValue("invDate", expected_inv_date);
      setFieldValue("poDate", po_date);
      setFieldValue("billingAddress", {
        label: billing_address?.address,
        id: billing_address?.id,
      });
      setFieldValue("shippingAddress", {
        label: shipping_address?.address,
        id: shipping_address?.id,
      });
      setFieldValue("paymentTerm", {
        label: payment_term?.term,
        id: payment_term?.id,
      });
      setFieldValue("deliveryTerm", {
        label: delivery_term?.term,
        id: delivery_term?.id,
      });
    } else {
      setFieldValue("client", "");
      // dept
      setFieldValue("status", "");
      setFieldValue("refPONo", "");
      setFieldValue("invDate", "");
      setFieldValue("poDate", "");
      setFieldValue("billingAddress", "");
      setFieldValue("shippingAddress", "");
      setFieldValue("paymentTerm", "");
      setFieldValue("deliveryTerm", "");
    }
  }, [values.salesOrder]);

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
    if (values && values?.parts?.length > 0) {
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
      console.log({ s });
      updatedParts[index].short_description = s?.short_description || "";
      updatedParts[index].customer_part_no = s?.part_number || "";
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

  return (
    <>
      <PageTitle title="Add Invoice" />
      {/* back button */}
      <div className="d-flex justify-content-end me-5 mb-4 ">
        <Link
          to="/dashboard/sales-leads"
          className="btn btn-primary rounded-1 border-0 text-white"
        >
          <BsArrowLeft className="me-2" />
          Back
        </Link>
      </div>
      <div className="card">
        <div className="card-header flex">
          <h4 className="card-title">Add Invoice</h4>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              {/* Sales Sales Order */}
              <div className="mb-3 col-md-6">
                <label className="mb-2 text-dark text-capitalize">
                  Sales Order
                </label>
                <Select
                  placeholder="Select Sales Order"
                  name="salesOrder"
                  isClearable
                  isSearchable
                  options={ordersOptions}
                  value={values.salesOrder}
                  onChange={(option) => setFieldValue("salesOrder", option)}
                />
              </div>

              {/* add Inv Date input */}
              <div className="mb-3 col-md-6">
                <label className="mb-2 text-dark text-capitalize">
                  Invoice Date
                </label>
                <InputText
                  type="date"
                  name="invDate"
                  placeholder="Invoice Date"
                  value={values.invDate}
                />
              </div>

              {/* add Dept input */}
              <div className="mb-3 col-md-6">
                <label className="mb-2 text-dark text-capitalize">
                  Select Dept
                </label>
                <Select
                  placeholder="Select Dept"
                  isLoading={loading}
                  isClearable
                  isSearchable
                  name="status"
                  value={values?.status}
                  options={statusOptions}
                  onChange={(option) => setFieldValue("status", option)}
                />
              </div>

              {/* Rof PO NO input */}
              <div className="mb-3 col-md-6">
                <InputText
                  title="Ref PO No"
                  type="text"
                  name="refPONo"
                  placeholder="Ref PO No"
                  value={values?.refPONo || ""}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (
                      value === "" ||
                      (/^\d+$/.test(value) && parseInt(value) <= 100)
                    ) {
                      handleChange(e);
                    }
                  }}
                />
              </div>

              {/* add ref po date input */}
              <div className="mb-3 col-md-6">
                <InputText
                  title="Ref PO Date"
                  type="date"
                  name="poDate"
                  placeholder="Ref PO Date"
                  value={values.poDate}
                />
              </div>

              {/* add client input */}
              <div className="mb-3 col-md-6">
                <label className="mb-2 text-dark text-capitalize">Client</label>
                <Select
                  placeholder="Select Client"
                  isLoading={loading}
                  isSearchable
                  isClearable
                  name="client"
                  options={client}
                  value={values?.client}
                  // onChange={(option) => setFieldValue("client", option)}
                />
              </div>

              {/* add Billing Address input */}
              <div className="mb-3 col-md-6">
                <label className="mb-2 text-dark text-capitalize">
                  Billing Address
                </label>
                <Select
                  placeholder="Select Billing Address"
                  isLoading={loading}
                  isSearchable
                  isClearable
                  name="billingAddress"
                  options={client}
                  value={values.billingAddress}
                  onChange={(option) => setFieldValue("billingAddress", option)}
                />
              </div>

              {/* add Shipping Address input */}
              <div className="mb-3 col-md-6">
                <label className="mb-2 text-dark text-capitalize">
                  Shipping Address
                </label>
                <Select
                  placeholder="Select Shipping Address"
                  isLoading={loading}
                  isSearchable
                  isClearable
                  name="shippingAddress"
                  options={client}
                  value={values.shippingAddress}
                  onChange={(option) =>
                    setFieldValue("shippingAddress", option)
                  }
                />
              </div>

              {/* add Payment Term input */}
              <div className="mb-3 col-md-6">
                <label className="mb-2 text-dark text-capitalize">
                  Payment Term
                </label>
                <Select
                  placeholder="Select Payment Term"
                  isLoading={loading}
                  isSearchable
                  isClearable
                  name="paymentTerm"
                  options={client}
                  value={values.paymentTerm}
                  onChange={(option) => setFieldValue("paymentTerm", option)}
                />
              </div>

              {/* add Delivery Term input */}
              <div className="mb-3 col-md-6">
                <label className="mb-2 text-dark text-capitalize">
                  Delivery Term{" "}
                </label>
                <Select
                  placeholder="Select Delivery Term"
                  isLoading={loading}
                  isSearchable
                  isClearable
                  name="deliveryTerm"
                  options={client}
                  value={values.deliveryTerm}
                  onChange={(option) => setFieldValue("deliveryTerm", option)}
                />
              </div>

              {/* add Shipment Charges input */}
              <div className="mb-3 col-md-6">
                <label className="mb-2 text-dark text-capitalize">
                  Enter Shipment Charges
                </label>
                <InputText
                  name="contact_name"
                  type="number"
                  placeholder="Shipment Charges"
                  value={values.shipmentCharges}
                  onChange={(e) =>
                    setFieldValue("shipmentCharges", e.target.value)
                  }
                />
              </div>

              {/* add Shipper input */}
              <div className="mb-3 col-md-6">
                <label className="mb-2 text-dark text-capitalize">
                  Shipper
                </label>
                <Select
                  placeholder="Select Shipper"
                  isLoading={loading}
                  isSearchable
                  isClearable
                  name="shipper"
                  options={shipperOptions}
                  value={values.shipper}
                  onChange={(option) => setFieldValue("shipper", option)}
                />
              </div>

              {/* add Docket No input */}
              <div className="mb-3 col-md-6">
                <InputText
                  title="Enter Docket No"
                  type="text"
                  name="docketNo"
                  placeholder="Docket No"
                  value={values.docketNo}
                  onChange={(e) => setFieldValue("docketNo", e.target.value)}
                />
              </div>
            </div>
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
                                        placeholder="Select Port No"
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
                value="Add Invoice"
              />
            </div>
          </form>
        </div>
      </div>

      <h6 style={{ marginTop: "1.5em" }} className="fw-bold">
        Terms & Conditions: {"NO"}
      </h6>
    </>
  );
}
