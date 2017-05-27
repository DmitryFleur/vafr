
import { EventEmitter } from 'events';
import dispatcher from "../dispatcher";


class AdminStore extends EventEmitter {

    constructor() {

        super()

        this.adminMode=false;

    }


    setAdminMode(adminMode){
        this.adminMode=adminMode;
        this.emit("changeAdminMode");
    }

    getAdminMode(){
        return this.adminMode;
    }

    handleActions(action) {
        switch(action.type) {
            case "SET_ADMIN_MODE": {
                this.setAdminMode(action.newAdminMode);
                break;
            }
        }
    }


}

const adminStore = new AdminStore;


dispatcher.register(adminStore.handleActions.bind(adminStore));

export default adminStore;