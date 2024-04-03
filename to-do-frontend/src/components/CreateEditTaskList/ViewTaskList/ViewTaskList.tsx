import { FC } from "react";

import { ITaskListWithCount } from "../../../types/taskList.type";
import { WrapTitle } from "./ViewTaskList.styled";
import ButtonEditSave from "../../ButtonEditSave/ButtonEditSave";

interface IProps {
  taskList: ITaskListWithCount;
  handleEdit: () => void;
}

const ViewTaskList: FC<IProps> = ({ taskList, handleEdit }) => {
  const { name } = taskList;
  return (
    <>
      <WrapTitle>
        <h2>{name}</h2>
        <ButtonEditSave
          handleButton={handleEdit}
          isEdit
          title="Edit Task list"
        />
      </WrapTitle>
    </>
  );
};

export default ViewTaskList;
