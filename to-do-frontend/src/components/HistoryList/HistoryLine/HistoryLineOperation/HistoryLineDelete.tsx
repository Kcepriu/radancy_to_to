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
}

const HistoryLineDelete: FC<IProps> = ({ paramHistory, operationHistory }) => {
  const { who, nameTask, date } = paramHistory;
  const { nameOperation, from } = operationHistory;
  return (
    <WrapInformation>
      <p>
        <Text>{`${who} ${nameOperation}`}</Text>
        <NameTask> {nameTask} </NameTask>
        <Text> from </Text>
        <ChangedParameter> {from} </ChangedParameter>
      </p>

      <DateTask>{date}</DateTask>
    </WrapInformation>
  );
};

export default HistoryLineDelete;
