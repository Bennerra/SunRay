import * as yup from "yup";

export const updateUserFormScheme = yup.object().shape({
  username: yup
    .string()
    .required("Это обязательное поле!")
    .min(8, "Username должен быть не менее 8 символов"),
  name: yup.string().required("Это обязательное поле!"),
  lastname: yup.string().required("Это обязательное поле!"),
  password: yup
    .string()
    .required("Это обязательное поле!")
    .min(8, "Пароль должен быть не менее 8 символов"),
  city: yup.string().required("Это обязательное поле!"),
  street: yup.string().required("Это обязательное поле!"),
  number: yup.string().required("Это обязательное поле!"),
  lat: yup.string().required("Это обязательное поле!"),
  long: yup.string().required("Это обязательное поле!"),
  zipcode: yup.string().required("Это обязательное поле!"),
  phone: yup.string().required("Это обязательное поле!"),
  email: yup
    .string()
    .required("Это обязательное поле!")
    .email("Некорректный email"),
});
