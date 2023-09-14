import React from "react";
import SectionTitle from "../Shared/SectionTitle";
import KPIInvoice from "../KPI/KPI-Invoice/KPIInvoice";

export default function WarehouseInvoices() {
  return (
    <div>
      <SectionTitle heading="Warehouse Invoices" />

      <div className="row">
        {/* KPI Invoice section */}
        <div className="col-12 my-4">
          <div className="card">
            <div className="card-body">
              <KPIInvoice dontShowGraph={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
