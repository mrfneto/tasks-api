import * as Yup from "yup";

export const registrationSchema = Yup.object({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(6).required(),
});

export const loginSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().min(6).required(),
});
