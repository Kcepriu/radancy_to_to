import { FC, useEffect, useState } from "react";
import { httpServices } from "../../service/http";
import HistoryList from "../HistoryList/HistoryList";
import { IHistory } from "../../types/history.type";
import { showErrorMessage } from "../../helpers/message";
import { useTaskList } from "../../stores/taskList.store";
import { WrapContent } from "./HistoryList.styled";

const HistoryListAll: FC = () => {
  const [setIsLoad] = useTaskList((state) => [state.setIsLoad]);

  const [listHistory, setListHistory] = useState<IHistory[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoad(true);
      try {
        const { code, data } = await httpServices.fetchAllHistory();
        setListHistory(code !== 200 ? [] : data);
      } catch (error) {
        setListHistory([]);
        showErrorMessage("Error fetch history task");
      } finally {
        setIsLoad(false);
      }
    };

    fetchData();
  }, [setIsLoad]);

  return (
    <WrapContent>
      <HistoryList listHistory={listHistory} />
    </WrapContent>
  );
};

export default HistoryListAll;
