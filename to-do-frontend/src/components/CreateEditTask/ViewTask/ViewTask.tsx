import { FC } from "react";
import { ITask } from "../../../types/task.type";
import { LiaCrosshairsSolid } from "react-icons/lia";
import { LiaShirtsinbulk } from "react-icons/lia";
import { LuCalendar } from "react-icons/lu";
import { formatDate } from "../../../helpers/formatDateTime";
import ButtonEditSave from "../../ButtonEditSave/ButtonEditSave";
import {
  LineInformation,
  TitleLine,
  WrapInformation,
  TitleDescription,
  WrapDescription,
  WrapTitle,
  Priority,
  Description,
} from "./ViewTask.styled";

interface IProps {
  task: ITask;
  handleEditTask: () => void;
}
const ViewTask: FC<IProps> = ({ task, handleEditTask }) => {
  const { name, description, due_date, priority, status } = task;
  return (
    <>
      <WrapTitle>
        <h2>{name}</h2>
        <ButtonEditSave
          handleButton={handleEditTask}
          title="Edit Task"
          isEdit
        />
      </WrapTitle>

      <WrapInformation>
        <LineInformation>
          <TitleLine>
            <LiaCrosshairsSolid size={24} />
            Status
          </TitleLine>
          <p>{status.name}</p>
        </LineInformation>

        <LineInformation>
          <TitleLine>
            <LuCalendar size={24} />
            Due date
          </TitleLine>
          <p>{formatDate(Number(due_date))}</p>
        </LineInformation>

        <LineInformation>
          <TitleLine>
            <LiaShirtsinbulk size={24} />
            Priority
          </TitleLine>
          <Priority>{priority}</Priority>
        </LineInformation>
      </WrapInformation>

      <TitleDescription>Description</TitleDescription>
      <WrapDescription>
        <Description>{description}</Description>
      </WrapDescription>
    </>
  );
};

export default ViewTask;
