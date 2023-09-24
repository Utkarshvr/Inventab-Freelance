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
import AddBacklogDataForm from "../other/AddBacklogDataForm";
import BacklogTable from "../other/BacklogTable";
import AccountingInvoiceDetails from "../Accounting/AccountingInvoiceDetails";
import WarehouseInvoiceDetails from "../Warehouse/WarehouseInvoiceDetails";
import LoginForm from "../Form/LoginForm";
import RenewPasswordForm from "../Form/RenewPasswordForm";
import RegistrationForm from "../Form/RegistrationForm";
import AddInvoice from "../Warehouse/AddInvoice";

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
            path: "/auth",
            element: <LogIn />,
            children: [
              {
                path: "login",
                element: <LoginForm />,
              },
              {
                path: "register",
                element: <RegistrationForm />,
              },
              {
                path: "forget-password",
                element: <RenewPasswordForm />,
              },
            ],
          },
        ],
      },
      {
        element: <AuthRequired />,
        children: [
          {
            path: "/user",
            element: <LogIn />,
            children: [
              {
                path: "renew-password",
                element: <RenewPasswordForm />,
              },
            ],
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
            element: (
              <RoleRequired role={"SALES"}>
                <SalesDashboard />
              </RoleRequired>
            ),
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
          /* Accounting */
          {
            path: "accounting",
            element: (
              <RoleRequired role={"FINANCE"}>
                <AccountingPage />
              </RoleRequired>
            ),
          },
          {
            path: "accounting/invoices",
            element: (
              <RoleRequired role={"FINANCE"}>
                <AccountingInvoices />
              </RoleRequired>
            ),
          },
          {
            path: "accounting/invoices/:invoice_id",
            element: (
              <RoleRequired role={"FINANCE"}>
                <AccountingInvoiceDetails />
              </RoleRequired>
            ),
          },
          {
            path: "accounting/ar",
            element: (
              <RoleRequired role={"FINANCE"}>
                <AccountingAR />
              </RoleRequired>
            ),
          },
          /* Warehouse */
          {
            path: "warehouse",
            element: (
              <RoleRequired role={"WAREHOUSE"}>
                <WarehousePage />
              </RoleRequired>
            ),
          },
          {
            path: "warehouse/invoices",
            element: (
              <RoleRequired role={"WAREHOUSE"}>
                <WarehouseInvoices />
              </RoleRequired>
            ),
          },
          {
            path: "warehouse/invoices/:id",
            element: (
              <RoleRequired role={"WAREHOUSE"}>
                <WarehouseInvoiceDetails />
              </RoleRequired>
            ),
          },

          {
            path: "warehouse/add-invoice",
            element: (
              <RoleRequired role={"WAREHOUSE"}>
                <AddInvoice />
              </RoleRequired>
            ),
          },

          {
            path: "warehouse/grn",
            element: (
              <RoleRequired role={"WAREHOUSE"}>
                <WarehouseGRN />
              </RoleRequired>
            ),
          },
          {
            path: "warehouse/stock",
            element: (
              <RoleRequired role={"WAREHOUSE"}>
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
            element: <AddProject role={"ENGINEERING"} />,
          },
          {
            path: "engg/update-project/:id",
            element: <UpdateProject role={"ENGINEERING"} />,
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
            element: <Attendance />,
          },
        ],
      },
    ],
  },
]);

export default router;
