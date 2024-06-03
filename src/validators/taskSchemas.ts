import * as yup from "yup";

export const taskSchema = yup.object({
  title: yup.string().required(),
  description: yup.string().required(),
  completed: yup.boolean(),
});
