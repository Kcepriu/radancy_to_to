import { FC } from "react";
import {
  IOperationHistory,
  IParamHistory,
} from "../../../helpers/formatHistory";
import HistoryLineAdd from "./HistoryLineOperation/HistoryLineAdd";
import HistoryLineDelete from "./HistoryLineOperation/HistoryLineDelete";
import HistoryLineChange from "./HistoryLineOperation/HistoryLineChange";
import { TypeOperation } from "../../../types/task.type";

interface IProps {
  paramHistory: IParamHistory;
  operationHistory: IOperationHistory;
  isForOneTask: boolean;
}
const HistoryLine: FC<IProps> = ({
  paramHistory,
  operationHistory,
  isForOneTask,
}) => {
  return (
    <>
      {paramHistory.typeOperation === TypeOperation.POST && (
        <HistoryLineAdd
          paramHistory={paramHistory}
          operationHistory={operationHistory}
          isForOneTask={isForOneTask}
        />
      )}

      {paramHistory.typeOperation === TypeOperation.DELETE && (
        <HistoryLineDelete
          paramHistory={paramHistory}
          operationHistory={operationHistory}
        />
      )}

      {paramHistory.typeOperation === TypeOperation.PATCH && (
        <HistoryLineChange
          paramHistory={paramHistory}
          operationHistory={operationHistory}
          isForOneTask={isForOneTask}
        />
      )}
    </>
  );
};

export default HistoryLine;
