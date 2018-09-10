const initialState = {
  isLoggedIn: false,
  uid: null,
  uname: 'User'
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_STATE_CHANGED':
      return {
        ...state,
        isLoggedIn: action.payload.isLogged,
        uid: action.payload.uid,
        uname: action.payload.uname || 'User'
      }
    default:
      return {
        ...state
      }
  }
};

export default userReducer;