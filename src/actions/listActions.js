import {
  LOAD_LIST,
  ADD_TASK,
  REMOVE_TASK,
  CLEAR_TASKS,
  TASK_STATE_CHANGE,
  OPEN_MODAL,
  CLOSE_MODAL,
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

export const openModal = () => (
  { type: OPEN_MODAL}
);

export const closeModal = () => (
  { type: CLOSE_MODAL}
);

export const handleOnInput = (value) => (
  {
    type: HANDLE_ON_INPUT,
    payload: {
      value
    }
  }
);