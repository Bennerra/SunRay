import { all } from "redux-saga/effects";

import { usersWatcher } from "./usersSaga";
import { userWatcher } from "./userSaga";

export function* rootWatcher() {
  yield all([usersWatcher(), userWatcher()]);
}
