import * as React from "react";
import { Navigate, useLocation } from "react-router";
import { ROUTES } from "../router";

interface IRequiredAuthProps {
  auth: boolean;
  children: React.ReactNode;
}

const RequiredAuth = (props: IRequiredAuthProps) => {
  const location = useLocation();
  if (props.auth) {
    return <>{props.children}</>;
  }
  const from = (location && `${location.pathname}${location.search}`) || "/";
  return (
    <Navigate
      to={{
        pathname: `${ROUTES.login}`,
        search: `?from=${encodeURIComponent(from)}`,
      }}
      replace
    />
  );
};

export default RequiredAuth;
