import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TUser } from "../models/TUser";
import { TSellerLoginFormData } from "../models/LoginFormData";

const initialState = {
  buyer: {
    email: "",
    username: "",
    password: "",
    name: {
      firstname: "",
      lastname: "",
    },
    address: {
      city: "",
      street: "",
      number: 0,
      zipcode: "",
      geolocation: {
        lat: "",
        long: "",
      },
    },
    phone: "",
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
    addBuyerUser: (state, action: PayloadAction<TUser>) => {
      state.buyer = action.payload;
    },
    addSellerUser: (state, action: PayloadAction<TSellerLoginFormData>) => {
      state.seller = action.payload;
    },
  },
});

export const { addBuyerUser, addSellerUser } = userSlice.actions;
export default userSlice.reducer;
