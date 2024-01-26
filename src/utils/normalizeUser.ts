import { TUser } from "@/models/TUser";

export const normalizeUser = (user: TUser) => {
  const { id, username, name, email, phone, password, address } = user;

  return {
    id,
    email,
    username,
    password,
    name: name.firstname,
    lastname: name.lastname,
    city: address.city,
    street: address.street,
    number: address.number,
    zipcode: address.zipcode,
    lat: address.geolocation.lat,
    long: address.geolocation.long,
    phone,
  };
};
