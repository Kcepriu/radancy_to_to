import axios, { AxiosInstance, AxiosError } from "axios";
import { BACKEND_ROUTES } from "../consts/app-keys.const";
import {
  IResponseTaskListWithCode,
  IResponseOneTaskListWithCode,
} from "../types/taskList.dto";
import { ITaskList } from "../types/taskList.type";
import { IResponseHistoriesWithCode } from "../types/history.type";
import {
  IResponseTask,
  IResponseTaskWithHistory,
  ITask,
} from "../types/task.type";

class HttpService {
  private instance: AxiosInstance;

  constructor() {
    const baseUrl = process.env.REACT_APP_BASE_URL || "";
    this.instance = axios.create({ baseURL: baseUrl });
  }

  private createMessageFromError(axiosError: AxiosError) {
    const message =
      axiosError.response &&
      axiosError.response.data &&
      typeof axiosError.response.data === "object" &&
      "message" in axiosError.response.data &&
      axiosError.response.data.message
        ? axiosError.response.data.message
        : "";

    const arrayMessage = Array.isArray(message) ? message : [message];

    return arrayMessage.join(", ");
  }

  // * TaskList
  async fetchAllTaskList(): Promise<IResponseTaskListWithCode> {
    try {
      const { status, data } = await this.instance.get(
        BACKEND_ROUTES.TASK_LIST
      );
      const tasksList = status === 200 ? data : [];

      return {
        code: status,
        data: tasksList,
        message: "",
      };
    } catch (e: any) {
      return {
        code: 400,
        data: [],
        message: e.message,
      };
    }
  }

  async createTaskList(
    taskList: ITaskList
  ): Promise<IResponseOneTaskListWithCode> {
    const { id, ...newTaskList } = taskList;

    try {
      const { status, data } = await this.instance.post(
        `${BACKEND_ROUTES.TASK_LIST}`,
        newTaskList
      );

      const createdTaskList = status === 201 ? data : null;

      return {
        code: status,
        data: createdTaskList,
        message: "",
      };
    } catch (error: any) {
      let axiosMessage = "";

      if (axios.isAxiosError(error)) {
        axiosMessage = this.createMessageFromError(error as AxiosError);
      }

      return {
        code: 400,
        data: null,
        message: axiosMessage || error.message,
      };
    }
  }

  async updateTaskList(
    taskList: ITaskList
  ): Promise<IResponseOneTaskListWithCode> {
    const { id, ...newTaskList } = taskList;

    try {
      const { status, data } = await this.instance.patch(
        `${BACKEND_ROUTES.TASK_LIST}/${id}`,
        newTaskList
      );

      const updatedTaskList = status === 200 ? data : null;

      return {
        code: status,
        data: updatedTaskList,
        message: "",
      };
    } catch (error: any) {
      let axiosMessage = "";

      if (axios.isAxiosError(error)) {
        axiosMessage = this.createMessageFromError(error as AxiosError);
      }

      return {
        code: 400,
        data: null,
        message: axiosMessage || error.message,
      };
    }
  }

  async deleteTaskList(id: number): Promise<IResponseOneTaskListWithCode> {
    try {
      const { status, data } = await this.instance.delete(
        `${BACKEND_ROUTES.TASK_LIST}/${id}`
      );

      const deletedTaskList = status === 200 ? data : null;

      return {
        code: status,
        data: deletedTaskList,
        message: "",
      };
    } catch (error: any) {
      let axiosMessage = "";

      if (axios.isAxiosError(error)) {
        axiosMessage = this.createMessageFromError(error as AxiosError);
      }

      return {
        code: 400,
        data: null,
        message: axiosMessage || error.message,
      };
    }
  }

  // * History
  async fetchAllHistory(): Promise<IResponseHistoriesWithCode> {
    try {
      const { status, data } = await this.instance.get(
        BACKEND_ROUTES.TASK_HISTORY
      );
      const historyList = status === 200 ? data : [];

      return {
        code: status,
        data: historyList,
        message: "",
      };
    } catch (e: any) {
      return {
        code: 400,
        data: [],
        message: e.message,
      };
    }
  }

  // * Task
  async fetchTaskWithHistory(id: number): Promise<IResponseTaskWithHistory> {
    try {
      const { status, data } = await this.instance.get(
        `${BACKEND_ROUTES.TASK}/${id}`
      );

      const task = status === 200 ? data : [];

      return {
        code: status,
        data: task,
        message: "",
      };
    } catch (e: any) {
      return {
        code: 400,
        data: null,
        message: e.message,
      };
    }
  }

  // * create Task
  async createTask(task: ITask): Promise<IResponseTask> {
    const { id, status: statusTask, due_date, ...newTask } = task;

    try {
      const { status, data } = await this.instance.post(
        `${BACKEND_ROUTES.TASK}`,
        { ...newTask, status: statusTask.id, due_date: Number(due_date) }
      );

      const createdTask = status === 201 ? data : null;

      return {
        code: status,
        data: createdTask,
        message: "",
      };
    } catch (error: any) {
      let axiosMessage = "";

      if (axios.isAxiosError(error)) {
        axiosMessage = this.createMessageFromError(error as AxiosError);
      }

      return {
        code: 400,
        data: null,
        message: axiosMessage || error.message,
      };
    }
  }

  // * update Task
  async updateTask(task: ITask): Promise<IResponseTask> {
    const { id, status: statusTask, due_date, ...newTask } = task;

    try {
      const { status, data } = await this.instance.patch(
        `${BACKEND_ROUTES.TASK}/${id}`,
        { ...newTask, status: statusTask.id, due_date: Number(due_date) }
      );

      const updatedTask = status === 200 ? data : null;

      return {
        code: status,
        data: updatedTask,
        message: "",
      };
    } catch (error: any) {
      let axiosMessage = "";

      if (axios.isAxiosError(error)) {
        axiosMessage = this.createMessageFromError(error as AxiosError);
      }

      return {
        code: 400,
        data: null,
        message: axiosMessage || error.message,
      };
    }
  }

  // * delete Task
  async deleteTask(id: number): Promise<IResponseTask> {
    try {
      const { status, data } = await this.instance.delete(
        `${BACKEND_ROUTES.TASK}/${id}`
      );

      const deletedTask = status === 200 ? data : null;

      return {
        code: status,
        data: deletedTask,
        message: "",
      };
    } catch (error: any) {
      let axiosMessage = "";

      if (axios.isAxiosError(error)) {
        axiosMessage = this.createMessageFromError(error as AxiosError);
      }

      return {
        code: 400,
        data: null,
        message: axiosMessage || error.message,
      };
    }
  }
}

export const httpServices = new HttpService();
