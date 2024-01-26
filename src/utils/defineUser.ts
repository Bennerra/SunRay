import { TBuyerData } from "../models/LoginFormData";

export const defineUser = (data: TBuyerData) => {
  const {
    id,
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
    id,
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
