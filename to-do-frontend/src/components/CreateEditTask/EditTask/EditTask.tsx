import { FC, useEffect } from "react";
import { FormikHelpers, useFormik } from "formik";
import { TextField, Select, MenuItem } from "@mui/material";
import { ITask } from "../../../types/task.type";
import { LiaCrosshairsSolid } from "react-icons/lia";
import { LiaShirtsinbulk } from "react-icons/lia";
import { LuCalendar } from "react-icons/lu";
import { validationSchema } from "./validationSchema";
import { EmptyTask } from "../../../types/task.type";
import { TypePriority } from "../../../types/task.type";
import DatePicker from "react-datepicker";
import ButtonEditSave from "../../ButtonEditSave/ButtonEditSave";
import {
  LineInformation,
  TitleLine,
  WrapInformation,
  TitleDescription,
  WrapDescription,
  WrapTitle,
  SelectPriority,
  TextSelectPriority,
  WrapDate,
} from "./EditTask.styled";
import { useTaskList } from "../../../stores/taskList.store";
import { ITaskList } from "../../../types/taskList.type";
import "react-datepicker/dist/react-datepicker.css";
import "./EditTask.css";

interface IProps {
  task: ITask;
  currentStatus: ITaskList;
  handleSaveTask: () => void;
}
const EditTask: FC<IProps> = ({ task, currentStatus, handleSaveTask }) => {
  const [
    onlyTasksList,
    updateOperationOk,
    setUpdateOperationOk,
    updateTask,
    createTask,
  ] = useTaskList((state) => [
    state.onlyTasksList,
    state.updateOperationOk,
    state.setUpdateOperationOk,
    state.updateTask,
    state.createTask,
  ]);

  const handlerSubmitForm = async (
    values: ITask,
    { setSubmitting, resetForm }: FormikHelpers<ITask>
  ) => {
    if (values.id === 0) {
      // * Create Task
      await createTask({ ...values });
    } else {
      // * Update task
      await updateTask({ ...values });
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
    initialValues: EmptyTask,
    validationSchema: validationSchema,
    onSubmit: handlerSubmitForm,
    enableReinitialize: false,
  });

  useEffect(() => {
    const { id, name, description, due_date, priority } = task;
    try {
      setFieldValue("id", id);
      setFieldValue("name", name);
      setFieldValue("description", description);
      setFieldValue("due_date", due_date ? due_date : String(Date.now()));
      setFieldValue("priority", priority);
    } catch {}
  }, [task, setFieldValue]);

  useEffect(() => {
    setFieldValue("status", currentStatus);
  }, [currentStatus, setFieldValue]);

  useEffect(() => {
    if (updateOperationOk) {
      setUpdateOperationOk(false);
      handleSaveTask();
    }
  }, [updateOperationOk, setUpdateOperationOk, handleSaveTask]);

  const handleChangeDate = (date: Date) => {
    !!date && setFieldValue("due_date", String(date.getTime()));
  };

  const handleChangeStatus = (event: any) => {
    const newValue = onlyTasksList.find(
      (taskList) => taskList.id === event.target.value
    );
    !!newValue && setFieldValue("status", newValue);
  };
  return (
    <>
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
          />
          <ButtonEditSave
            handleButton={() => handleSubmit()}
            title="Save Task"
          />
        </WrapTitle>

        <WrapInformation>
          <LineInformation>
            <TitleLine>
              <LiaCrosshairsSolid size={24} />
              Status
            </TitleLine>
            {values.status.id > 0 && (
              <Select
                id="status"
                labelId="status"
                name="status"
                value={values.status.id}
                // label="Status"
                onChange={handleChangeStatus}
                onBlur={handleBlur}
                error={touched.status && Boolean(errors.status)}
                size="small"
                style={{ width: "215px" }}
              >
                {onlyTasksList.map((status) => {
                  return (
                    <MenuItem value={status.id} key={status.id}>
                      {status.name}
                    </MenuItem>
                  );
                })}
              </Select>
            )}
          </LineInformation>

          <LineInformation>
            <TitleLine>
              <LuCalendar size={24} />
              Due date
            </TitleLine>
            <WrapDate>
              <DatePicker
                selected={new Date(Number(values.due_date))}
                onChange={handleChangeDate}
                dateFormat="EEE, dd LLL"
              />
            </WrapDate>
          </LineInformation>

          <LineInformation>
            <TitleLine>
              <LiaShirtsinbulk size={24} />
              Priority
            </TitleLine>
            <SelectPriority
              id="priority"
              labelId="priority"
              name="priority"
              value={values.priority}
              // label="Priority"
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.priority && Boolean(errors.priority)}
              size="small"
              style={{ width: "215px" }}
            >
              {Object.values(TypePriority).map((priority) => (
                <MenuItem value={priority} key={priority}>
                  <TextSelectPriority>{priority}</TextSelectPriority>
                </MenuItem>
              ))}
            </SelectPriority>
          </LineInformation>
        </WrapInformation>

        <TitleDescription>Description</TitleDescription>
        <WrapDescription>
          <TextField
            fullWidth
            id="description"
            name="description"
            label="Description *"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            multiline
            rows={6}
            error={touched.description && Boolean(errors.description)}
            helperText={touched.description && errors.description}
            size="small"
          />
        </WrapDescription>
      </form>
    </>
  );
};

export default EditTask;
