

import React from 'react'

import * as style from '../style/styleCells.jsx'


// Data Stores
import userStore from '../state/stores/userStore.js'


class CC1 extends React.Component {

    constructor(props) {

        super(props);

        this.setCurrentUser = this.setCurrentUser.bind(this);

        // Get initial user from the store
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

    render () {

        return (
          <div style={Object.assign({}, style.CellBase,style.CC1)} >

            <p>
              User information
            </p>
            <ul>Login: {this.state.user['login']} </ul>
            <ul>First name: {this.state.user['first_name']} </ul>
            <ul>Family name: {this.state.user['family_name']} </ul>
            <ul>Email: {this.state.user['email']} </ul>

          </div>
        )
    }

}

export default CC1

