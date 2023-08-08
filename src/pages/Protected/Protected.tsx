import React from "react";
import { Navigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";

interface ProtectedPagePropsType {
  element: React.ReactNode;
  option: boolean;
}

const Protected: React.FC<ProtectedPagePropsType> = ({
  element,
  option,
}: ProtectedPagePropsType) => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn && !option) {
    return <Navigate to="/home" />;
  }
  if (!isLoggedIn && option) {
    return <Navigate to="/login" />;
  }

  return element;
};

export default Protected;
