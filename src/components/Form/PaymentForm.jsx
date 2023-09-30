import { useFormik } from "formik";
import React from "react";
import FormButton from "./FormButton";
import TextInput from "./TextInput";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../utils/axios/axios";

export default function PaymentForm({ setIsPaymentFormActive }) {
  const { invoice_id } = useParams();

  //login submition
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      date_received: "",
      transaction_id: "",
      amount: 0,
      comment: "",
      invoice: invoice_id,
    },

    onSubmit: async (values) => {
      try {
        const payload = {
          date_received: values.date_received,
          transaction_id: values.transaction_id,
          amount: values.amount,
          comment: values.comment,
          invoice: invoice_id,
        };
        await axiosInstance.post("/invoices/create/payment/", payload);

        toast.success("Payment Created", { duration: 2000 });
        setIsPaymentFormActive(false);
      } catch (error) {
        toast.error("An error occured", { duration: 2000 });
      }
    },
  });
  return (
    <>
      <form className="form" style={{ padding: "2em" }} onSubmit={handleSubmit}>
        {[
          { name: "date_received", type: "date", title: "Date Recieved" },
          { name: "transaction_id", type: "text", title: "Transaction Id" },
          { name: "amount", type: "number", title: "Amount" },
          { name: "comment", type: "text", title: "Comment" },
        ].map(({ name, type, title }) => (
          <div className="mb-4">
            <TextInput
              type={type}
              title={title}
              name={name}
              placeholder={`Enter ${name}`}
              value={values[name]}
              onChange={handleChange}
            />
          </div>
        ))}

        {/* Login Button */}
        <div className="mb-2">
          <FormButton type="submit" title="Add Payment" />
        </div>
      </form>
    </>
  );
}
