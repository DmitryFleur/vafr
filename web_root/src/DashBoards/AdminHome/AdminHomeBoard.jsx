
import React from 'react'

import CC1admin from './CC1admin.jsx'
import CC2admin from './CC2admin.jsx'
import CC3admin from './CC3admin.jsx'

// Styles
import * as styles from '../../style/styleBoards.jsx'

// Data Stores
import userStore from '../../state/stores/userStore.js'



class AdminHomeBoard extends React.Component {

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


    render () {

        return (

            <div style={styles.BoardContainer}>

                <div style={styles.CellContainer} ><CC1admin></CC1admin></div>
                <div style={styles.CellContainer} ><CC2admin></CC2admin></div>
                <div style={styles.CellContainer} ><CC3admin></CC3admin></div>

            </div>

        )
    }

}

export default AdminHomeBoard

