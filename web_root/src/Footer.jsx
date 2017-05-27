
// Modules
import React from 'react'

// Data Stores
import userStore from './state/stores/userStore.js'


class Footer extends React.Component {

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
            <div>
                <h1>
                    Footer
                </h1>
            </div>
        )
    }

}

export default Footer

