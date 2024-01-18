import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TUser } from "../models/user";

const initialState = {
  user: {
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
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addBuyerUser: (state, action: PayloadAction<TUser>) => {
      state.user = action.payload;
    },
  },
});

export const { addBuyerUser } = userSlice.actions;
export default userSlice.reducer;
