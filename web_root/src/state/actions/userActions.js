import dispatcher from "../dispatcher";



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


