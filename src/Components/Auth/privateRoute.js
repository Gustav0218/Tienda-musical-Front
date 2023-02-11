import { Navigate, Outlet } from "react-router-dom";
import { useContext, useEffect } from "react";

import { UserContext } from "../../context/userContext";

export default function Privateroute() {
  const userCtx = useContext(UserContext);
  const { authStatus, verifyingToken } = userCtx;

  useEffect(() => {
    verifyingToken();
  }, []);

  return authStatus ? <Outlet /> : <Navigate to="/login" replace />;
}
