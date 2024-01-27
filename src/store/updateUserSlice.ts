import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { TGetSingleUser } from "@/models/TGetSingleUser";

type TUpdateUserState = {
  updateUser: TGetSingleUser;
  updateUserId: number;
};

const initialState: TUpdateUserState = {
  updateUser: {} as TGetSingleUser,
  updateUserId: 0,
};

export const updateUserSlice = createSlice({
  name: "updateUser",
  initialState,
  reducers: {
    setUpdateUser: (state, action: PayloadAction<TGetSingleUser>) => {
      state.updateUser = action.payload;
    },
    fetchUpdateUser: (state, action: PayloadAction<number>) => {
      state.updateUserId = action.payload;
    },
  },
});

export const { setUpdateUser, fetchUpdateUser } = updateUserSlice.actions;
export default updateUserSlice.reducer;
