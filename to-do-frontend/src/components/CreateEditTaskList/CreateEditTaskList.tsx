import { FC, useEffect, useState } from "react";
import { ITaskListWithCount } from "../../types/taskList.type";
import ViewTaskList from "./ViewTaskList/ViewTaskList";
import EditTaskList from "./EditTaskList/EditTaskList";
import { WrapPage } from "./CreateEditTaskList.styled";

interface IProps {
  isEdit: boolean;
  taskList: ITaskListWithCount;
  handleCloseModal: () => void;
  isCloseWindowAfterSave?: boolean;
}

const CreateEditTaskList: FC<IProps> = ({
  isEdit,
  taskList,
  handleCloseModal,
  isCloseWindowAfterSave = false,
}) => {
  const [onlyView, setOnlyView] = useState(true);

  useEffect(() => setOnlyView(!isEdit), [isEdit, setOnlyView]);

  const handleEdit = () => {
    setOnlyView(false);
  };

  const handleSave = () => {
    isCloseWindowAfterSave ? handleCloseModal() : setOnlyView(true);
  };

  return (
    <WrapPage>
      {onlyView ? (
        <ViewTaskList taskList={taskList} handleEdit={handleEdit} />
      ) : (
        <EditTaskList taskList={taskList} handleSave={handleSave} />
      )}
    </WrapPage>
  );
};

export default CreateEditTaskList;
