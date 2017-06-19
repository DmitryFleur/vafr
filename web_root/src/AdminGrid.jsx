
import React from 'react'

import Grid from '../lib/stonecutter/Grid';

// Styles
import * as styles from './style/styleCells.jsx'

// Data Stores
import userStore from './state/stores/userStore.js'
import adminStore from './state/stores/adminStore.js'

import CC1admin from './CellsContent/CC1admin.jsx'
import CC2admin from './CellsContent/CC2admin.jsx'
import CC3admin from './CellsContent/CC3admin.jsx'


class AdminGrid extends React.Component {

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

export default AdminGrid

