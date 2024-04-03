import * as Yup from "yup";
import { TypePriority } from "../../../types/task.type";

export const validationSchema = Yup.object({
  id: Yup.number().required("Id is required"),

  name: Yup.string()
    .max(50, "Must be 50 characters or less")
    .required("Name is required"),

  description: Yup.string()
    .max(500, "Must be 500 characters or less")
    .required("Description is required"),

  due_date: Yup.number().required("Date is required"),

  priority: Yup.mixed()
    .oneOf(Object.values(TypePriority))
    .required("Priority is required"),

  // status: Yup.mixed()
  //   .oneOf(Object.values(TaskList))
  //   .required("Priority is required"), // Ensure the value is one of the enum values
});
