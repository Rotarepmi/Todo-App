import {
  LOAD_LIST,
  ADD_TASK,
  SAVE_TASK,
  REMOVE_TASK,
  CLEAR_TASKS,
  TASK_STATE_CHANGE,
  HANDLE_ON_INPUT
} from '../constants/listActionTypes';

export const loadLocalState = (taskList) => (
  {
    type: LOAD_LIST,
    payload: {
      taskList
    }
  }
);

export const addTask = () => (
  { type: ADD_TASK }
);

export const saveTask = () => (
  { type: SAVE_TASK }
);

export const removeTask = () => (
  { type: REMOVE_TASK }
);

export const clearTasks = () => (
  { type: CLEAR_TASKS }
);

export const taskStateChange = (id) => (
  { 
    type: TASK_STATE_CHANGE,
    payload: {
      id
    }
  }
);

export const handleOnInput = (value) => (
  {
    type: HANDLE_ON_INPUT,
    payload: {
      value
    }
  }
);