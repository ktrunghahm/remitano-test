import { SnackbarProvider } from "notistack";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import { setLoading } from "./module/common/redux/commonReducer";
import ConnectedIntlProvider from "./module/intl/component/ConnectedIntlProvider";
import { setLocale } from "./module/intl/redux/intlReducer";
import configureStore from "./redux/configureStore";
import reportWebVitals from "./reportWebVitals";

export const { store, persistor } = configureStore({});

store.dispatch(setLocale("en"));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
        onBeforeLift={() => {
          store.dispatch(setLoading(false));
        }}
      >
        <ConnectedIntlProvider>
          <SnackbarProvider maxSnack={3}>
            <App />
          </SnackbarProvider>
        </ConnectedIntlProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
