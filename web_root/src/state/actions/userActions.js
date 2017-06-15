import dispatcher from "../dispatcher";


export function loginUser(loginformdata) {
  dispatcher.dispatch({
    type: "LOGIN_USER",
    loginformdata,
  });
}

export function setCurrentUser(userInfos) {
  dispatcher.dispatch({
    type: "SET_CURRENT_USER",
    userInfos,
  });
}

export function logoutCurrentUser() {
  dispatcher.dispatch({
    type: "LOGOUT_CURRENT_USER",
  });
}


