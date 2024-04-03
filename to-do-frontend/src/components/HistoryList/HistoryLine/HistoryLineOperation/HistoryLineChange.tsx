import { FC } from "react";
import {
  IParamHistory,
  IOperationHistory,
} from "../../../../helpers/formatHistory";
import {
  NameTask,
  ChangedParameter,
  Text,
  WrapInformation,
  DateTask,
} from "./HistoryLineOperation.styled";

interface IProps {
  paramHistory: IParamHistory;
  operationHistory: IOperationHistory;
  isForOneTask: boolean;
}

const HistoryLineChange: FC<IProps> = ({
  paramHistory,
  operationHistory,
  isForOneTask,
}) => {
  const { who, nameTask, date } = paramHistory;
  const { nameOperation, from, to } = operationHistory;
  return (
    <WrapInformation>
      <p>
        <Text>{`${who} ${nameOperation}`}</Text>
        {!isForOneTask && <NameTask> {nameTask} </NameTask>}
        <Text> from </Text>
        <ChangedParameter data-is-task={isForOneTask}>
          {" "}
          {from}{" "}
        </ChangedParameter>
        <Text> to </Text>
        <ChangedParameter data-is-task={isForOneTask}> {to} </ChangedParameter>
      </p>

      <DateTask>{date}</DateTask>
    </WrapInformation>
  );
};

export default HistoryLineChange;
