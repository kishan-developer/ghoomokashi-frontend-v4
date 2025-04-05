import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
function ProtectedRoute({ children }) {
    const { isAdmin } = useSelector((state) => state.auth);
    const token = Cookies.get("token");
    if (!isAdmin && !token) return <Navigate to={"/"} replace />;
    return <div>{children}</div>;
}

export default ProtectedRoute;
