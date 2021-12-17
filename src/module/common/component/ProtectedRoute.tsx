import React from "react";
import { useLocation } from "react-router";
import { Route, RouteProps, Navigate } from "react-router";
import { ROUTES } from "../router";

interface Props extends RouteProps {
  auth: boolean;
}

const ProtectedRoute: React.FC<Props> = (props) => {
  const { auth, ...restProps } = props;
  const location = useLocation();
  console.log(location);
  if (auth) {
    return <Route {...restProps} />;
  }
  const from = (location && `${location.pathname}${location.search}`) || "/";
  return (
    <Route
      element={
        <Navigate
          to={{
            pathname: `${ROUTES.login}`,
            search: `?from=${encodeURIComponent(from)}`,
          }}
          replace
        />
      }
    />
  );
};

export default ProtectedRoute;
