export const loginStateChanged = (isLogged, uid, uname) => (
  {
    type: 'LOGIN_STATE_CHANGED',
    payload: {
      isLogged,
      uid,
      uname
    }
  }
);