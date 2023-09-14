import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import MainLayout from "../../Layout/MainLayout";
import AR from "../../pages/Dashboard/Sales/AR";
import SalesInvoiceDetails from "../../pages/Dashboard/Sales/SalesInvoiceDetails";
import SalesInvoices from "../../pages/Dashboard/Sales/SalesInvoices";
import SalesLead from "../../pages/Dashboard/Sales/SalesLead";
import SalesOrders from "../../pages/Dashboard/Sales/SalesOrders";
import SalesDashboard from "../../pages/Dashboard/SalesDashboard/SalesDashboard";
import Attendance from "../../pages/Dashboard/Support/Attendance";
import LogIn from "../../pages/Login/LogIn";
import AddSalesLeads from "../../pages/SalesLeads/AddSalesLeads";
import UpdateSalesLeads from "../../pages/SalesLeads/UpdateSalesLeads";
import AddSalesOrder from "../../pages/SalesOrder/AddSalesOrder";
import UpdateSalesOrder from "../../pages/SalesOrder/UpdateSalesOrder";
import ErrorPage from "../../ui/ErrorPage";
import AuthRequired from "../AuthRequired/AuthRequired";
import EngineeringDashboard from "../EngineeringDashboard/EngineeringDashboard";
import PublicRoute from "../PublicRoute/PublicRoute";
import Backlog from "../EngineeringPages/Backlog";
import Project from "../EngineeringPages/Project";
import EmployeeTimesheet from "../EngineeringPages/EmployeeTimesheet";
import RoleRequired from "../AuthRequired/RoleRequired";
import AddProject from "../engg/Project";
import UpdateProject from "../engg/UpdateProject";
import AccountingPage from "../../pages/Accounting/AccountingPage";
import AccountingAR from "../Accounting/AccountingAR";
import AccountingInvoices from "../Accounting/AccountingInvoices";
import BacklogOthersWork from "../other/BacklogOthersWork";
import WarehousePage from "../../pages/Warehouse/WarehousePage";
import WarehouseInvoices from "../Warehouse/WarehouseInvoices";
import WarehouseStock from "../Warehouse/WarehouseStock";
import WarehouseGRN from "../Warehouse/WarehouseGRN";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <PublicRoute />,
        children: [
          {
            path: "/",
            element: <LogIn />,
          },
        ],
      },
    ],
  },
  {
    element: <AuthRequired />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardLayout />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/dashboard",
            element: <SalesDashboard />,
          },
          /* Leads */
          {
            path: "sales-leads",
            element: (
              <RoleRequired role={"SALES"}>
                <SalesLead />
              </RoleRequired>
            ),
          },
          {
            path: "others/backlog",
            element: (
              <RoleRequired role={"SALES"}>
                <BacklogOthersWork />
              </RoleRequired>
            ),
          },
          /* Accounting */
          {
            path: "accounting",
            element: (
              <RoleRequired role={"SALES"}>
                <AccountingPage />
              </RoleRequired>
            ),
          },
          {
            path: "accounting/invoices",
            element: (
              <RoleRequired role={"SALES"}>
                <AccountingInvoices />
              </RoleRequired>
            ),
          },
          {
            path: "accounting/ar",
            element: (
              <RoleRequired role={"SALES"}>
                <AccountingAR />
              </RoleRequired>
            ),
          },
          /* Warehouse */
          {
            path: "warehouse",
            element: (
              <RoleRequired role={"SALES"}>
                <WarehousePage />
              </RoleRequired>
            ),
          },
          {
            path: "warehouse/invoices",
            element: (
              <RoleRequired role={"SALES"}>
                <WarehouseInvoices />
              </RoleRequired>
            ),
          },
          {
            path: "warehouse/grn",
            element: (
              <RoleRequired role={"SALES"}>
                <WarehouseGRN />
              </RoleRequired>
            ),
          },
          {
            path: "warehouse/stock",
            element: (
              <RoleRequired role={"SALES"}>
                <WarehouseStock />
              </RoleRequired>
            ),
          },
          // ENGINEERING
          {
            path: "eng",
            element: (
              <RoleRequired role={"ENGINEERING"}>
                <EngineeringDashboard />
              </RoleRequired>
            ),
          },
          {
            path: "engg",
            element: <AddProject />,
          },
          {
            path: "engg/update-project/:id",
            element: <UpdateProject />,
          },
          {
            path: "eng-backlog",
            element: (
              <RoleRequired role={"ENGINEERING"}>
                <Backlog />
              </RoleRequired>
            ),
          },
          {
            path: "eng-project",
            element: (
              <RoleRequired role={"ENGINEERING"}>
                <Project />
              </RoleRequired>
            ),
          },
          {
            path: "eng-employeetimesheet",
            element: (
              <RoleRequired role={"ENGINEERING"}>
                <EmployeeTimesheet />
              </RoleRequired>
            ),
          },
          {
            path: "sales/add-sales-leads",
            element: (
              <RoleRequired role={"SALES"}>
                <AddSalesLeads />
              </RoleRequired>
            ),
          },
          {
            path: "sales/update-sales-leads/:lead_no",
            element: (
              <RoleRequired role={"SALES"}>
                <UpdateSalesLeads />
              </RoleRequired>
            ),
          },
          /* Orders */
          {
            path: "sales-orders",
            element: (
              <RoleRequired role={"SALES"}>
                <SalesOrders />
              </RoleRequired>
            ),
          },
          {
            path: "sales-orders/add-sales-order",
            element: (
              <RoleRequired role={"SALES"}>
                <AddSalesOrder />
              </RoleRequired>
            ),
          },

          {
            path: "sales-orders/update-sales-order/:order_id",
            element: (
              <RoleRequired role={"SALES"}>
                <UpdateSalesOrder />
              </RoleRequired>
            ),
          },
          /* invoice */
          {
            path: "sales-invoices",
            element: (
              <RoleRequired role={"SALES"}>
                <SalesInvoices />
              </RoleRequired>
            ),
          },
          {
            path: "sales-invoices/sales-invoices-details/:invoice_id",
            element: (
              <RoleRequired role={"SALES"}>
                <SalesInvoiceDetails />
              </RoleRequired>
            ),
          },
          /* ar */
          {
            path: "ar",

            element: (
              <RoleRequired role={"SALES"}>
                <AR />
              </RoleRequired>
            ),
          },
          /* attendance */
          {
            path: "attendance",
            element: (
              <RoleRequired role={"SALES"}>
                <Attendance />
              </RoleRequired>
            ),
          },
        ],
      },
    ],
  },
]);

export default router;
