"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { persistor, store } from "../store";
import { PersistGate } from "redux-persist/integration/react";

interface PageProps {
  children: ReactNode;
}

export default function ReduxProvider({ children }: PageProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}