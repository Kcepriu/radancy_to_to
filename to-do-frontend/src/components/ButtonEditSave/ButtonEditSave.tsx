import { FC } from "react";
import { FiEdit } from "react-icons/fi";
import { FiSave } from "react-icons/fi";
import { Button } from "./ButtonEditSave.styled";

interface IProps {
  handleButton: () => void;
  isEdit?: boolean;
  title: string;
}
const ButtonEditSave: FC<IProps> = ({
  handleButton,
  isEdit = false,
  title,
}) => {
  return (
    <Button onClick={handleButton} type="button">
      {isEdit ? <FiEdit size={16} /> : <FiSave size={16} />}
      {title}
    </Button>
  );
};

export default ButtonEditSave;
