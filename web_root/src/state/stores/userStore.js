
import { EventEmitter } from 'events';
import dispatcher from "../dispatcher";
import $ from 'jquery';

import Cookies from 'universal-cookie';

class UserStore extends EventEmitter {

    constructor() {

        super()

        this.setCurrentUser = this.setCurrentUser.bind(this);
        this.logoutCurrentUser = this.logoutCurrentUser.bind(this);

        const cookies = new Cookies();

        // Check if the user has an open session
        // Fetch the user infos and put in the userStore
        if(cookies.get('id')) {

            $.ajax({
                url: '1/api/getcurrentuser',
                data: '',
                type: 'GET',
                success: function (data) {
                    if (data["body"]["user"]) {
                        this.setCurrentUser(data["body"]["user"]);
                    }
                    else {
                        this.setCurrentUser(null);
                    }
                }.bind(this),
                error: function (xhr, status, err) {
                    console.error(this.props.url, status, err.toString());
                }.bind(this)
            });

        }
        else{
            this.currentUser=null;
        }

    }

    setCurrentUser(user){
        this.currentUser= user;
        this.emit("change");
    }

    getCurrentUser(){
        return this.currentUser;
    }

    logoutCurrentUser(user){
        $.ajax({
            url: '1/api/logoutcurrentuser',
            data: '',
            type: 'GET',
            success: function (data) {
                if (data["body"]["response"]=="success") {
                    window.location.href="/";
                }
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }



    handleActions(action) {
        switch(action.type) {
            case "SET_CURRENT_USER": {
                this.setCurrentUser(action.userInfos);
                break;
            }
            case "LOGOUT_CURRENT_USER": {
                this.logoutCurrentUser();
                break;
            }
        }
    }


}

const userStore = new UserStore;


dispatcher.register(userStore.handleActions.bind(userStore));

export default userStore;