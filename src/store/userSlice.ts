import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  TBuyerLoginFormData,
  TSellerLoginFormData,
} from "@/models/LoginFormData";

const initialState = {
  user: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (
      state,
      action: PayloadAction<TBuyerLoginFormData | TSellerLoginFormData>
    ) => {
      state.user = action.payload;
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
