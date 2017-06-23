
import React from 'react'


import CC1 from './CC1.jsx'
import CC2 from './CC2.jsx'
import CC3 from './CC3.jsx'
import CC4 from './CC4.jsx'
import CC5 from './CC5.jsx'

// Styles
import * as styles from '../../style/styleBoards.jsx'

// Data Stores
import userStore from '../../state/stores/userStore.js'
import adminStore from '../../state/stores/adminStore.js'



class HomeBoard extends React.Component {

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

                <div style={styles.CellContainer} ><CC1></CC1></div>
                <div style={styles.CellContainer} ><CC2></CC2></div>
                <div style={styles.CellContainer} ><CC3></CC3></div>
                <div style={styles.CellContainer} ><CC4></CC4></div>
                <div style={styles.CellContainer} ><CC5></CC5></div>

            </div>

        )
    }

}

export default HomeBoard

