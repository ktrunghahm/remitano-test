import React from "react";
import { RouteProps, Route, Navigate, useLocation } from "react-router";

interface Props extends RouteProps {
  auth: boolean;
}

const RedirectRoute: React.FC<Props> = (props) => {
  const { auth, ...restProps } = props;
  const location = useLocation();

  if (auth) {
    let from = "/";
    if (location) {
      const params = new URLSearchParams(location.search);
      const fromParamValue = params.get("from");
      if (fromParamValue) {
        from = fromParamValue;
      }
    }
    return <Navigate to={from} />;
  }
  return <Route {...restProps} />;
};

export default RedirectRoute;
