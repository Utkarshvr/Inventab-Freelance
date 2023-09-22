import { LiaChartBarSolid, LiaHandsHelpingSolid } from "react-icons/lia";
import { LuLayoutDashboard } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

const Sidebar = () => {
  const { auth } = useAuth();
  return (
    <>
      <div className="dlabnav">
        <div className="dlabnav-scroll">
          <ul className="metismenu" id="menu">
            {/* Sales Dashboard */}
            <li>
              <a
                className="has-arrow ai-icon"
                href="javascript:void()"
                aria-expanded="false"
              >
                <LuLayoutDashboard className="fs-2" />
                <span className="nav-text fs-4"> Dashboard</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  {auth?.dept?.some((r) => r.role.name === "SALES") && (
                    <NavLink to="/dashboard" className="fs-4">
                      Sales Dashboard
                    </NavLink>
                  )}
                  {auth?.dept?.some((r) => r.role.name === "WAREHOUSE") && (
                    <NavLink to="/dashboard/warehouse" className="fs-4">
                      Warehousing
                    </NavLink>
                  )}
                  {auth?.dept?.some((r) => r.role.name === "FINANCE") && (
                    <NavLink to="/dashboard/accounting" className="fs-4">
                      Accounting
                    </NavLink>
                  )}
                  {auth?.dept?.some((r) => r.role.name === "ENGINEERING") && (
                    <NavLink to="/dashboard/eng" className="fs-4">
                      Engineering
                    </NavLink>
                  )}
                </li>
              </ul>
            </li>
            {/* sales */}
            {auth?.dept?.some((r) => r.role.name === "SALES") ? (
              <li>
                <a
                  className="has-arrow ai-icon"
                  href="javascript:void()"
                  aria-expanded="false"
                >
                  <LiaChartBarSolid className="fs-2" />
                  <span className="nav-text fs-4">Sales</span>
                </a>
                <ul aria-expanded="false">
                  <li>
                    <NavLink to="sales-leads" className="fs-4">
                      Leads
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="sales-orders" className="fs-4">
                      Orders
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="sales-invoices" className="fs-4">
                      Invoices
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="ar" className="fs-4">
                      AR
                    </NavLink>
                  </li>
                </ul>
              </li>
            ) : null}
            {/* ACCOUNTING */}
            {auth?.dept?.some((r) => r.role.name === "FINANCE") ? (
              <li>
                <a
                  className="has-arrow ai-icon"
                  href="javascript:void()"
                  aria-expanded="false"
                >
                  <LiaChartBarSolid className="fs-2" />
                  <span className="nav-text fs-4">Accounting</span>
                </a>
                <ul aria-expanded="false">
                  <li>
                    <NavLink
                      to="/dashboard/accounting/invoices"
                      className="fs-4"
                    >
                      Invoices
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/accounting/ar" className="fs-4">
                      AR
                    </NavLink>
                  </li>
                </ul>
              </li>
            ) : null}
            {/* WAREHOUSE */}
            {auth?.dept?.some((r) => r.role.name === "WAREHOUSE") ? (
              <li>
                <a
                  className="has-arrow ai-icon"
                  href="javascript:void()"
                  aria-expanded="false"
                >
                  <LiaChartBarSolid className="fs-2" />
                  <span className="nav-text fs-4">Warehouse</span>
                </a>
                <ul aria-expanded="false">
                  <li>
                    <NavLink
                      to="/dashboard/warehouse/invoices"
                      className="fs-4"
                    >
                      Invoices
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/warehouse/grn" className="fs-4">
                      GRN
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/warehouse/stock" className="fs-4">
                      Stock
                    </NavLink>
                  </li>
                </ul>
              </li>
            ) : null}
            {/* Engineering */}
            {auth?.dept?.some((r) => r.role.name === "ENGINEERING") && (
              <li>
                <a
                  className="has-arrow ai-icon"
                  href="javascript:void()"
                  aria-expanded="false"
                >
                  <LiaChartBarSolid className="fs-2" />
                  <span className="nav-text fs-4">Engineering</span>
                </a>
                <ul aria-expanded="false">
                  <li>
                    <NavLink to="eng-project" className="fs-4">
                      Project
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="eng-backlog" className="fs-4">
                      Backlog
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="eng-employeetimesheet" className="fs-4">
                      Employee Timesheet
                    </NavLink>
                  </li>
                </ul>
              </li>
            )}
            {/* Support */}
            {auth?.dept?.some((r) => r.role.name === "SALES") && (
              <li>
                <a
                  className="has-arrow ai-icon"
                  href="javascript:void()"
                  aria-expanded="false"
                >
                  <LiaHandsHelpingSolid className="fs-2" />
                  <span className="nav-text fs-4">Support</span>
                </a>
                <ul aria-expanded="false">
                  <li>
                    <NavLink to="attendance" className="fs-4">
                      Attendance
                    </NavLink>
                  </li>
                </ul>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
