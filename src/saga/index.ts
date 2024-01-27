import { all } from "redux-saga/effects";

import { usersWatcher } from "./usersSaga";
import { userWatcher } from "./userSaga";
import { updateUserWatcher } from "./updateUserSaga";

export function* rootWatcher() {
  yield all([usersWatcher(), userWatcher(), updateUserWatcher()]);
}
