import { create } from "zustand";
import {httpServices} from "../service/http";
import {
  ITaskListWithTask,
  ITaskListWithCount,
  ITaskList,
} from "../types/taskList.type";
import { ITask } from "../types/task.type";

interface IStateTaskList {
  tasksList: ITaskListWithTask[];
  onlyTasksList: ITaskList[];
  isError: boolean;
  isLoad: boolean;
  messageError: string;
  updateOperationOk: boolean;

  fetchTasksList: () => Promise<void>;
  updateTaskList: (taskList: ITaskListWithCount) => Promise<void>;
  createTaskList: (taskList: ITaskListWithCount) => Promise<void>;
  deleteTaskList: (taskList: ITaskListWithCount) => Promise<void>;

  updateTask: (task: ITask) => Promise<void>;
  createTask: (task: ITask) => Promise<void>;
  deleteTask: (task: ITask) => Promise<void>;

  setIsError: (isError: boolean) => void;
  setUpdateOperationOk: (updateOperationOk: boolean) => void;
  setIsLoad: (isLoad: boolean) => void;
}

const createOnlyTaskList = (taskList: ITaskListWithTask[]): ITaskList[] => {
  const onlyTasksList = taskList.map((taskList) => {
    const { tasks, ...newTaskList } = taskList;
    return newTaskList;
  });

  return onlyTasksList;
};

const findTaskInTasksList = (
  id: number,
  tasksList: ITaskListWithTask[]
): ITask | null => {
  for (let taskList of tasksList) {
    const fountTask = taskList.tasks.find((task) => task.id === id);
    if (!!fountTask) return fountTask;
  }

  return null;
};

export const useTaskList = create<IStateTaskList>()((set, get) => ({
  tasksList: [],
  onlyTasksList: [],
  isLoad: false,
  isError: false,
  messageError: "",
  updateOperationOk: false,

  setIsError: (isError: boolean) => {
    return set((state) => ({
      isError,
    }));
  },

  setUpdateOperationOk: (updateOperationOk: boolean) => {
    return set((state) => ({
      updateOperationOk,
    }));
  },

  setIsLoad: (isLoad: boolean) => {
    return set((state) => ({
      isLoad,
    }));
  },

  fetchTasksList: async () => {
    set({ isLoad: true, isError: false, messageError: "" });

    try {
      const { code, data, message } = await httpServices.fetchAllTaskList();

      set({
        tasksList: data,
        onlyTasksList: createOnlyTaskList(data),
        isError: code !== 200,
        messageError: message,
      });
    } catch (error) {
      set({
        isError: true,
        messageError: "Error fetch tasks",
      });
    } finally {
      set({ isLoad: false });
    }
  },

  // * TaskList
  createTaskList: async (taskList: ITaskListWithCount) => {
    set({
      isLoad: true,
      isError: false,
      updateOperationOk: false,
      messageError: "",
    });

    try {
      const { count, ...createTaskList } = taskList;
      const { code, data, message } = await httpServices.createTaskList(
        createTaskList
      );

      if (!!data && code === 201) {
        const newTasksList = [...get().tasksList, { ...data, tasks: [] }];

        set({
          tasksList: newTasksList,
          onlyTasksList: createOnlyTaskList(newTasksList),
          isError: code !== 201,
          messageError: message,
          updateOperationOk: code === 201,
        });
      } else {
        set({
          isError: true,
          messageError: message || "Error create Task List",
        });
      }
    } catch (error) {
      console.error("Error create task list:", error);
      set({
        isError: true,
        messageError: "Error create Task List",
      });
    } finally {
      set({ isLoad: false });
    }
  },

  deleteTaskList: async (taskList: ITaskListWithCount) => {
    set({
      isLoad: true,
      isError: false,
      messageError: "",
    });

    try {
      const { id } = taskList;
      const { code, data, message } = await httpServices.deleteTaskList(id);

      if (!!data && code === 200) {
        const newTasksList = [
          ...get().tasksList.filter((taskList) => taskList.id !== id),
        ];

        set({
          tasksList: newTasksList,
          onlyTasksList: createOnlyTaskList(newTasksList),
          isError: code !== 200,
          messageError: message,
        });
      } else {
        set({
          isError: true,
          messageError: message || "Error deleted Task List",
        });
      }
    } catch (error) {
      console.error("Error deleted task list:", error);
      set({
        isError: true,
        messageError: "Error deleted Task List",
      });
    } finally {
      set({ isLoad: false });
    }
  },

  updateTaskList: async (taskList: ITaskListWithCount) => {
    set({
      isLoad: true,
      isError: false,
      updateOperationOk: false,
      messageError: "",
    });

    try {
      const { count, ...updateTaskList } = taskList;
      const { code, data, message } = await httpServices.updateTaskList(
        updateTaskList
      );

      if (!!data && code === 200) {
        const newTasksList = [...get().tasksList];

        const { id } = data;

        const indexUpdateTaskList = newTasksList.findIndex(
          (taskList) => taskList.id === id
        );

        const { tasks } = newTasksList[indexUpdateTaskList];

        newTasksList[indexUpdateTaskList] = { ...data, tasks };

        set({
          tasksList: newTasksList,
          onlyTasksList: createOnlyTaskList(newTasksList),
          isError: code !== 200,
          messageError: message,
          updateOperationOk: code === 200,
        });
      } else {
        set({
          isError: true,
          messageError: message || "Error update Task List",
        });
      }
    } catch (error) {
      console.error("Error update task list:", error);
      set({
        isError: true,
        messageError: "Error update Task List",
      });
    } finally {
      set({ isLoad: false });
    }
  },

  // * Task
  // * createTask
  createTask: async (task: ITask) => {
    set({
      isLoad: true,
      isError: false,
      updateOperationOk: false,
      messageError: "",
    });

    try {
      const { code, data, message } = await httpServices.createTask(task);

      if (!!data && code === 201) {
        const idTaskList = data.status.id;
        const newTasksList = [...get().tasksList];
        const indexUpdateTaskList = newTasksList.findIndex(
          (taskList) => taskList.id === idTaskList
        );
        newTasksList[indexUpdateTaskList].tasks.push(data);

        set({
          tasksList: newTasksList,
          isError: code !== 201,
          messageError: message,
          updateOperationOk: code === 201,
        });
      } else {
        set({
          isError: true,
          messageError: message || "Error create Task",
        });
      }
    } catch (error) {
      console.error("Error create Task:", error);
      set({
        isError: true,
        messageError: "Error create Task",
      });
    } finally {
      set({ isLoad: false });
    }
  },

  // * deleteTask
  deleteTask: async (task: ITask) => {
    set({
      isLoad: true,
      isError: false,
      messageError: "",
    });

    try {
      const { id } = task;
      const { code, data, message } = await httpServices.deleteTask(id);

      if (!!data && code === 200) {
        const idTaskList = data.status.id;
        const newTasksList = [...get().tasksList];
        const indexUpdateTaskList = newTasksList.findIndex(
          (taskList) => taskList.id === idTaskList
        );

        const { tasks } = newTasksList[indexUpdateTaskList];
        newTasksList[indexUpdateTaskList].tasks = tasks.filter(
          (task) => task.id !== id
        );

        set({
          tasksList: newTasksList,
          onlyTasksList: createOnlyTaskList(newTasksList),
          isError: code !== 200,
          messageError: message,
        });
      } else {
        set({
          isError: true,
          messageError: message || "Error deleted Task List",
        });
      }
    } catch (error) {
      console.error("Error deleted task list:", error);
      set({
        isError: true,
        messageError: "Error deleted Task List",
      });
    } finally {
      set({ isLoad: false });
    }
  },
  // * updateTask
  updateTask: async (task: ITask) => {
    set({
      isLoad: true,
      isError: false,
      updateOperationOk: false,
      messageError: "",
    });

    try {
      const newTasksList = [...get().tasksList];

      const foundTask = findTaskInTasksList(task.id, newTasksList);
      if (!foundTask) throw new Error("Not fount task");
      const idPrevTaskList = foundTask.status.id;

      const { code, data, message } = await httpServices.updateTask(task);

      if (!!data && code === 200) {
        const {
          id: taskId,
          status: { id: idNewTaskList },
        } = data;

        if (idPrevTaskList === idNewTaskList) {
          //Update
          const indexTaskList = newTasksList.findIndex(
            (taskList) => taskList.id === idNewTaskList
          );
          const { tasks: tasksForUpdate } = newTasksList[indexTaskList];
          const indexTask = tasksForUpdate.findIndex(
            (task) => task.id === taskId
          );
          tasksForUpdate[indexTask] = data;

          newTasksList[indexTaskList].tasks = [...tasksForUpdate];
        } else {
          // Delete
          const indexOldTaskList = newTasksList.findIndex(
            (taskList) => taskList.id === idPrevTaskList
          );
          const { tasks: tasksForDelete } = newTasksList[indexOldTaskList];
          newTasksList[indexOldTaskList].tasks = tasksForDelete.filter(
            (task) => task.id !== taskId
          );

          // add
          const indexNewTaskList = newTasksList.findIndex(
            (taskList) => taskList.id === idNewTaskList
          );
          newTasksList[indexNewTaskList].tasks.push(data);
        }

        set({
          tasksList: newTasksList,
          onlyTasksList: createOnlyTaskList(newTasksList),
          isError: code !== 200,
          messageError: message,
          updateOperationOk: code === 200,
        });
      } else {
        set({
          isError: true,
          messageError: message || "Error update Task List",
        });
      }
    } catch (error) {
      console.error("Error update task list:", error);
      set({
        isError: true,
        messageError: "Error update Task List",
      });
    } finally {
      set({ isLoad: false });
    }
  },
}));
