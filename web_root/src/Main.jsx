
// Modules
import React from 'react'
import { Route } from 'react-router-dom'

// Data Stores
import userStore from './state/stores/userStore.js'
import adminStore from './state/stores/adminStore.js'

// Components
import HomeBoard from './DashBoards/Home/HomeBoard.jsx'
import AdminHomeBoard from './DashBoards/AdminHome/AdminHomeBoard.jsx'

import Page1 from './MainContents/Page1.jsx'
import PageWelcome from './MainContents/PageWelcome.jsx'
import PageLogin from './MainContents/PageLogin.jsx'



class Main extends React.Component {

    constructor(props) {

        super(props);

        this.setCurrentUser = this.setCurrentUser.bind(this);
        this.setAdminMode = this.setAdminMode.bind(this);

        // Get initial user info from the store
        this.state= {
            user: userStore.getCurrentUser(),
            adminMode: adminStore.getAdminMode()
        }

    }

    /////////////////////////////////////////////////////////////////
    // Methods to run code when component mounts. A good place
    // for listeners to the stores
    componentDidMount() {
        userStore.on("change", this.setCurrentUser);
        adminStore.on("changeAdminMode", this.setAdminMode);
    }

    /////////////////////////////////////////////////////////////////
    // Methods to run code when component unmounts.
    // Remove the store listeners when here to avoid memory leak
    // and other actions mishandlings.
    componentWillUnmount() {
        userStore.removeListener("change", this.setCurrentUser);
        adminStore.removeListener("changeAdminMode", this.setAdminMode);
    }

    /////////////////////////////////////////////////////////////////
    // Component functions

    setCurrentUser(){
        this.setState({
            user: userStore.getCurrentUser()
        })
    }

    setAdminMode(){
        this.setState({
            adminMode: adminStore.getAdminMode()
        })
    }

    /////////////////////////////////////////////////////////////////
    // Render component

    render () {
        return (
            <div>
                <Route exact path="/" component={this.state.user ? (this.state.adminMode ? AdminHomeBoard : HomeBoard ) : PageWelcome } />
                <Route path="/login" component={PageLogin} />
                <Route path="/contentPage1" component={Page1} />
                <Route path="/welcome" component={PageWelcome} />
            </div>
        )
    }

}

export default Main

