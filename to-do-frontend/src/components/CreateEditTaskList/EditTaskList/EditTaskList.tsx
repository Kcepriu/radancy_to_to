import { FC, useEffect } from "react";
import { FormikHelpers, useFormik } from "formik";
import { TextField } from "@mui/material";
import {
  EmptyTaskListWithCount,
  ITaskListWithCount,
} from "../../../types/taskList.type";
import { validationSchema } from "./validationSchema";
import ButtonEditSave from "../../ButtonEditSave/ButtonEditSave";

import { WrapTitle, WrapButton } from "./EditTaskList.styled";
import { useTaskList } from "../../../stores/taskList.store";

interface IProps {
  taskList: ITaskListWithCount;
  handleSave: () => void;
}

const EditTaskList: FC<IProps> = ({ taskList, handleSave }) => {
  const [
    createTaskList,
    updateOperationOk,
    setUpdateOperationOk,
    updateTaskList,
  ] = useTaskList((state) => [
    state.createTaskList,
    state.updateOperationOk,
    state.setUpdateOperationOk,
    state.updateTaskList,
  ]);

  const handlerSubmitForm = async (
    values: ITaskListWithCount,
    { setSubmitting }: FormikHelpers<ITaskListWithCount>
  ) => {
    if (values.id === 0) {
      //Create Task list
      await createTaskList({ ...values });
    } else {
      //Update task list
      await updateTaskList({ ...values });
    }
  };

  const {
    values,
    handleChange,
    handleBlur,
    touched,
    errors,
    setFieldValue,
    handleSubmit,
  } = useFormik({
    initialValues: EmptyTaskListWithCount,
    validationSchema: validationSchema,
    onSubmit: handlerSubmitForm,
  });

  useEffect(() => {
    const { id, name, count } = taskList;
    try {
      setFieldValue("id", id);
      setFieldValue("name", name);
      setFieldValue("count", count);
    } catch {}
  }, [taskList, setFieldValue]);

  useEffect(() => {
    if (updateOperationOk) {
      setUpdateOperationOk(false);
      handleSave();
    }
  }, [updateOperationOk, setUpdateOperationOk, handleSave]);

  return (
    <form onSubmit={handleSubmit}>
      <WrapTitle>
        <TextField
          id="name"
          name="name"
          label="Task name *"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.name && Boolean(errors.name)}
          helperText={touched.name && errors.name}
          fullWidth
        />
        <WrapButton>
          <ButtonEditSave
            handleButton={() => handleSubmit()}
            title="Save Task list"
          />
        </WrapButton>
      </WrapTitle>
    </form>
  );
};

export default EditTaskList;
