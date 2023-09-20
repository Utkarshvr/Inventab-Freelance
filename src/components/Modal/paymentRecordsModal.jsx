import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import Loader from "../../ui/Loader";
import { BsArrowLeftCircle, BsPlusCircle } from "react-icons/bs";
import PaymentRecordsTable from "../Table/PaymentRecordsTable";
import PaymentForm from "../Form/PaymentForm";

export default function PaymentRecordsModal({ setIsPaymentModalOpen }) {
  const [loading, setLoading] = useState(false);
  const [paymentRecords, setPaymentRecords] = useState([]);
  const [isPaymentFormActive, setIsPaymentFormActive] = useState(false);
  const { invoice_id } = useParams();

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
    if (!isPaymentFormActive) fetchPaymentRecords();
  }, [isPaymentFormActive]);

  return (
    <div
      className="modal fade show"
      id="payment-modal"
      style={{
        display: "block",
        background: "rgba(0,0,0,0.6)",
      }}
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-4" id="exampleModalLabel">
              {isPaymentFormActive ? "Payment Records" : "Payment Form"}
            </h1>
            <div className="d-flex gap-2 align-items-center div">
              {!isPaymentFormActive ? (
                <BsPlusCircle
                  style={{ cursor: "pointer" }}
                  onClick={() => setIsPaymentFormActive(true)}
                  size={32}
                  color="#2e75b5"
                />
              ) : (
                <BsArrowLeftCircle
                  style={{ cursor: "pointer" }}
                  onClick={() => setIsPaymentFormActive(false)}
                  size={32}
                  color="#2e75b5"
                />
              )}
              <button
                type="button"
                className="btn-close"
                onClick={() => setIsPaymentModalOpen(false)}
              />
            </div>
          </div>
          {!isPaymentFormActive ? (
            loading ? (
              <Loader />
            ) : (
              <PaymentRecordsTable paymentRecords={paymentRecords} />
            )
          ) : (
            <PaymentForm setIsPaymentFormActive={setIsPaymentFormActive} />
          )}
        </div>
      </div>
    </div>
  );
}
