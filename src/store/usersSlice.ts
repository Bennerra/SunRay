import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TBuyerData } from "../models/LoginFormData";

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
    fetchUsers: (state) => {
      state.isLoading = true;
    },
  },
});

export const { setUsers, setUsersError, fetchUsers } = usersSlice.actions;
export default usersSlice.reducer;
