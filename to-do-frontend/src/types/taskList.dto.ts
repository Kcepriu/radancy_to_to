import { ITaskList, ITaskListWithTask } from "./taskList.type";

export interface IResponseTaskListWithCode {
  data: ITaskListWithTask[];
  code: number;
  message: string;
}

export interface IResponseOneTaskListWithCode {
  data: ITaskList | null;
  code: number;
  message: string;
}
