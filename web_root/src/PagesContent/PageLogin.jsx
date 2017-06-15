

import React from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'
import $ from 'jquery'

import * as style from '../style/stylePages.jsx'

import userStore from '../state/stores/userStore.js'
import * as userActions from '../state/actions/userActions.js'


class PageLogin extends React.Component {

    constructor(props) {

        super(props);

        this.handleEmailLoginChange = this.handleEmailLoginChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setCurrentUser = this.setCurrentUser.bind(this);

        this.state = {
            loginemailvalue: 'Enter your login name or email',
            Message: '',
            user: userStore.getCurrentUser()
        };

    }

    /////////////////////////////////////////////////////////////////
    // Methods to run code when component mounts.
    // A good place for listeners to the stores
    componentDidMount() {
        userStore.on("change", this.setCurrentUser);
    }

    /////////////////////////////////////////////////////////////////
    // Methods to run code when component unmounts.
    // Remove the store listeners here to avoid memory leak
    // and dangling actions.
    componentWillUnmount() {
        userStore.removeListener("change", this.setCurrentUser);
    }

    /////////////////////////////////////////////////////////////////
    // Component fucntions

    setCurrentUser(){
        this.setState({
            user: userStore.getCurrentUser()
        })
    }

    /////////////////////////////////////////////////////////////////
    // Form events handlers

    handleEmailLoginChange(event) {
        this.setState({loginemailvalue: event.target.value});
        this.setState({actionloginfo:"Login entry changed"});
    }

    handleSubmit(event) {

        event.preventDefault();

        userActions.loginUser( $('form') );

    }

    /////////////////////////////////////////////////////////////////
    // Render component

    render () {
        return (
            <div style={style.PageLogin} >

              <form onSubmit={this.handleSubmit} >

                <h2>Login Page</h2>

                <h4>Server Message: {this.state.Message}</h4>

                <TextField
                  hintText={this.state.loginemailvalue}
                  floatingLabelText="Enter your login name or email"
                  onChange={this.handleEmailLoginChange}
                  type="text"
                  name="login"
                />

                <br />

                <TextField
                  hintText="Password Field"
                  floatingLabelText="Enter your password"
                  type="password"
                  name="pw"
                />

                <br />

                  <div style={{textAlign :'right'}}>
                    <RaisedButton
                        type="submit"
                        label="Login"
                    />
                  </div>

              </form>

            </div>

        )
    }

}

export default PageLogin


