import { IHistory } from "../types/history.type";
import { formatDateWithTime } from "./formatDateTime";
import { ITask, TypeOperation } from "../types/task.type";

export interface IOperationHistory {
  nameOperation: string;
  from: string;
  to: string;
}

export interface IParamHistory {
  who: string;
  nameTask: string;
  date: string;
  operations: IOperationHistory[];
  typeOperation: TypeOperation;
}

class ParamHistoryService {
  private emptyParamHistory: IParamHistory;

  constructor() {
    this.emptyParamHistory = {
      who: "",
      nameTask: "",
      date: "",
      typeOperation: TypeOperation.POST,
      operations: [],
    };
  }

  private addWho(paramHistory: IParamHistory, lineHistory: IHistory) {
    paramHistory.who = "You";
  }

  private addTypeOperation(paramHistory: IParamHistory, lineHistory: IHistory) {
    paramHistory.typeOperation = lineHistory.operation;
  }

  // * addNameTask
  private addNameTask(paramHistory: IParamHistory, lineHistory: IHistory) {
    paramHistory.nameTask = lineHistory.nameTask;
  }

  // * addDate
  private addDate(paramHistory: IParamHistory, lineHistory: IHistory) {
    paramHistory.date = formatDateWithTime(Number(lineHistory.due_date));
  }

  // * getObjectHistory
  private getObjectHistory(strObject: string): ITask | null {
    try {
      const obj = JSON.parse(strObject);
      return obj as ITask;
    } catch {
      return null;
    }
  }
  private createChangeOperation(
    paramHistory: IParamHistory,
    objectFrom: ITask,
    objectTo: ITask,
    isForOneTask: boolean
  ) {
    // rename
    if (objectFrom.name !== objectTo.name) {
      paramHistory.operations.push({
        nameOperation: isForOneTask ? "renamed this task" : "renamed",
        from: objectFrom.name,
        to: objectTo.name,
      });
    }

    // changed the priority
    if (objectFrom.priority !== objectTo.priority) {
      paramHistory.operations.push({
        nameOperation: isForOneTask ? "changed status" : "changed the priority",
        from: objectFrom.priority,
        to: objectTo.priority,
      });
    }
    // moved
    if (objectFrom.status.id !== objectTo.status.id) {
      paramHistory.operations.push({
        nameOperation: isForOneTask ? "moved this task" : "moved",
        from: objectFrom.status.name,
        to: objectTo.status.name,
      });
    }
  }

  // ! addNameOperation
  private addOperation(
    paramHistory: IParamHistory,
    lineHistory: IHistory,
    isForOneTask: boolean
  ) {
    const objectFrom = this.getObjectHistory(lineHistory.data_before);
    const objectTo = this.getObjectHistory(lineHistory.data_after);

    if (lineHistory.operation === TypeOperation.POST) {
      // Add task
      paramHistory.operations.push({
        nameOperation: isForOneTask ? "created" : "added",
        from: "",
        to: !!objectTo ? objectTo.status.name : "",
      });
    } else if (lineHistory.operation === TypeOperation.DELETE) {
      // Delete task
      paramHistory.operations.push({
        nameOperation: "deleted",
        from: !!objectFrom ? objectFrom.status.name : "",
        to: "",
      });
    } else {
      // change task
      !!objectFrom &&
        !!objectTo &&
        this.createChangeOperation(
          paramHistory,
          objectFrom,
          objectTo,
          isForOneTask
        );
    }
  }

  createParamHistory(
    lineHistory: IHistory,
    isForOneTask: boolean
  ): IParamHistory {
    const paramHistory = { ...this.emptyParamHistory };
    paramHistory.operations = [];

    this.addWho(paramHistory, lineHistory);
    this.addNameTask(paramHistory, lineHistory);
    this.addDate(paramHistory, lineHistory);
    this.addTypeOperation(paramHistory, lineHistory);
    this.addOperation(paramHistory, lineHistory, isForOneTask);

    return paramHistory;
  }
}

export const paramHistoryService = new ParamHistoryService();
