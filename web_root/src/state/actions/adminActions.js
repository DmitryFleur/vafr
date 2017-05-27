import dispatcher from "../dispatcher";



export function setAdminMode(newAdminMode) {
  dispatcher.dispatch({
    type: "SET_ADMIN_MODE",
    newAdminMode,
  });
}


