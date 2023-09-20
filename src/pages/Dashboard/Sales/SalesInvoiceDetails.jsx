/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { AiOutlinePrinter } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import ReactToPrint from "react-to-print";
import PageTitle from "../../../components/Shared/PageTitle";
import SectionTitle from "../../../components/Shared/SectionTitle";

import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import Loader from "../../../ui/Loader";
import { calculateGST, inWords } from "../../../utils/utilityFunc/utilityFunc";
import logo from "./../../../assets/images/favicon.ico";
import "./sales.css";
import PaymentRecordsModal from "../../../components/Modal/paymentRecordsModal";

const SalesInvoiceDetails = ({ hasPaymentButton, back }) => {
  const [serializedNo, setSerializedNo] = useState("");
  // same address
  const [isSameAddress, setIsSameAddress] = useState({
    CGST: 0,
    SGST: 0,
    IGST: 0,
    shipping: 0,
    grossTotal: 0,
  });

  //diff address
  const [isDiffAddress, setIsDiffAddress] = useState({
    IGST: 0,
    shipping: 0,
    grossTotal: 0,
  });

  const { invoice_id } = useParams();
  const axios = useAxiosPrivate();

  const [invoiceDetails, setInvoiceDetails] = useState();

  const [serialNumbers, setSerialNumbers] = useState([]);

  const [loading, setLoading] = useState(false);

  const printRef = useRef();

  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  console.log(invoiceDetails);

  // load leads
  useEffect(() => {
    // fetch invoiceDetails table data
    let isMount = true;
    const controller = new AbortController();
    const leads = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `invoices/fetch/all/invoices/?id=${invoice_id}`,
          { signal: controller.signal }
        );
        setLoading(false);
        isMount && setInvoiceDetails(data?.results[0]);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    leads();

    return () => {
      (isMount = false), controller.abort();
    };
  }, [invoice_id, axios]);

  // check shipping or billign address same or not
  useEffect(() => {
    if (
      invoiceDetails?.billing_address?.id ===
      invoiceDetails?.shipping_address?.id
    ) {
      // calculate gst
      let result = calculateGST(invoiceDetails);

      // shipping charge
      let shippingCharge = invoiceDetails?.shipment_charges;

      //set data for same address ['CGST', "SGST"]
      setIsSameAddress({
        CGST: parseFloat(result / 2).toFixed(2),
        SGST: parseFloat(result / 2).toFixed(2),
        IGST: 0,
        shipping: parseFloat(shippingCharge).toFixed(2),
        grossTotal: parseFloat(result + shippingCharge).toFixed(2),
      });
    } else {
      // calculate gst
      let result = calculateGST(invoiceDetails);
      // shipping charge
      let shippingCharge = invoiceDetails?.shipment_charges;

      //set data for diff address ['IGST']
      setIsDiffAddress({
        IGST: parseFloat(result).toFixed(2),
        shipping: parseFloat(shippingCharge).toFixed(2),
        grossTotal: parseFloat(result + shippingCharge).toFixed(2),
      });
    }
  }, [invoiceDetails]);

  const fetchSerialNumbers = async (index) => {
    const part_number =
      invoiceDetails?.parts_invoice[index]?.parts_no?.part_number;
    const invoice_number = invoiceDetails?.invoice_number;

    const { data } = await axios.get(
      `/invoices/fetch/all/invoices/get_serialized_parts/?part_number=${part_number}&invoice_number=${invoice_number}`
    );

    setSerialNumbers(data.serial_numbers);
  };
  // console.log({ serialNumbers });
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <PageTitle title="Invoices-Details" />
          <div className="d-flex justify-content-end gap-3 mb-4">
            {/* back btn */}

            <Link
              to={back ? back : "/dashboard/sales-invoices"}
              className="btn btn-primary btn-common rounded-1"
            >
              <BsArrowLeft className="me-2" />
              Back
            </Link>
            {hasPaymentButton ? (
              <button
                type="button"
                className="btn btn-primary rounded-1"
                onClick={() => setIsPaymentModalOpen(true)}
              >
                PAYMENT
              </button>
            ) : null}
            {/* print btn */}
            <ReactToPrint
              trigger={() => (
                <button className="btn btn-primary text-white rounded-1 border-0 me-2 d-flex justify-content-center align-items-center">
                  <AiOutlinePrinter className="fs-4 me-2" />
                  Print
                </button>
              )}
              content={() => printRef.current}
            />
          </div>
          <div ref={printRef} className="mx-2 print-area">
            <img src={logo} alt="" className="logo-position" />
            <div className="d-flex justify-content-center align-items-center ">
              <SectionTitle heading="Tax Invoice" />
            </div>
            <h4 className="text-center fw-bold">
              {invoiceDetails?.invoice_number}
            </h4>
            {/* Billing Address Detail & Shipping address Detail including GST*/}
            <div className="row my-5 row-gap-1">
              {/* Billing Address Detail */}
              <div className="col-12 col-md-6 col-lg-6">
                <div className="invoice-details-card">
                  <div className="card-body d-flex">
                    <div className="me-auto">
                      <h4 className="card-title">Billing Address Detail</h4>

                      <p className="text-dark fs-4 my-2">
                        <span className="fs-5">
                          {" "}
                          {invoiceDetails?.billing_address?.org?.company_name}
                        </span>
                      </p>

                      <p className="text-dark fs-4 my-2">
                        <span className="fs-5">
                          {" "}
                          {invoiceDetails?.billing_address?.address}
                        </span>
                      </p>

                      <p className="text-dark fs-4 my-2">
                        <span className="fs-5">
                          {" "}
                          {invoiceDetails?.billing_address?.pincode?.pin_code}
                        </span>
                      </p>

                      <p className="text-dark fs-4 my-2">
                        <span className="fs-5">
                          {" "}
                          {invoiceDetails?.billing_address?.country?.name}
                        </span>
                      </p>

                      <p className="text-dark fs-4 my-2">
                        GST:
                        <span className="fs-5">
                          {" "}
                          {invoiceDetails?.billing_address?.gst_no}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Shipping address Detail including GST */}
              <div className="col-12 col-md-6 col-lg-6">
                <div className="invoice-details-card">
                  <div className="card-body">
                    <h4 className="card-title">Shipping address</h4>
                    <p className="text-dark fs-4 my-2">
                      <span className="fs-5">
                        {" "}
                        {invoiceDetails?.shipping_address?.org?.company_name}
                      </span>
                    </p>

                    <p className="text-dark fs-4 my-2">
                      <span className="fs-5">
                        {" "}
                        {invoiceDetails?.shipping_address?.address}
                      </span>
                    </p>

                    <p className="text-dark fs-4 my-2">
                      <span className="fs-5">
                        {" "}
                        {invoiceDetails?.shipping_address?.pincode?.pin_code}
                      </span>
                    </p>

                    <p className="text-dark fs-4 my-2">
                      <span className="fs-5">
                        {" "}
                        {invoiceDetails?.shipping_address?.country?.name}
                      </span>
                    </p>

                    <p className="text-dark fs-4 my-2 opacity-0">
                      GST:
                      <span className="fs-5">
                        {" "}
                        {invoiceDetails?.shipping_address?.gst_no || `N/A`}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Payment & Delivery Terms  */}
              <div className="col-12 col-md-6 col-lg-6">
                <div className="invoice-details-card">
                  <div className="card-body">
                    {/* <h4 className="card-title">Payment & Delivery</h4> */}
                    <p className="text-dark fs-4 my-2">
                      Payment Terms:
                      <span className="fs-5">
                        {" "}
                        {invoiceDetails?.payment_term?.term}
                      </span>
                    </p>
                    <p className="text-dark fs-4 my-2">
                      Payment Date:
                      <span className="fs-5">
                        {" "}
                        {invoiceDetails?.payment_date}
                      </span>
                    </p>
                    <p className="text-dark fs-4 my-2">
                      Delivery Terms:
                      <span className="fs-5">
                        {" "}
                        {invoiceDetails?.delivery_term}
                      </span>
                    </p>
                    <p className="text-dark fs-4 my-2">
                      PO Ref:
                      <span className="fs-5">
                        {invoiceDetails?.sale_order?.ref_po} /
                        {invoiceDetails?.sale_order?.po_date}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Created By Details  */}
              <div className="col-12 col-md-6 col-lg-6">
                <div className="invoice-details-card">
                  <div className="card-body">
                    {/* <h4 className="card-title">Contact Details</h4> */}
                    <p className="text-dark fs-4 my-2">
                      Contact Name:
                      <span className="fs-5">
                        {" "}
                        {invoiceDetails?.sale_order?.contact_to?.first_name +
                          " " +
                          invoiceDetails?.sale_order?.contact_to?.last_name}
                      </span>
                    </p>

                    <p className="text-dark fs-4 my-2">
                      Email:
                      <span className="fs-5">
                        {" "}
                        {invoiceDetails?.sale_order?.contact_to?.email}
                      </span>
                    </p>

                    <p className="text-dark fs-4 my-2">
                      Mobile:
                      <span className="fs-5">
                        {" "}
                        {invoiceDetails?.sale_order?.contact_to?.mobile}
                      </span>
                    </p>

                    <p className="text-dark fs-4 my-2 opacity-0">
                      Mobile:
                      <span className="fs-5">
                        {" "}
                        {invoiceDetails?.created_by?.mobile}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Table */}
            <div style={{ marginTop: "-3em" }} className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body table-responsive">
                    <table className="table table-bordered">
                      <thead style={{ background: "#343A40" }}>
                        <tr>
                          <th className="text-light ps-4 fs-5">
                            Part No with Desc
                          </th>
                          <th className="text-light ps-4 fs-5">Unit Value</th>
                          <th className="text-light ps-4 fs-5">Qty</th>
                          <th className="text-light ps-4 fs-5">Extd wo Tax</th>
                        </tr>
                      </thead>
                      <tbody>
                        {invoiceDetails?.parts_invoice?.map((part, index) => {
                          return (
                            <tr key={part?.id}>
                              {part?.parts_no?.serialization ? (
                                <>
                                  {" "}
                                  <td
                                    onClick={() => {
                                      fetchSerialNumbers(index);
                                      setSerializedNo(part.id);
                                    }}
                                    className="text-primary link_txt"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    style={{ cursor: "pointer" }}
                                  >
                                    {/* {`${part?.short_description} (abcdefgh)`} */}
                                    {`${part?.short_description} (${part?.parts_no?.customer_part_number}) `}
                                  </td>
                                </>
                              ) : (
                                <td className="text-black">
                                  {part?.short_description}
                                </td>
                              )}
                              <td>{part?.price}</td>
                              <td>{part?.quantity}</td>
                              <td>
                                {parseFloat(
                                  part?.price * part?.quantity
                                ).toFixed(2)}
                              </td>
                            </tr>
                          );
                        })}
                        {isSameAddress?.CGST && !isDiffAddress.IGST ? (
                          <>
                            {" "}
                            <tr>
                              <td colSpan="2"></td>
                              <td>CGST</td>
                              <td>{isSameAddress?.CGST}</td>
                            </tr>
                            <tr>
                              <td colSpan="2"></td>
                              <td>SGST</td>
                              <td>{isSameAddress?.SGST}</td>
                            </tr>
                            <tr>
                              <td colSpan="2"></td>
                              <td>Shipment Charge</td>
                              <td>{isSameAddress?.shipping}</td>
                            </tr>
                            <tr>
                              <td colSpan="2"></td>
                              <td>Gross Total</td>
                              <td>{isSameAddress?.grossTotal}</td>
                            </tr>
                          </>
                        ) : (
                          <>
                            {" "}
                            <tr>
                              <td colSpan="2"></td>

                              <td>IGST</td>
                              <td>{isDiffAddress?.IGST}</td>
                            </tr>
                            <tr>
                              <td colSpan="2"></td>

                              <td>Shipment Charge</td>
                              <td>{isDiffAddress?.shipping}</td>
                            </tr>
                            <tr>
                              <td colSpan="2"></td>
                              <td>Gross Total</td>
                              <td>{isDiffAddress?.grossTotal}</td>
                            </tr>
                          </>
                        )}
                        <tr>
                          {isSameAddress?.grossTotal &&
                          !isDiffAddress?.grossTotal ? (
                            <td colSpan="4">{`In words: ${inWords(
                              parseFloat(isSameAddress?.grossTotal)
                            )}`}</td>
                          ) : (
                            <td colSpan="4">{`In Words: ${inWords(
                              parseFloat(isDiffAddress?.grossTotal)
                            )}`}</td>
                          )}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <h6 style={{ marginTop: "-1.5em" }} className="fw-bold">
              Terms & Conditions: {invoiceDetails?.invoice_comment}
            </h6>
          </div>

          {/* Modal for serial no */}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
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
          {/* Modal For Payment */}
          {hasPaymentButton && isPaymentModalOpen ? (
            <PaymentRecordsModal
              setIsPaymentModalOpen={setIsPaymentModalOpen}
            />
          ) : null}
        </div>
      )}
    </>
  );
};

export default SalesInvoiceDetails;
