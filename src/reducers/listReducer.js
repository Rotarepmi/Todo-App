import {
  LOAD_LIST,
  ADD_TASK,
  CLOSE_TASK_EDITOR,
  SAVE_TASK,
  REMOVE_TASK,
  CLEAR_TASKS,
  TASK_STATE_CHANGE,
  HANDLE_ON_INPUT
} from '../constants/listActionTypes';

const initialState = {
  addTask: false,
  taskList: [],
  modalVisible: false,
  inputValue: ''
};

const listReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOAD_LIST:
      return {
        ...state,
        taskList: action.payload.taskList
      }
    case ADD_TASK:
      return {
        ...state,
        addTask: true
      };
    case CLOSE_TASK_EDITOR:
      return {
        ...state,
        addTask: false
      };
    case SAVE_TASK:
      return {
        ...state,
        taskList: [...state.taskList, {task: state.inputValue, complete: false, id: Date.now()}],
        inputValue: '',
        addTask: false
      };
    case REMOVE_TASK:
      return {
        ...state,
        taskList: [...state.taskList.filter(task => !task.complete)]
      };
    case CLEAR_TASKS:
      return {
        ...state,
        taskList: []
      };
    case TASK_STATE_CHANGE:
      // reverse the selected tasks state
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
    case HANDLE_ON_INPUT:
      return {
        ...state,
        inputValue: action.payload.value
      };
    default:
      return {
        ...state
      };
  }
};

export default listReducer;
