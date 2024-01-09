type TBaseFormData = {
  name: string;
  lastName: string;
  middleName?: string;
  password: string;
  status: string;
};

export type TBuyerLoginFormData = TBaseFormData & {
  number: string;
  email: string;
};

export type TSellerLoginFormData = TBaseFormData & {
  companyName: string;
  inn: string;
};
