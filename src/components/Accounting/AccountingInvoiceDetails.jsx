import { Link, useLocation, useParams } from "react-router-dom";
import PaymentRecordsTable from "../Table/PaymentRecordsTable";
import { BsArrowLeft, BsPlusCircle } from "react-icons/bs";
import { useEffect, useState } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import Loader from "../../ui/Loader";

export default function AccountingInvoiceDetails() {
  const [loading, setLoading] = useState(false);
  const [paymentRecords, setPaymentRecords] = useState([]);
  const { id: invoice_id } = useParams();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const INVOICE_NO = queryParams.get("invoice_no");

  const axios = useAxiosPrivate();

  useEffect(() => {
    const fetchPaymentRecords = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `invoices/get/payment/?invoice=${invoice_id}`
        );
        setLoading(false);
        setPaymentRecords(data?.results);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    fetchPaymentRecords();
  }, []);

  if (loading) return <Loader />;
  return (
    <div className="div">
      <h2 className="text-center fw-bold">{INVOICE_NO}</h2>

      <div className="d-flex gap-4 justify-content-end mb-4">
        <button
          type="button"
          className="btn btn-primary rounded-1"
          data-bs-toggle="modal"
          data-bs-target="#payment-modal"
        >
          PAYMENT
        </button>

        {/* back btn */}
        <Link
          to="/dashboard/accounting/invoices"
          className="btn btn-primary btn-common rounded-1 me-2"
        >
          <BsArrowLeft className="me-2" />
          Back
        </Link>
      </div>

      <div className="modal fade" id="payment-modal">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-4" id="exampleModalLabel">
                Payment Records
              </h1>
              <div className="d-flex gap-2 align-items-center div">
                <BsPlusCircle
                  style={{ cursor: "pointer" }}
                  size={32}
                  color="#2e75b5"
                />
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                />
              </div>
            </div>
            <PaymentRecordsTable paymentRecords={paymentRecords} />
          </div>
        </div>
      </div>
    </div>
  );
}
