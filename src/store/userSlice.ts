import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  TBuyerLoginFormData,
  TSellerLoginFormData,
} from "../models/LoginFormData";

const initialState = {
  buyer: {
    username: "",
    name: "",
    lastname: "",
    password: "",
    status: "",
    city: "",
    street: "",
    number: "",
    lat: "",
    long: "",
    zipcode: "",
    phone: "",
    email: "",
  },
  seller: {
    username: "",
    name: "",
    lastname: "",
    password: "",
    status: "",
    companyName: "",
    inn: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addBuyerUser: (state, action: PayloadAction<TBuyerLoginFormData>) => {
      state.buyer = action.payload;
    },
    addSellerUser: (state, action: PayloadAction<TSellerLoginFormData>) => {
      state.seller = action.payload;
    },
  },
});

export const { addBuyerUser, addSellerUser } = userSlice.actions;
export default userSlice.reducer;
