type TBaseFormData = {
  username: string;
  name: string;
  lastname: string;
  password: string;
  status: string;
};

export type TBuyerData = TBaseFormData & {
  city: string;
  street: string;
  number: string;
  lat: string;
  long: string;
  zipcode: string;
  phone: string;
  email: string;
};

export type TSellerLoginFormData = TBaseFormData & {
  middleName?: string;
  companyName: string;
  inn: string;
};

export type TFormData = {
  username: string;
  name: string;
  lastname: string;
  middleName?: string;
  password: string;
  status: string;
  city: string;
  street: string;
  number: string;
  lat: string;
  long: string;
  zipcode: string;
  phone: string;
  email: string;
  companyName: string;
  inn: string;
};
