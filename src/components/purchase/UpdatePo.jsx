import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
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
import SerializedPartsModal from "../Modal/SerializedPartsModal";
import Input from "react-select";

export default function AddInvoice({ selectedData }) {
  const axios = useAxiosPrivate();
  const { auth } = useAuth();
  const { orgId, userId } = auth;
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [dept, setDept] = useState([]);
  //   const [client, setClient] = useState([]);
  const [subOrg, setsubOrg] = useState([]);
  const [parts, setParts] = useState([]);
  const [partFullObj, setPartFullObj] = useState([]);
  const [selectPart, setSelectPart] = useState(null);
  const [partsLoading, setPartsLoading] = useState(false);
  const [isPartSerialized, setIsPartSerialized] = useState(false);
  const [isInitialSettingDone, setIsInitialSettingDone] = useState(false);

  const [potype, setPotype] = useState([]);
  const [vendor, setVendor] = useState([]);
  const [billingAddress, setBillingAddress] = useState([]);
  const [vendorAddress, setVendorAddress] = useState([]);
  const [vendorContact, setVendorContact] = useState([]);
  const [shippingAddress, setShippingAddress] = useState([]);
  const [deliveryTerm, setDeliveryTerm] = useState([]);
  const [paymentTerm, setPaymentTerm] = useState([]);
  const [associatedPI, setassociatedPI] = useState([]);
  const [po, setPo] = useState(null);

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

  const [allPOs, setAllPOs] = useState([]);

  //   useEffect(() => {
  //     if (allPOs.length > 0) setPo(allPOs.find((po) => po?.id === id));
  //   }, [allPOs]);

  console.log({ allPOs, po });
  // MODAL STATE
  const [serialModalState, setSerialModalState] = useState({
    isOpen: false,
    serialNumbers: [],
    index: 0,
  });
  const [selectedNums, setSelectedNums] = useState([]);
  // console.log({
  //   serializedParts: partFullObj.find(
  //     (part) => part.id === "1f70309a-ea9e-4f74-99f2-94593a027e97"
  //   ),
  // });

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
    // po of given id
    (async function () {
      try {
        setLoading(true);
        const { data } = await axios.get(`pipo/purchase-order/list/?id=${id}`, {
          signal: controller.signal,
        });
        setLoading(false);
        console.log({ data });
        setPo(data?.results[0]);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    })();
    // orders
    (async function () {
      try {
        setLoading(true);
        const { data } = await axios.get(`pipo/pi/fetch/?org=${orgId}`, {
          signal: controller.signal,
        });
        setLoading(false);
        setOrders(data?.results || []);

        const ordersArr = [];
        isMount &&
          data?.results?.forEach((PID) => {
            const PIDObj = {
              label: PID?.pi_id,
              value: PID?.id,
            };
            ordersArr.push(PIDObj);
          });

        const removeUndefinedData = removeUndefinedObj(ordersArr);
        const uniqueArr = removeDuplicateObjects(removeUndefinedData);
        setOrdersOptions(uniqueArr);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    })();

    (async function () {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `pipo/purchase-order/list/?org=${orgId}`,
          {
            signal: controller.signal,
          }
        );
        setAllPOs(data?.results);
        setLoading(false);

        const vendorArr = data.results
          .map((vendor) => ({
            label: vendor?.vendor?.company_name,
            value: vendor?.vendor?.id,
          }))
          .filter((vendor, index, self) => {
            // Filter out null labels and duplicates
            return (
              vendor.label !== null &&
              self.findIndex((u) => u.label === vendor.label) === index
            );
          });

        if (isMount) {
          setVendor(vendorArr);
        }
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    })();

    (async function () {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `pipo/purchase-order/list/?org=${orgId}`,
          {
            signal: controller.signal,
          }
        );
        setLoading(false);

        const typeArr = data.results
          .map((type) => ({
            label: type?.po_type?.name,
            value: type?.po_type?.id,
          }))
          .filter((type, index, self) => {
            // Filter out null labels and duplicates
            return (
              type.label !== null &&
              self.findIndex((u) => u.label === type.label) === index
            );
          });

        if (isMount) {
          setPotype(typeArr);
        }
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    })();

    (async function () {
      try {
        setLoading(true);
        const { data } = await axios.get(`pipo/so/order/?org=${orgId}`, {
          signal: controller.signal,
        });
        setLoading(false);

        const addressArr = data.results
          .map((address) => ({
            label: address?.billing_address?.address,
            value: address?.billing_address?.id,
          }))
          .filter((address, index, self) => {
            // Filter out null labels and duplicates
            return (
              address.label !== null &&
              self.findIndex((u) => u.label === address.label) === index
            );
          });

        if (isMount) {
          setBillingAddress(addressArr);
        }
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    })();

    (async function () {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `pipo/purchase-order/list/?org=${orgId}`,
          {
            signal: controller.signal,
          }
        );
        setLoading(false);

        const vendorArr = data.results
          .map((vendor) => ({
            label: vendor?.vendor?.address,
            value: vendor?.vendor?.id,
          }))
          .filter((vendor, index, self) => {
            // Filter out null labels and duplicates
            return (
              vendor.label !== null &&
              self.findIndex((u) => u.label === vendor.label) === index
            );
          });

        if (isMount) {
          setVendorAddress(vendorArr);
        }
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    })();

    (async function () {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `pipo/purchase-order/list/?org=${orgId}`,
          {
            signal: controller.signal,
          }
        );
        setLoading(false);

        const vendorArr = data.results
          .map((vendor) => ({
            label: vendor?.vendor?.contact_person,
            value: vendor?.vendor?.id,
          }))
          .filter((vendor, index, self) => {
            // Filter out null labels and duplicates
            return (
              vendor.label !== null &&
              self.findIndex((u) => u.label === vendor.label) === index
            );
          });

        if (isMount) {
          setVendorContact(vendorArr);
        }
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    })();

    (async function () {
      try {
        setLoading(true);
        const { data } = await axios.get(`pipo/so/order/?org=${orgId}`, {
          signal: controller.signal,
        });
        setLoading(false);

        const addressArr = data.results
          .map((address) => ({
            label: address?.shipping_address?.address,
            value: address?.shipping_address?.id,
          }))
          .filter((address, index, self) => {
            // Filter out null labels and duplicates
            return (
              address.label !== null &&
              self.findIndex((u) => u.label === address.label) === index
            );
          });

        if (isMount) {
          setShippingAddress(addressArr);
        }
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    })();

    (async function () {
      try {
        setLoading(true);
        const { data } = await axios.get(`pipo/so/order/?org=${orgId}`, {
          signal: controller.signal,
        });
        setLoading(false);

        const deliveryArr = data.results
          .map((delivery) => ({
            label: delivery?.delivery_term?.term,
            value: delivery?.delivery_term?.id,
          }))
          .filter((delivery, index, self) => {
            // Filter out null labels and duplicates
            return (
              delivery.label !== null &&
              self.findIndex((u) => u.label === delivery.label) === index
            );
          });

        if (isMount) {
          setDeliveryTerm(deliveryArr);
        }
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    })();

    (async function () {
      try {
        setLoading(true);
        const { data } = await axios.get(`pipo/so/order/?org=${orgId}`, {
          signal: controller.signal,
        });
        setLoading(false);

        const paymentArr = data.results
          .map((payment) => ({
            label: payment?.payment_term?.term,
            value: payment?.payment_term?.id,
          }))
          .filter((payment, index, self) => {
            // Filter out null labels and duplicates
            return (
              payment.label !== null &&
              self.findIndex((u) => u.label === payment.label) === index
            );
          });

        if (isMount) {
          setPaymentTerm(paymentArr);
        }
      } catch (error) {
        setLoading(false);
        console.error(error);
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

  const statusOptions = [
    { label: "ACTIVE", value: 1 },
    { label: "INACTIVE", value: 0 },
  ];
  // form submit
  const { setFieldValue, values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      expectedDate: null, //
      type: null,
      status: null, //
      vendor: null, //
      poDate: "", //
      salesOrder: "",
      po_id: null, //
      billingAddress: "", //
      shippingAddress: "", //
      paymentTerm: null, //
      mobile: "",
      comments: "",
      pi_id: "",
      parts: [],
      status: "1",
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        // console.log(values);
        const {
          expectedDate,

          vendor,

          billingAddress,
          shippingAddress,
          paymentTerm,
          potype,
          deliveryTerm,
          salesOrder,
          comments,
          mobile,
          parts: partArr,
          pi_id,
          status,
        } = values;
        // sort part obj data
        let parts = [];

        console.log({ partArr });
        partArr.forEach((part) => {
          const partObj = {
            lead_part_id: part?.lead_part_id,
            parts_no: part?.part_id?.id,
            short_description: part?.short_description,
            quantity: parseFloat(part?.quantity),
            price: parseFloat(part?.unit_cost),
            status: "Active",
            gst: parseFloat(part?.gst),
            net_price: parseFloat(part?.net_price),
            extd_gross_price: parseFloat(part?.extd_gross_price),
            quantity: parseFloat(part?.quantity),
          };

          if (part?.lead_part_id == undefined) {
            delete partObj.lead_part_id;
          }

          parts?.push(partObj);
        });

        //created lead obj
        const Invoice_Payload = {
          ...values,
          expected_date: expectedDate,
          po_type: potype?.value || null,
          parts,
          vendor: vendor?.value,
          // po_date: poDate,
          // invoice_date: invDate,
          delivery_term: deliveryTerm?.value,
          payment_term: paymentTerm?.value,
          // po_id:po_type?.value,
          // Invoice_Parts:parts_invoice,
          // current_org: orgId,
          comments: comments,
          billing_address: billingAddress?.value,
          shipping_address: shippingAddress?.value,
          mobile: mobile,
          po_id: null,
          status: status?.value,
          // associated_pi:associatedPI?.value,
          org: orgId,
          created_by: userId,
          associated_pi: salesOrder?.value,
        };
        console.log({ Invoice_Payload });

        const res = await axios.put(
          `pipo/create/purchase-order/${id}/`,
          JSON.stringify(Invoice_Payload)
        );
        console.log({ res });
        // resetForm({ values: "" });
        toast.success("PO updated successfully");
      } catch (error) {
        toast.error(
          error?.response?.status === 400
            ? "Fill all the  * fields"
            : error?.message,
          { duration: 2000 }
        );
        console.log(error);
      }
    },
  });

  // **TO FILL THE PREVIOUS VALUES**
  // ---- START ----
  const [isInitialWorkDone, setIsInitialWorkDone] = useState(false);
  const [isInititalPartsSetup, setIsInititalPartsSetup] = useState(false);

  useEffect(() => {
    if (!isInitialWorkDone && po) {
      const initialValues = {
        salesOrder: {
          label: po?.associated_pi?.pi_id,
          value: po?.associated_pi?.id,
        },
        potype: {
          label: po?.po_type?.name,
          value: po?.po_type?.id,
        },
        status: {
          label: po?.status === 1 ? "ACTIVE" : "INACTIVE",
          value: po?.status,
        },
        expected_date: po?.expected_date,
        comments: po?.comments,
        billingAddress: {
          label: po?.billing_address,
          value: po?.billing_address,
        },
        vendorAddress: {
          label: po?.vendor?.address,
          value: po?.vendor?.address,
        },
        shippingAddress: {
          label: po?.shipping_address,
          value: po?.shipping_address,
        },
        deliveryTerm: {
          label: po?.delivery_term?.term,
          value: po?.delivery_term?.id,
        },
        paymentTerm: {
          label: po?.payment_term?.term,
          value: po?.payment_term?.id,
        },
        vendor: {
          label: po?.vendor?.company_name,
          value: po?.vendor?.id,
        },
        mobile: po?.mobile,
      };
      [
        "salesOrder",
        "potype",
        "status",
        "expected_date",
        "comments",
        "billingAddress",
        "vendorAddress",
        "shippingAddress",
        "deliveryTerm",
        "paymentTerm",
        "vendor",
        "mobile",
      ].map((fieldName) => setFieldValue(fieldName, initialValues[fieldName]));

      console.log({ initialValues });
      setIsInitialWorkDone(true);
    }
  }, [po]);

  useEffect(() => {
    if (
      isInitialWorkDone &&
      !isInititalPartsSetup &&
      po &&
      partFullObj.length > 0
    ) {
      const newParts = po?.parts?.map((partInv) => {
        let wantedPart = partFullObj.find(
          (part) => part?.id === partInv?.parts_id?.id
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
  }, [po, partFullObj]);
  // ----- END ----

  useEffect(() => {
    const opt = values.salesOrder;
    const order = orders.find((e) => e.id === opt?.value);
    // console.log({ order }, "test");
    if (order) {
      const {
        expected_date,
        billing_address,
        shipping_address,
        department,
        ref_po,
        pi_type,
        po_date,
        vendor,
        delivery_term,
        payment_term,
        expected_inv_date,
        parts,
        part_number,
      } = order;

      setFieldValue("expectedDate", expected_date);

      const formattedParts = parts?.map((part) => {
        let thatPart = partFullObj.find(
          (partObj) => partObj?.id === part?.parts_id
        );
        console.log({ thatPart });

        return {
          part_id: {
            id: thatPart?.id,
            part_number: thatPart?.part_number,
          },
          short_description: thatPart?.short_description,
          quantity: part?.quantity,
          unit_cost: part?.price,
          status: status?.value,
          gst: thatPart?.gst_itm?.country_gst[0]?.gst_percent,
          net_price: part?.price * part?.quantity,
          extd_gross_price: calculateExtdGrossPrice(
            thatPart?.gst_itm?.country_gst[0]?.gst_percent,
            part?.price * part?.quantity
          ),
          serialization: thatPart?.serialization,
        };
      });
      console.log({ formattedParts });
      setFieldValue("parts", formattedParts);
    } else {
      setFieldValue("expectedDate", "");
      setFieldValue("parts", "");
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
      // console.log({ parrts: values.parts });
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
      serialization: isPartSerialized,
    };
    console.log({ newPart });

    setFieldValue("parts", [...values.parts, newPart]);
    console.log(values.parts);
    // clear input field
    setSelectPart(null);
    setSelectPart({ label: "", value: "" });
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
    console.log("i am in handle 946");
    const { value, label } = selectedOption;
    const updatedParts = [...values.parts];

    // console.log( selectedOption );
    if (value) {
      updatedParts[index].part_id.id = value;
      updatedParts[index].part_id.part_number = label;
      let s = partFullObj.find((part) => part?.id === value);
      console.log({ s });

      updatedParts[index].short_description = s?.short_description || "";
      updatedParts[index].customer_part_no = s?.part_number || "";
      updatedParts[index].serialization = s?.serialization || false;
    }
    console.log({ updatedParts });

    setFieldValue("parts", updatedParts);
  };

  // select part for the [PART NO]
  const handleSelectPart = (option) => {
    let { value } = option;

    console.log(option, "select");
    console.log(value, "part");
    if (value) {
      let s = partFullObj.find((part) => part?.id === value);
      console.log({ s }, "fff");
      setSelectPart(option);
      setshort_description(s?.short_description || "");

      setTotalQuantity(s?.serialization ? 0 : 1);
      setUnitCost(s?.mrp);
      setstatus(
        s?.is_active
          ? { label: "Active", value: "Active" }
          : { label: "Inactive", value: "Inactive" }
      );
      setIsPartSerialized(s?.serialization);

      // Calc GST & NET PRICE
      const netprice = s?.unit_cost * 1;
      setNet_price(netprice);
      const gst = s?.gst_itm?.country_gst[0]?.gst_percent;
      setgst(gst);
      const extdgrossprice = calculateExtdGrossPrice(gst, netprice);
      setExtd_gross_price(extdgrossprice);
    } else {
      setshort_description("");
    }
  };

  //
  const handleQuanityClickForSerializedParts = async (index, part_no) => {
    try {
      const { data } = await axios.get(
        `/inventory/gr/list/?part_no=${part_no}`
      );

      setSerialModalState({
        isOpen: true,
        serialNumbers: data?.results,
        index,
      });
    } catch (error) {
      console.log(error);
    }
  };

  if (loading || partsLoading) return <Loader />;

  return (
    <>
      <PageTitle title="Add PO" />
      {/* back button */}
      <div className="d-flex justify-content-end me-5 mb-4 ">
        <Link
          to="/dashboard/purchase-po"
          className="btn btn-primary rounded-1 border-0 text-white"
        >
          <BsArrowLeft className="me-2" />
          Back
        </Link>
      </div>
      <div className="card">
        <div className="card-header flex">
          <h4 className="card-title">Update PO</h4>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              {/* Sales Sales Order */}
              <div className="mb-3 col-md-6">
                <label className="mb-2 text-dark text-capitalize">PID</label>
                <Select
                  placeholder="Select PID"
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
                  Expected Date
                </label>
                <InputText
                  type="date"
                  name="expected_date"
                  placeholder="Expected Date"
                  value={values.expectedDate}
                  onChange={(option) => setFieldValue("expected_date", option)}
                />
              </div>

              <div className="mb-3 col-md-6">
                <label className="mb-2 text-dark text-capitalize">Vendor</label>
                <Select
                  placeholder="Enter Vendor"
                  isLoading={loading}
                  isSearchable
                  isClearable
                  name="vendor"
                  options={vendor}
                  value={values.vendor}
                  onChange={(option) => setFieldValue("vendor", option)}
                />
              </div>

              <div className="mb-3 col-md-6">
                <label className="mb-2 text-dark text-capitalize">
                  Po Type
                </label>
                <Select
                  placeholder="po type"
                  isLoading={loading}
                  isSearchable
                  isClearable
                  name="potype"
                  options={potype}
                  value={values.potype}
                  onChange={(option) => setFieldValue("potype", option)}
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
                  options={billingAddress}
                  value={values.billingAddress}
                  onChange={(option) => setFieldValue("billingAddress", option)}
                />
              </div>

              <div className="mb-3 col-md-6">
                <label className="mb-2 text-dark text-capitalize">
                  Vendor Billing Address
                </label>
                <Select
                  placeholder="Select Vendor Billing Address"
                  isLoading={loading}
                  isSearchable
                  isClearable
                  name="vendorAddress"
                  options={vendorAddress}
                  value={values.vendorAddress}
                  onChange={(option) => setFieldValue("vendorAddress", option)}
                />
              </div>

              <div className="mb-3 col-md-6">
                <label className="mb-2 text-dark text-capitalize">
                  Vendor Contact
                </label>
                <InputText
                  placeholder="Select Vendor Contact"
                  type="number"
                  name="mobile"
                  value={values.mobile}
                  onChange={handleChange}
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
                  options={shippingAddress}
                  value={values.shippingAddress}
                  onChange={(option) =>
                    setFieldValue("shippingAddress", option)
                  }
                />
              </div>

              <div className="mb-3 col-md-6">
                <label className="mb-2 text-dark text-capitalize">
                  Delivery Term
                </label>
                <Select
                  placeholder="Select Delivery Term"
                  isLoading={loading}
                  isSearchable
                  isClearable
                  name="deliveryTerm"
                  options={deliveryTerm}
                  value={values.deliveryTerm}
                  onChange={(option) => setFieldValue("deliveryTerm", option)}
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
                  options={paymentTerm}
                  value={values.paymentTerm}
                  onChange={(option) => setFieldValue("paymentTerm", option)}
                />
              </div>

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

              {/* add Shipment Charges input */}
              <div className="mb-3 col-md-12">
                <label className="mb-2 text-dark text-capitalize">
                  Terms and Conditions
                </label>
                <InputText
                  name="comments"
                  type="text"
                  placeholder="Enter Terms and Conditions"
                  value={values.comments}
                  onChange={handleChange}
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
                              onChange={(e) =>
                                setshort_description(e.target.value)
                              }
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
                          console.log(part, "ff");
                          return (
                            <>
                              <tbody>
                                <tr key={index + 1}>
                                  <td>
                                    <div className="select-port">
                                      {/* FIX PART NO */}
                                      <Select
                                        className="select"
                                        placeholder="Select Part No"
                                        value={{
                                          label: part?.part_id?.part_number,
                                          value: part?.part_id?.id,
                                          //   label: part?.parts_no,
                                          //   value: part?.id,
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
                                      value={part?.short_description}
                                      onChange={handleChange}
                                    />
                                  </td>

                                  {part.serialization ? (
                                    <td
                                      style={{ cursor: "pointer" }}
                                      onClick={() =>
                                        handleQuanityClickForSerializedParts(
                                          index,
                                          part.part_id.id
                                        )
                                      }
                                    >
                                      <input
                                        style={{
                                          border: "1px solid rebeccapurple",
                                          color: "rebeccapurple",
                                          cursor: "pointer",
                                        }}
                                        className="new_input_class"
                                        type="number"
                                        placeholder="Total Quntity"
                                        name={`parts[${index}].quantity`}
                                        value={part.quantity}
                                      />
                                    </td>
                                  ) : (
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
                                  )}

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
                value="Update po"
              />
            </div>
          </form>
        </div>
      </div>

      {serialModalState.isOpen ? (
        <SerializedPartsModal
          serialNumbers={serialModalState.serialNumbers}
          handleClose={() =>
            setSerialModalState(() => ({ isOpen: false, serialNumbers: [] }))
          }
          setFieldValue={setFieldValue}
          serialModalState={serialModalState}
          selectedNums={selectedNums}
          setSelectedNums={setSelectedNums}
          updateNetPrice={updateNetPrice}
        />
      ) : null}
      <h6 style={{ marginTop: "1.5em" }} className="fw-bold">
        Terms & Conditions: {"NO"}
      </h6>
    </>
  );
}
