import { FC } from "react";
import HeaderTaskList from "./HeaderTaskList/HeaderTaskList";
import ButtonAddTask from "./ButtonAddTask/ButtonAddTask";
import Task from "../Task/Task";
import { ITaskListWithTask } from "../../types/taskList.type";
import { WrapList, List } from "./TaskList.styled";

interface IProps {
  taskList: ITaskListWithTask;
}

const TaskList: FC<IProps> = ({ taskList }) => {
  const { tasks, ...newTaskList } = taskList;
  return (
    <WrapList>
      <HeaderTaskList taskList={{ ...newTaskList, count: tasks.length }} />
      <ButtonAddTask taskList={{ ...newTaskList, count: tasks.length }} />
      <List>
        {tasks.map((task) => (
          <li key={task.id}>
            <Task task={task} />
          </li>
        ))}
      </List>
    </WrapList>
  );
};

export default TaskList;
