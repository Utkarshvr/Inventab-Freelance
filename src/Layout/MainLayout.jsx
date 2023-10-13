import { Toaster } from "react-hot-toast";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {
  const location = useLocation();

  const noHeaderFooter = location.pathname.includes("/login");
  const isRootPath = location.pathname === "/";

  return (
    <div>
      {isRootPath ? <Navigate to="/dashboard" /> : null}
      {noHeaderFooter || ""}
      <Toaster />
      <Outlet />
    </div>
  );
};

export default MainLayout;
