import {
  ADD_TASK,
  REMOVE_TASK,
  CLEAR_TASKS,
  TASK_STATE_CHANGE,
} from '../constants/listActionTypes';

const initialState = {
  taskList: [
    {
      task: 'test',
      complete: true,
      id: 1
    },
    {
      task: 'test2',
      complete: false,
      id: 2
    }
  ]
};

let todoCounter = 3;

const listReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TASK:
      return {
        ...state,
        taskList: [...state.taskList, {task: action.payload.task, complete: false, id: todoCounter++}]
      };
    case REMOVE_TASK:
      return {
        ...state,
        taskList: [...state.taskList.slice(0, state.taskList.length -1)]
      };
    case CLEAR_TASKS:
      return {
        ...state,
        taskList: []
      };
    case TASK_STATE_CHANGE:
      const updatedList = state.taskList.map(obj => {
        if(obj.id === action.payload.id) {
          return {...obj, complete: !obj.complete}
        }
        return obj;
      });
      return {
        ...state,
        taskList: updatedList
      };
    default:
      return {
        ...state
      };
  }
};

export default listReducer;
