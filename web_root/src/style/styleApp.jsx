import {
  cyan500, cyan700,
  pinkA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';




export var App = {

    backgroundColor: '#FFFFFF',
    fontFamily: 'sans-serif',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'normal'

}


export var HeaderContainer = {

    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: '1px',
    marginBottom: 2,
    border: '1px dashed silver'

}

export var BarAboveHeader = {
    backgroundColor: '#0066AA',
    color: '#eeeeee',
    fontSize: 12,
    fontWeight: 'normal',
    textAlign: 'right',
    verticalAlign: 'middle',
    padding: '4px',
}

export var AdminToggle = {
    maxWidth: 250,
    marginBottom: 0,
    marginTop: 0,
    color: '#eeeeee',
    fontSize: 12,
    display: 'inline-block',
    backgroundColor: '#0066AA',
    thumbSwitchedColor:'red',
    trackSwitchedColor:'#ff9d9d'
}

export var CentralContainer = {

    backgroundColor: '#FFFFFF',
    textAlign: 'center',
    padding: '4px 4px 20px 4px',
    marginBottom: 2,
    border: '1px dashed silver'

}


export var FooterContainer = {

    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: '4px',
    marginBottom: 2,
    border: '1px dashed silver'

}

//
//  Override here Material UI theme style for all the App
//
export var MuiStyle = {
    spacing: spacing,
    fontFamily: 'Roboto, sans-serif',
    palette: {                                      // Default values
        primary1Color: cyan500,                     // cyan500
        primary2Color: cyan700,                     // cyan700
        primary3Color: grey400,                     // grey400
        accent1Color: pinkA200,                     // pinkA200
        accent2Color: grey100,                      // grey100
        accent3Color: grey500,                      // grey500
        textColor: darkBlack,                       // darkBlack
        alternateTextColor: white,                  // white
        canvasColor: white,                         // white
        borderColor: grey300,                       // grey300
        disabledColor: fade(darkBlack, 0.3),        // fade(darkBlack, 0.3)
        pickerHeaderColor: cyan500,                 // cyan500
        clockCircleColor: fade(darkBlack, 0.07),    // fade(darkBlack, 0.07)
        shadowColor: fullBlack                      // fullBlack
    }

}

