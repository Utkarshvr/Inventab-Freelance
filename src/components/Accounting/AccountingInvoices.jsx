import React from "react";
import SalesInvoices from "../../pages/Dashboard/Sales/SalesInvoices";

export default function AccountingInvoices() {
  return <SalesInvoices to={`/dashboard/accounting/invoices`} />;
}
