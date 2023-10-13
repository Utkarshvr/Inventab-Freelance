import KPIInvoice from "../../components/KPI/KPI-Invoice/KPIInvoice";
import SectionTitle from "../../components/Shared/SectionTitle";

export default function WarehousePage() {
  return (
    <div>
      <SectionTitle heading="Warehouse" />

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
