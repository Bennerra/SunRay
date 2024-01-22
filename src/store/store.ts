import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import userReducer from "./userSlice";
import usersReducer from "./usersSlice";
import { rootWatcher } from "@/saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    user: userReducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootWatcher);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
