
// Modules
import React from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

// Material-UI imports
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import Toggle from 'material-ui/Toggle';

// Styling
import * as style from './style/styleApp.jsx'

// Data Stores
import userStore from './state/stores/userStore.js'
import * as userActions from './state/actions/userActions.js'
import adminStore from './state/stores/adminStore.js'
import * as adminActions from './state/actions/adminActions.js'


class Header extends React.Component {

    constructor(props) {

        super(props);

        this.setCurrentUser = this.setCurrentUser.bind(this);
        this.logoutUser = this.logoutUser.bind(this);
        this.setAdminMode = this.setAdminMode.bind(this);
        this.toggleAdminMode = this.toggleAdminMode.bind(this);

        // Get initial user from the store
        this.state= {
            user: userStore.getCurrentUser(),
            adminMode: adminStore.getAdminMode()
        }

        this.adminModeChangedRedirect=false;

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
            user: userStore.getCurrentUser(),
        })
    }

    setAdminMode(){
        this.setState({
            adminMode: adminStore.getAdminMode()
        })
    }

    logoutUser(event){
        userActions.logoutCurrentUser();
    }

    toggleAdminMode(){
        this.adminModeChangedRedirect=true;
        adminActions.setAdminMode(!this.state.adminMode);
    }

    /////////////////////////////////////////////////////////////////
    // Render component

    render () {

        // If admin mode have changed redirect to home
        if(this.adminModeChangedRedirect){
            this.adminModeChangedRedirect=false;
            return <Redirect to='/' />
        }

        var AdminToggleWidget = (
            <Toggle style={style.AdminToggle}
                    labelStyle={style.AdminToggle}
                    onToggle={this.toggleAdminMode}
                    defaultToggled={this.state.adminMode}
                    label={this.state.adminMode ? 'Admin mode' : 'User mode'}
                    labelPosition="left"
                    thumbSwitchedStyle={{backgroundColor:style.AdminToggle.thumbSwitchedColor}}
                    trackSwitchedStyle={{backgroundColor:style.AdminToggle.trackSwitchedColor}}
            />
        )

        return (
            <div>

                <div  style={style.BarAboveHeader}>
                    { this.state.user ? (this.state.user['is_admin'] ? AdminToggleWidget : '') : ''}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span>{ this.state.user ? 'Bienvenue '+this.state.user['first_name']+' '+this.state.user['family_name'] : 'Not logged In' }</span>
                </div>

                <AppBar
                iconElementLeft={
                    <span> <Link to="/" >Logo</Link> </span>
                }
                title="Title"
                iconElementRight={
                    <span>
                      <IconMenu
                        iconButtonElement={
                          <IconButton><NavigationMenu /></IconButton>
                        }
                        targetOrigin={{horizontal: 'right', vertical: 'top'}}
                        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                      >

                        <MenuItem primaryText="Login" containerElement={<Link to="/login" />} />
                        <Divider />
                        <MenuItem primaryText="Help" />
                        <MenuItem primaryText="Welcome Page" containerElement={<Link to="/welcome" />} />
                        <MenuItem primaryText="Sign out" onClick={this.logoutUser} />

                      </IconMenu>
                    </span>
                }
                />
            </div>

        )
    }

}

export default Header

