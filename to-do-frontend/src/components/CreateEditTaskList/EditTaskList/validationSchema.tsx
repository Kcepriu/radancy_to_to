import * as Yup from "yup";

export const validationSchema = Yup.object({
  id: Yup.number().required("Id is required"),

  name: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Name is required"),

  count: Yup.number().required("Date is required"),
});
