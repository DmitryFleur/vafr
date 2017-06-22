
import React from 'react'

import Grid from '../../../lib/stonecutter/Grid';

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

        var gridP = styles.stoneCutterGridProps;

        // Get initial user info from the store
        this.state= {
            gridP: gridP,
            user: userStore.getCurrentUser(),
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

        const { ...gridProps } = this.state.gridP;

        return (

            <div>
                <Grid measured={true} {...gridProps} >

                  <li style={styles.CellContainer} ><CC1admin></CC1admin></li>

                  <li style={styles.CellContainer} ><CC2admin></CC2admin></li>

                  <li style={styles.CellContainer} ><CC3admin></CC3admin></li>

                </Grid>
            </div>

        )
    }

}

export default AdminHomeBoard

