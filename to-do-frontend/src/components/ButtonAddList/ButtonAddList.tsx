import { FC } from "react";
import { FiPlus } from "react-icons/fi";
import { useModalWindow } from "../../hooks/useModalWindow";
import CreateEditTaskList from "../CreateEditTaskList/CreateEditTaskList";
import { EmptyTaskListWithCount } from "../../types/taskList.type";
import { Button } from "./ButtonAddList.styled";

const ButtonAddList: FC = () => {
  const { MobileWindowComponent, setShowModal } = useModalWindow({
    contentComponent: (
      <CreateEditTaskList
        isEdit={true}
        taskList={{ ...EmptyTaskListWithCount }}
        handleCloseModal={() => setShowModal(false)}
        isCloseWindowAfterSave
      />
    ),
  });

  return (
    <>
      <Button onClick={() => setShowModal(true)}>
        <FiPlus size={24} />
        Create new list
      </Button>
      {MobileWindowComponent}
    </>
  );
};

export default ButtonAddList;
