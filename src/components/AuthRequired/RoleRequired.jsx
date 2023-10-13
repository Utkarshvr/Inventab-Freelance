import React from "react";
import { useAuth } from "../../hooks/useAuth";

export default function RoleRequired({ children, role }) {
  const { auth } = useAuth();
  if (auth?.dept?.some((r) => r.role.name === role)) return <>{children}</>;
  else
    return (
      <>
        <h1>UNAUTHORIZED!!!</h1>
      </>
    );
}
