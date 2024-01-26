import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { TBuyerData } from "@/models/LoginFormData";
import { TUpdateUser } from "@/models/TUpdateUser";

interface IUsersState {
  users: TBuyerData[];
  error: string;
  isLoading: boolean;
}

const initialState: IUsersState = {
  users: [],
  error: "",
  isLoading: false,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<TBuyerData[]>) => {
      state.users = action.payload;
      state.isLoading = false;
    },
    setUsersError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    updateUsers: (state, action: PayloadAction<TUpdateUser>) => {
      state.users = state.users.map((el) => {
        if (el.id === Number(action.payload.id)) {
          return { ...el, ...action.payload.data };
        } else {
          return el;
        }
      });
    },
    fetchUsers: (state) => {
      state.isLoading = true;
    },
  },
});

export const { setUsers, setUsersError, updateUsers, fetchUsers } =
  usersSlice.actions;
export default usersSlice.reducer;
