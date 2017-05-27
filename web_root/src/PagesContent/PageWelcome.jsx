

import React from 'react'

import * as style from '../style/stylePages.jsx'

import userStore from '../state/stores/userStore.js'


class PageHome extends React.Component {

    constructor(props) {

        super(props);

        this.setCurrentUser = this.setCurrentUser.bind(this);

        // Get initial user from the store
        this.state= {
            user: userStore.getCurrentUser()
        }

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
        if(this.state.is_mounted) {
            this.setState({
                user: userStore.getCurrentUser()
            })
        }
    }


    /////////////////////////////////////////////////////////////////
    // Render component

    render () {
        return (
            <div style={style.PageBase} >
                <div style={{ textAlign: 'center' }} >
                    <h2>Welcome Page</h2>
                    <p>- - - - -</p>
                    <p>- - - - -</p>
                    <p>- - - - -</p>
                    <p>- - - - -</p>
                    <p>- - - - -</p>
                    <p>- - - - -</p>
                    <p>- - - - -</p>
                    <p>- - - - -</p>
                    <p>- - - - -</p>
                    <p>- - - - -</p>
                    <p>- - - - -</p>
                    <p>- - - - -</p>
                    <p>- - - - -</p>
                </div>
            </div>

        )
    }

}

export default PageHome


