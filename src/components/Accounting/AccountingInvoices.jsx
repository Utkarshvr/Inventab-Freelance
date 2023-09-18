import React from "react";
import SectionTitle from "../Shared/SectionTitle";
import KPIInvoice from "../KPI/KPI-Invoice/KPIInvoice";

export default function AccountingInvoices() {
  return (
    <div>
      <SectionTitle heading="Accounting Invoices" />

      <div className="row">
        {/* KPI Invoice section */}
        <div className="col-12 my-4">
          <div className="card">
            <div className="card-body">
              <KPIInvoice />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}