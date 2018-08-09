const initialState = {
  isLoggedIn: false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_STATE_CHANGED':
      return {
        ...state,
        isLoggedIn: action.payload
      }
    default:
      return {
        ...state
      }
  }
};

export default userReducer;