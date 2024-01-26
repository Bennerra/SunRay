import instance from "@/api/instance";
import { put, call, takeEvery } from "redux-saga/effects";
import { setUsers, setUsersError } from "@/store/usersSlice";
import { normalizeUser } from "@/utils/normalizeUser";
import { TUser } from "@/models/TUser";

function* fetchUsersSaga(): Generator<any, any, any> {
  try {
    const response = yield call(instance, "/users", {
      method: "get",
    });
    const usersData = response.data.map((user: TUser) => normalizeUser(user));
    yield put(setUsers(usersData));
  } catch (e) {
    yield put(setUsersError(e));
  }
}

export function* usersWatcher() {
  yield takeEvery("users/fetchUsers", fetchUsersSaga);
}
