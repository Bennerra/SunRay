import instance from "../api/instance";
import { call, put, takeEvery } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import { defineUser } from "../utils/defineUser";
import { setBuyerUser, setIdUser } from "../store/userSlice";
import { TBuyerData } from "../models/LoginFormData";

function* addBuyerUserSaga(
  action: PayloadAction<TBuyerData>
): Generator<any, void, any> {
  try {
    const user = defineUser(action.payload);
    yield put(setBuyerUser(user));
    const response = yield call(instance.post, "/users", action.payload);
    yield put(setIdUser(response.data.id));
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
}

export function* userWatcher() {
  yield takeEvery("user/addBuyerUser", addBuyerUserSaga);
}
