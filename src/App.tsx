import { ThemeProvider } from "@mui/material";
import * as React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import RequiredAuth from "./module/common/component/RequiredAuth";
import { ROUTES } from "./module/common/router";
import GuestPage from "./module/guest/page/GuestPage";
import UserPage from "./module/user/page/UserPage";
import { AppState } from "./redux/reducer";
import { MUITheme } from "./setupTheme";

interface IAppProps {}

const App = (props: IAppProps) => {
  const state = useSelector((appState: AppState) => appState);

  return (
    <ThemeProvider theme={MUITheme}>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.login} element={<GuestPage />} />
          <Route
            path={ROUTES.user}
            element={
              <RequiredAuth auth={state.authen.authen}>
                <UserPage />
              </RequiredAuth>
            }
          />
          <Route path="/" element={<Navigate to={ROUTES.login} />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
