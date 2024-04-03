import { IHistory } from "./history.type";
import { ITaskList } from "./taskList.type";
import { EmptyTaskList } from "./taskList.type";

export enum TypePriority {
  LOW = "low",
  MEDIUM = "medium",
  HIGH = "high",
}

export enum TypeOperation {
  "POST" = "post",
  "PATCH" = "patch",
  "DELETE" = "delete",
}

export interface ITask {
  id: number;
  name: string;
  description: string;
  due_date: string;
  priority: TypePriority;
  status: ITaskList;
}

export const EmptyTask: ITask = {
  id: 0,
  name: "",
  description: "",
  due_date: "",
  priority: TypePriority.LOW,
  status: EmptyTaskList,
};

export interface ITaskWithHistory extends ITask {
  histories: IHistory[];
}

export interface IResponseTaskWithHistory {
  data: ITaskWithHistory | null;
  code: number;
  message: string;
}

export interface IResponseTask {
  data: ITask | null;
  code: number;
  message: string;
}
