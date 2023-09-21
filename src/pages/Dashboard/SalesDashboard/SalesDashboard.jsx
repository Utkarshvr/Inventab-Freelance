import Select from "react-select";

import KPIInvoice from "../../../components/KPI/KPI-Invoice/KPIInvoice";
import KPIPO from "../../../components/KPI/KPI-PO/KPIPO";
import MetricInvoice from "../../../components/Metric/MetricInvoice/MetricInvoice";
import MetricPO from "../../../components/Metric/MetricPO/MetricPO";
import SalesFunnel from "../../../components/SalesFunnel/SalesFunnel";
import SalesKPI from "../../../components/SalesKPI/SalesKPI";
import PageTitle from "../../../components/Shared/PageTitle";
import "./SalesDashboard.css";
import { useContext } from "react";
import { SelectedYrContext } from "../../../context/selectedYrContext";

const SalesDashboard = () => {
  const { selectedYr, options, setSelectedYr } = useContext(SelectedYrContext);
  // Handle selection change in react-select
  const handleSelectChange = (selected) => {
    setSelectedYr(selected);
  };
  return (
    <>
      {/* <Toaster /> */}
      <PageTitle title="Sales Dashboard" />
      <Select
        options={options}
        value={selectedYr}
        onChange={handleSelectChange}
        placeholder="Select Year"
        isSearchable={false}
        className="text-start w-25"
      />
      <div className="row">
        {/* KPI table */}
        <div className="col-12 mx-auto my-4">
          <SalesKPI />
        </div>

        {/* KPI PO section */}
        <div className="col-12 my-4">
          <div className="card">
            <div className="card-body">
              <KPIPO />
            </div>
          </div>
        </div>

        {/* KPI Invoice section */}
        <div className="col-12 my-4">
          <div className="card">
            <div className="card-body">
              <KPIInvoice />
            </div>
          </div>
        </div>

        {/* Metric PO section */}
        <div className="col-12 my-4">
          <div className="card">
            <div className="card-body">
              <MetricPO />
            </div>
          </div>
        </div>

        {/* Metric Invoice section */}
        <div className="col-12 my-4">
          <div className="card">
            <div className="card-body">
              <MetricInvoice />
            </div>
          </div>
        </div>

        {/* New AR Graph */}
        <div className="col-12 my-4">
          <div className="card">
            <div className="card-body">
              <ARGraph />
            </div>
          </div>
        </div>

        {/* Sales Funnel */}
        <div className="col-12 my-4">
          <div className="card">
            <div className="card-body">
              <SalesFunnel />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SalesDashboard;
