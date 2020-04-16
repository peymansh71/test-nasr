import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import reducers from "./reducers";

const persistConfig = {
  key: "root",
  storage
};

const persistedReducers = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducers);
const persistor = persistStore(store);

export const StoreProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};
