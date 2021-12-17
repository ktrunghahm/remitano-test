import { SnackbarProvider } from "notistack";
import React from "react";
import { Provider } from "react-redux";
import ConnectedIntlProvider from "../../module/intl/component/ConnectedIntlProvider";
import { setLocale } from "../../module/intl/redux/intlReducer";
import configureStore from "../../redux/configureStore";

export const { store, persistor } = configureStore({});

store.dispatch(setLocale("en"));
interface ITestContextProviderProps {
  children: React.ReactNode;
}

const TestContextProvider = (props: ITestContextProviderProps) => {
  return (
    <Provider store={store}>
      <ConnectedIntlProvider>
        <SnackbarProvider maxSnack={3}>{props.children}</SnackbarProvider>
      </ConnectedIntlProvider>
    </Provider>
  );
};

export default TestContextProvider;
