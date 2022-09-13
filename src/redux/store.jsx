import { configureStore } from "@reduxjs/toolkit";
import { combineReducers} from "redux";

import CartReducer from "./reducers/cartReducer";
import storage from "redux-persist/lib/storage";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";

  const persistConfig = {
    key: 'root',
    storage,
}

const reducers=combineReducers({
    CartReducer:CartReducer,
})

const persistedReducer=persistReducer(persistConfig, reducers)


const mystore=configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),});

export const persistor=persistStore(mystore);

export default mystore;