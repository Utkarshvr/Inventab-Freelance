import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

import SalesInvoiceDetails from "../../pages/Dashboard/Sales/SalesInvoiceDetails";

export default function AccountingInvoiceDetails() {
  const [loading, setLoading] = useState(false);
  const [paymentRecords, setPaymentRecords] = useState([]);
  const [isPaymentFormActive, setIsPaymentFormActive] = useState(false);
  const [totalAmountPaid, setTotalAmountPaid] = useState(0);
  const { invoice_id } = useParams();

  const axios = useAxiosPrivate();

  useEffect(() => {
    const fetchPaymentRecords = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `invoices/get/payment/?invoice=${invoice_id}`
        );
        console.log(data);
        setLoading(false);
        setPaymentRecords(data?.results);
        setTotalAmountPaid(
          data?.results?.reduce((acc, record) => acc + record.amount, 0)
        );
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    if (!isPaymentFormActive) fetchPaymentRecords();
  }, [isPaymentFormActive]);

  return (
    <>
      <SalesInvoiceDetails
        hasPaymentButton={true}
        back={"/dashboard/accounting/invoices"}
        paymentRecords={paymentRecords}
        isPaymentFormActive={isPaymentFormActive}
        setIsPaymentFormActive={setIsPaymentFormActive}
        total={totalAmountPaid}
      />
    </>
  );
}
