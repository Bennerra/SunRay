import * as yup from "yup";

export const loginFormSchema = yup.object().shape({
  status: yup.string().required("Это обязательное поле!"),
  name: yup.string().required("Это обязательное поле!"),
  lastName: yup.string().required("Это обязательное поле!"),
  password: yup
    .string()
    .required("Это обязательное поле!")
    .min(8, "Пароль должен быть не менее 8 символов"),
  number: yup.string().when("status", {
    is: "buyer",
    then: (schema) => schema.required("Это обязательное поле!"),
  }),
  email: yup.string().when("status", {
    is: "buyer",
    then: (schema) =>
      schema.required("Это обязательное поле!").email("Некорректный email"),
  }),
  companyName: yup.string().when("status", {
    is: "seller",
    then: (schema) => schema.required("Это обязательное поле!"),
  }),
  inn: yup.string().when("status", {
    is: "seller",
    then: (schema) => schema.required("Это обязательное поле!"),
  }),
});
