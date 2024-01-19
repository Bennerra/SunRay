import * as yup from "yup";

export const loginFormSchema = yup.object().shape({
  username: yup
    .string()
    .required("Это обязательное поле!")
    .min(8, "Username должен быть не менее 8 символов"),
  status: yup.string().required("Это обязательное поле!"),
  name: yup.string().required("Это обязательное поле!"),
  lastname: yup.string().required("Это обязательное поле!"),
  password: yup
    .string()
    .required("Это обязательное поле!")
    .min(8, "Пароль должен быть не менее 8 символов"),
  companyName: yup.string().when("status", {
    is: "seller",
    then: (schema) => schema.required("Это обязательное поле!"),
  }),
  inn: yup.string().when("status", {
    is: "seller",
    then: (schema) => schema.required("Это обязательное поле!"),
  }),
  city: yup.string().when("status", {
    is: "buyer",
    then: (schema) => schema.required("Это обязательное поле!"),
  }),
  street: yup.string().when("status", {
    is: "buyer",
    then: (schema) => schema.required("Это обязательное поле!"),
  }),
  number: yup.string().when("status", {
    is: "buyer",
    then: (schema) => schema.required("Это обязательное поле!"),
  }),
  lat: yup.string().when("status", {
    is: "buyer",
    then: (schema) => schema.required("Это обязательное поле!"),
  }),
  long: yup.string().when("status", {
    is: "buyer",
    then: (schema) => schema.required("Это обязательное поле!"),
  }),
  zipcode: yup.string().when("status", {
    is: "buyer",
    then: (schema) => schema.required("Это обязательное поле!"),
  }),
  phone: yup.string().when("status", {
    is: "buyer",
    then: (schema) => schema.required("Это обязательное поле!"),
  }),
  email: yup.string().when("status", {
    is: "buyer",
    then: (schema) =>
      schema.required("Это обязательное поле!").email("Некорректный email"),
  }),
});
