import { TypeOperation } from "./task.type";

export interface IHistory {
  id: number;
  nameTask: string;
  due_date: string;
  operation: TypeOperation;
  data_before: string;
  data_after: string;
}

export interface IResponseHistoriesWithCode {
  data: IHistory[];
  code: number;
  message: string;
}
