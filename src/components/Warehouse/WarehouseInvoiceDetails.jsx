import { Link, useLocation, useParams } from "react-router-dom";
import { BsArrowLeft, BsPlusCircle } from "react-icons/bs";
import { useEffect, useState } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import Loader from "../../ui/Loader";

export default function WarehouseInvoiceDetails() {
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
        {/* back btn */}
        <Link
          to="/dashboard/accounting/invoices"
          className="btn btn-primary btn-common rounded-1 me-2"
        >
          <BsArrowLeft className="me-2" />
          Back
        </Link>
      </div>
    </div>
  );
}
