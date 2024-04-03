import { FC, useEffect, useState } from "react";
import { ITask } from "../../types/task.type";
import { httpServices } from "../../service/http";
import { useTaskList } from "../../stores/taskList.store";
import { showErrorMessage } from "../../helpers/message";
import { IHistory } from "../../types/history.type";
import HistoryList from "../HistoryList/HistoryList";
import { WrapHistory } from "./HistoryListTask.styled";

interface IProps {
  task: ITask;
}

const HistoryListTask: FC<IProps> = ({ task }) => {
  const [setIsLoad] = useTaskList((state) => [state.setIsLoad]);

  const [listHistory, setListHistory] = useState<IHistory[]>([]);
  useEffect(() => {
    const fetchData = async (id: number) => {
      setIsLoad(true);
      try {
        const { code, data } = await httpServices.fetchTaskWithHistory(id);
        setListHistory(code === 200 && !!data ? data.histories : []);
      } catch (error) {
        setListHistory([]);
        showErrorMessage("Error fetch history task");
      } finally {
        setIsLoad(false);
      }
    };

    const { id } = task;
    if (id === 0) {
      setListHistory([]);
    } else {
      fetchData(id);
    }
  }, [setIsLoad, task]);

  return (
    <WrapHistory>
      <HistoryList listHistory={listHistory} isForOneTask />
    </WrapHistory>
  );
};

export default HistoryListTask;
