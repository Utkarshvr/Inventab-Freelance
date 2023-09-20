import SalesInvoiceDetails from "../../pages/Dashboard/Sales/SalesInvoiceDetails";

export default function AccountingInvoiceDetails() {
  return (
    <>
      <SalesInvoiceDetails
        hasPaymentButton={true}
        back={"/dashboard/accounting/invoices"}
      />
    </>
  );
}
