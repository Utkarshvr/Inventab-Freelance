import Loader from "../../ui/Loader";
import { BsArrowLeftCircle, BsPlusCircle } from "react-icons/bs";
import PaymentRecordsTable from "../Table/PaymentRecordsTable";
import PaymentForm from "../Form/PaymentForm";

export default function PaymentRecordsModal({
  paymentRecords,
  setIsPaymentModalOpen,
  isPaymentFormActive,
  setIsPaymentFormActive,
}) {
  console.log(paymentRecords);

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
            <PaymentRecordsTable paymentRecords={paymentRecords} />
          ) : (
            <PaymentForm setIsPaymentFormActive={setIsPaymentFormActive} />
          )}
        </div>
      </div>
    </div>
  );
}
