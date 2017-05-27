
// Modules
import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

// Data Stores
import userStore from './state/stores/userStore.js'

// Components
import MainGrid from './MainGrid.jsx'

import Page1 from './PagesContent/Page1.jsx'
import PageWelcome from './PagesContent/PageWelcome.jsx'
import PageLogin from './PagesContent/PageLogin.jsx'



class Main extends React.Component {

    constructor(props) {

        super(props);

        this.setCurrentUser = this.setCurrentUser.bind(this);

        // Get initial user info from the store
        this.state= {
            user: userStore.getCurrentUser()
        }

    }

    /////////////////////////////////////////////////////////////////
    // Methods to run code when component mounts. A good place
    // for listeners to the stores
    componentDidMount() {
        userStore.on("change", this.setCurrentUser);
    }

    /////////////////////////////////////////////////////////////////
    // Methods to run code when component unmounts.
    // Remove the store listeners when here to avoid memory leak
    // and other actions mishandlings.
    componentWillUnmount() {
        userStore.removeListener("change", this.setCurrentUser);
    }

    /////////////////////////////////////////////////////////////////
    // Component functions

    setCurrentUser(){
        this.setState({
            user: userStore.getCurrentUser()
        })
    }

    /////////////////////////////////////////////////////////////////
    // Render component

    render () {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={this.state.user ? MainGrid : PageWelcome} />
                    <Route path="/login" component={PageLogin} />
                    <Route path="/contentPage1" component={Page1} />
                    <Route path="/welcome" component={PageWelcome} />
                </div>
            </Router>
        )
    }

}

export default Main

