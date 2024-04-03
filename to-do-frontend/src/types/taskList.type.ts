import { ITask } from "./task.type";

export interface ITaskList {
  id: number;
  name: string;
}
export interface ITaskListWithCount extends ITaskList {
  count: number;
}

export interface ITaskListWithTask extends ITaskList {
  tasks: ITask[];
}

export const EmptyTaskList: ITaskList = {
  id: 0,
  name: "",
};

export const EmptyTaskListWithCount: ITaskListWithCount = {
  id: 0,
  name: "",
  count: 0,
};
