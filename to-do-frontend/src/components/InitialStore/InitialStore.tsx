import { FC, ReactNode, useEffect } from "react";
import { useTaskList } from "../../stores/taskList.store";
import MainLoader from "../MainLoader/MainLoader";

interface IProps {
  children: ReactNode;
}

const InitialStore: FC<IProps> = ({ children }) => {
  const [fetchTasksList, isLoadTaskList] = useTaskList((state) => [
    state.fetchTasksList,
    state.isLoad,
  ]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchTasksList();
    };
    fetchData();
  }, [fetchTasksList]);

  return (
    <>
      {children}
      {!!isLoadTaskList && <MainLoader />}
    </>
  );
};

export default InitialStore;
