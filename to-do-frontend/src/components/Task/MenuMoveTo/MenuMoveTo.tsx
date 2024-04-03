import { FC } from "react";
import { Select } from "./MenuMoveTo.styled";
import { ITask } from "../../../types/task.type";
import { useTaskList } from "../../../stores/taskList.store";

interface IProps {
  task: ITask;
}
const MenuMoveTo: FC<IProps> = ({ task }) => {
  const [onlyTasksList, updateTask] = useTaskList((state) => [
    state.onlyTasksList,
    state.updateTask,
  ]);

  const handleOnChange = async (event: any) => {
    const newStatus = onlyTasksList.find(
      (taskList) => taskList.id === Number(event.target.value)
    );

    !!newStatus && (await updateTask({ ...task, status: newStatus }));
  };

  return (
    <>
      <Select name="moveTo" onChange={handleOnChange} defaultValue="header">
        <option value="header" disabled hidden>
          Move to:
        </option>
        {onlyTasksList.map((taskList) =>
          taskList.id === task.status.id ? null : (
            <option value={taskList.id} key={taskList.id}>
              {taskList.name}
            </option>
          )
        )}
      </Select>
    </>
  );
};

export default MenuMoveTo;
