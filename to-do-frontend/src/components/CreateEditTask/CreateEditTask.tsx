import { FC, useEffect, useState } from "react";
import HistoryListTask from "../HistoryListTask/HistoryListTask";
import { ITask } from "../../types/task.type";
import { ITaskList } from "../../types/taskList.type";
import {
  WrapPage,
  WrapTask,
  WrapHistory,
  BurgerButton,
} from "./CreateEditTask.styled";
import ViewTask from "./ViewTask/ViewTask";
import EditTask from "./EditTask/EditTask";

interface IProps {
  isEdit: boolean;
  task: ITask;
  handleCloseModal: () => void;
  isCloseWindowAfterSave?: boolean;
  currentStatus: ITaskList;
}

const CreateEditTask: FC<IProps> = ({
  isEdit,
  task,
  currentStatus,
  handleCloseModal,
  isCloseWindowAfterSave = false,
}) => {
  const [onlyView, setOnlyView] = useState(true);
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => setOnlyView(!isEdit), [isEdit, setOnlyView]);

  const handleEditTask = () => {
    setOnlyView(false);
  };

  const handleSaveTask = () => {
    isCloseWindowAfterSave ? handleCloseModal() : setOnlyView(true);
  };
  const handleBurgerButton = () => {
    setShowHistory((prev) => !prev);
  };
  return (
    <WrapPage>
      <WrapTask data-status={!showHistory}>
        {onlyView ? (
          <ViewTask task={task} handleEditTask={handleEditTask} />
        ) : (
          <EditTask
            task={task}
            currentStatus={currentStatus}
            handleSaveTask={handleSaveTask}
          />
        )}
      </WrapTask>
      <WrapHistory data-status={showHistory}>
        <h2>Activity</h2>
        <HistoryListTask task={task} />
      </WrapHistory>
      <BurgerButton onClick={handleBurgerButton}>
        {showHistory ? "Show task" : "Show History"}
      </BurgerButton>
    </WrapPage>
  );
};

export default CreateEditTask;
