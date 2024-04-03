import { FC, useEffect } from "react";
import TaskList from "../TaskList/TaskList";
import { useTaskList } from "../../stores/taskList.store";
import { showErrorMessage } from "../../helpers/message";
import { List, ElementList } from "./TaskBoard.styled";

const TaskBoard: FC = () => {
  const [tasksList, isError, messageError, setIsError] = useTaskList(
    (state) => [
      state.tasksList,
      state.isError,

      state.messageError,
      state.setIsError,
    ]
  );

  useEffect(() => {
    if (isError) {
      showErrorMessage(messageError);
      setIsError(false);
    }
  }, [isError, messageError, setIsError]);

  return (
    <div>
      <List>
        {tasksList.map((element) => (
          <ElementList key={element.id}>
            <TaskList taskList={element} />
          </ElementList>
        ))}
      </List>
    </div>
  );
};

export default TaskBoard;
