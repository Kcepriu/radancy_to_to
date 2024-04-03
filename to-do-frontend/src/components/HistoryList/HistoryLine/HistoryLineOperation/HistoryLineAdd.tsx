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
  LineInformation,
} from "./HistoryLineOperation.styled";

interface IProps {
  paramHistory: IParamHistory;
  operationHistory: IOperationHistory;
  isForOneTask: boolean;
}

const HistoryLineAdd: FC<IProps> = ({
  paramHistory,
  operationHistory,
  isForOneTask,
}) => {
  const { who, nameTask, date } = paramHistory;
  const { nameOperation, to } = operationHistory;
  return (
    <WrapInformation>
      <LineInformation>
        <Text>{`${who} ${nameOperation}`}</Text>
        {isForOneTask && <Text> this task </Text>}
        {!isForOneTask && <NameTask> {nameTask} </NameTask>}
        {!isForOneTask && <Text> to the </Text>}
        {!isForOneTask && <ChangedParameter> {to} </ChangedParameter>}
      </LineInformation>

      <DateTask>{date}</DateTask>
    </WrapInformation>
  );
};

export default HistoryLineAdd;
