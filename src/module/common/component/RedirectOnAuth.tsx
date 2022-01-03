import React from "react";
import { Navigate, useLocation } from "react-router";

interface Props {
  auth: boolean;
  children: React.ReactNode;
}

const RedirectOnAuth: React.FC<Props> = (props) => {
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
  return <>{restProps.children}</>;
};

export default RedirectOnAuth;
