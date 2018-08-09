export const loginStateChanged = (isLogged) => (
  {
    type: 'LOGIN_STATE_CHANGED',
    payload: isLogged
  }
);