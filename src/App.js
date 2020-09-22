import React from "react";
import Routes from "./routes";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "./global.css";

import { store, persistor } from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
}
