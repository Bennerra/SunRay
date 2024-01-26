import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  TBuyerLoginFormData,
  TSellerLoginFormData,
} from "@/models/LoginFormData";
import { TUser } from "@/models/TUser";

const initialState = {
  buyer: {},
  seller: {},
  formBuyerData: {},
  idUser: 0,
  isAuth: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setBuyerUser: (state, action: PayloadAction<TUser>) => {
      state.buyer = action.payload;
    },
    setSellerUser: (state, action: PayloadAction<TSellerLoginFormData>) => {
      state.seller = action.payload;
    },
    setIdUser: (state, action: PayloadAction<number>) => {
      state.idUser = action.payload;
    },
    addBuyerUser: (state, action: PayloadAction<TBuyerLoginFormData>) => {
      state.formBuyerData = action.payload;
    },
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
  },
});

export const {
  setBuyerUser,
  setSellerUser,
  setIdUser,
  addBuyerUser,
  setIsAuth,
} = userSlice.actions;
export default userSlice.reducer;
