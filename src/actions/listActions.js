import {
  ADD_TASK,
  REMOVE_TASK,
  CLEAR_TASKS,
  TASK_STATE_CHANGE,
} from '../constants/listActionTypes';

export const addTask = (task) => (
  {
    type: ADD_TASK,
    payload: {
      task
    }
  }
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
