import { FC } from "react";
import { Button } from "./ButtonAddTask.styled";
import { FiPlus } from "react-icons/fi";
import CreateEditTask from "../../CreateEditTask/CreateEditTask";
import { useModalWindow } from "../../../hooks/useModalWindow";
import { EmptyTask } from "../../../types/task.type";
import { ITaskListWithCount } from "../../../types/taskList.type";

interface IProps {
  taskList: ITaskListWithCount;
}

const ButtonAddTask: FC<IProps> = ({ taskList }) => {
  const { count, ...taskListWithoutCount } = taskList;

  const { MobileWindowComponent, setShowModal } = useModalWindow({
    contentComponent: (
      <CreateEditTask
        isEdit={true}
        task={EmptyTask}
        currentStatus={taskListWithoutCount}
        handleCloseModal={() => setShowModal(false)}
        isCloseWindowAfterSave
      />
    ),
  });

  return (
    <>
      <Button onClick={() => setShowModal(true)}>
        <FiPlus size={24} />
        Add new card
      </Button>
      {MobileWindowComponent}
    </>
  );
};

export default ButtonAddTask;
