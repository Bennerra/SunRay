import { TBuyerData } from "../models/LoginFormData";

export const defineUser = (data: TBuyerData) => {
  const {
    email,
    username,
    password,
    name,
    lastname,
    city,
    street,
    number,
    zipcode,
    lat,
    long,
    phone,
  } = data;

  return {
    email,
    username,
    password,
    phone,
    name: {
      firstname: name,
      lastname: lastname,
    },
    address: {
      city,
      street,
      number: Number(number),
      zipcode,
      geolocation: {
        lat,
        long,
      },
    },
  };
};
