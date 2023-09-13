import ARGraph from "../../components/AR/ARGraph";
import KPIInvoice from "../../components/KPI/KPI-Invoice/KPIInvoice";
import SectionTitle from "../../components/Shared/SectionTitle";

export default function AccountingPage() {
  return (
    <div>
      <SectionTitle heading="Accounting" />

      <div className="row">
        {/* KPI Invoice section */}
        <div className="col-12 my-4">
          <div className="card">
            <div className="card-body">
              <KPIInvoice />
            </div>
          </div>
        </div>
        <div className="col-12 my-4">
          <div className="card">
            <div className="card-body">
              <ARGraph />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
