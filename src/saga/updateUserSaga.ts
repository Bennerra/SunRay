import { call, put, takeEvery } from "redux-saga/effects";

import instance from "@/api/instance";
import { PayloadAction } from "@reduxjs/toolkit";
import { setUpdateUser } from "@/store/updateUserSlice";
import { normalizeUser } from "@/utils/normalizeUser";

function* getUpdateUser(
  action: PayloadAction<number>
): Generator<any, void, any> {
  try {
    const response = yield call(instance.get, `users/${action.payload}`);
    const updateUser = normalizeUser(response.data);
    yield put(setUpdateUser(updateUser));
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
}

export function* updateUserWatcher() {
  yield takeEvery("updateUser/fetchUpdateUser", getUpdateUser);
}
