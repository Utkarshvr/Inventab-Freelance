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
import RoleRequired from "../AuthRequired/RoleRequired";
// import AddProject from "../engg/Project";
// import UpdateProject from "../engg/UpdateProject";
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
import LoginForm from "../Form/LoginForm";
import RenewPasswordForm from "../Form/RenewPasswordForm";
import RegistrationForm from "../Form/RegistrationForm";
import AddInvoice from "../Warehouse/AddInvoice";
import WarehouseGRNDetails from "../Warehouse/WarehouseGRNDetails";
import AddGR from "../Warehouse/AddGR";

import AddProjectDataForm from "../other/AddProjectDataForm";
import ProjectTable from "../other/project/Project";
import ExcelDataExtractor from "../other/ExcelDataExtractor";
import UpdateSalesInvoice from "../Warehouse/UpdateSalesInvoice";
import AddGRN from "../Warehouse/AddGRN";

import Backlog from "../../pages/Dashboard/EngineeringPages/Backlog";
import Project from "../../pages/Dashboard/EngineeringPages/Project";
import EmployeeTimesheet from "../../pages/Dashboard/EngineeringPages/EmployeeTimesheet";
import AddProject from "../Project/AddProject";
import AddBacklog from "../Backlog/AddBacklog";
import UpdateProject from "../Project/UpdateProject";
import UpdateBacklog from "../Backlog/UpdateBacklog";
import GridView from "../Project/GridView";

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
                <UpdateSalesInvoice />
              </RoleRequired>
            ),
          },

          {
            path: "warehouse/add-invoice",
            element: (
              <RoleRequired role={"WAREHOUSE"}>
                <AddInvoice showDocketAndShipper={true} />
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
            path: "warehouse/grn/:grnId",
            element: (
              <RoleRequired role={"WAREHOUSE"}>
                <AddGR />
              </RoleRequired>
            ),
          },
          {
            path: "warehouse/grn/add-grn",
            element: (
              <RoleRequired role={"WAREHOUSE"}>
                <AddGRN />
              </RoleRequired>
            ),
          },
          // {
          //   path: "warehouse/grn/:id",
          //   element: (
          //     <RoleRequired role={"WAREHOUSE"}>
          //       <WarehouseGRNDetails />
          //     </RoleRequired>
          //   ),
          // },
          {
            path: "warehouse/stock",
            element: (
              <RoleRequired role={"WAREHOUSE"}>
                <WarehouseStock />
              </RoleRequired>
            ),
          },
          /* Engineering */
          {
            path: "eng",
            element: <EngineeringDashboard />,
          },
          {
            path: "eng-backlog",
            element: <Backlog />,
          },
          {
            path: "engg/grid-backlog",
            element: <GridView />,
          },
          {
            path: "engg/add-backlog",
            element: <AddBacklog />,
          },
          {
            path: "engg/update-backlog/:id",
            element: <UpdateBacklog />,
          },
          {
            path: "eng-project",
            element: <Project />,
          },
          {
            path: "engg/add-project",
            element: <AddProject />,
          },
          {
            path: "engg/update-project/:id",
            element: <UpdateProject />,
          },
          {
            path: "eng-employeetimesheet",
            element: <EmployeeTimesheet />,
          },

          // SALES
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
          /* OTHER */
          {
            path: "project",
            element: <ProjectTable />,
          },
          {
            path: "project/:id",
            element: <AddProjectDataForm />,
          },
          {
            path: "ExcelDataExtractor",
            element: <ExcelDataExtractor />,
          },
        ],
      },
    ],
  },
]);

export default router;
