
import React from 'react'

import Grid from '../lib/stonecutter/Grid';
import { easings } from '../lib/stonecutter/index';

// Data Stores
import userStore from './state/stores/userStore.js'
import adminStore from './state/stores/adminStore.js'

import CC1 from './CellsContent/CC1.jsx'
import CC2 from './CellsContent/CC2.jsx'
import CC3 from './CellsContent/CC3.jsx'
import CC4 from './CellsContent/CC4.jsx'
import CC5 from './CellsContent/CC5.jsx'
import CC1admin from './CellsContent/CC1admin.jsx'
import CC2admin from './CellsContent/CC2admin.jsx'
import CC3admin from './CellsContent/CC3admin.jsx'


class MainGrid extends React.Component {

    constructor(props) {

        super(props);

        this.setCurrentUser = this.setCurrentUser.bind(this);
        this.setAdminMode = this.setAdminMode.bind(this);

        var gridP = {
          responsive: true,
          layout: 'pinterest',
          enterExitStyle: 'simple',
          duration: 120,
          stiffness: 100,
          damping: 18,
          columns: 5,
          gutters: 10,
          columnWidth:265,
          easing: easings.cubicOut
        };

        // Get initial user info from the store
        this.state= {
            gridP: gridP,
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


    render () {

        const { ...gridProps } = this.state.gridP;

        return (

            <div>
                <Grid measured={true} {...gridProps} >

                  <li><CC1></CC1></li>

                  <li><CC2></CC2></li>

                  {this.state.adminMode ? (<li><CC1admin></CC1admin></li>) : (<li><CC3></CC3></li>) }

                  {this.state.adminMode ? (<li><CC2admin></CC2admin></li>) : (<li><CC4></CC4></li>) }

                  {this.state.adminMode ? (<li><CC1admin></CC1admin></li>) : (null) }

                  <li><CC5></CC5></li>


                </Grid>
            </div>

        )
    }

}

export default MainGrid

