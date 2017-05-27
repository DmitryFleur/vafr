
/////////////////////////////////////////////////////////////////////////////////////////
// Imports

// Modules
import React from 'react'
import ReactDOM from 'react-dom'

// Styling
import * as style from './style/styleApp.jsx'

// Material-UI imports
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

// Components
import Header from './Header.jsx'
import Main from './Main.jsx'
import Footer from './Footer.jsx'

// Data Stores
import userStore from './state/stores/userStore.js'


// Temporary injection needed by material-ui (may not be needed in future react release)
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

/////////////////////////////////////////////////////////////////////////////////////////
// The main application

class App extends React.Component {


    constructor(props, context) {

        super(props, context);

        this.setCurrentUser = this.setCurrentUser.bind(this);

        // Get initial user from the store
        this.state= {
            user: userStore.getCurrentUser()
        }

    };

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


    ////////////////////////////////////////////////////////////////////////////
    // Render the App

    render() {

      // Set material UI theme, settings and styles
      const muiTheme = getMuiTheme(style.MuiStyle);

      //////////////////////////////////////////////////////////
      // The Content Layout to render

        return (

            <MuiThemeProvider muiTheme={ getMuiTheme(muiTheme) }>

                <div style={style.App}>

                    <div style={style.HeaderContainer}>
                        <Header />
                    </div>

                    <div style={style.CentralContainer}>
                          <Main />
                    </div>

                    <div style={style.FooterContainer}>
                        <Footer />
                    </div>

                </div>
            </MuiThemeProvider>

        );

    }

}

export default App


/////////////////////////////////////////////////////////////////////////////////////////
// Render the application

ReactDOM.render( <App />, document.querySelector('#app') )
