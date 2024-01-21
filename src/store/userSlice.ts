import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TBuyerData, TSellerLoginFormData } from "../models/LoginFormData";

const initialState = {
  buyer: {},
  seller: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addBuyerUser: (state, action: PayloadAction<TBuyerData>) => {
      state.buyer = action.payload;
    },
    addSellerUser: (state, action: PayloadAction<TSellerLoginFormData>) => {
      state.seller = action.payload;
    },
  },
});

export const { addBuyerUser, addSellerUser } = userSlice.actions;
export default userSlice.reducer;
