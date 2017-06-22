

import React from 'react'
import Paper from 'material-ui/Paper';

import * as style from '../../style/styleBoards.jsx'

class CC3 extends React.Component {

  render () {

    return (
      <Paper zDepth={2} style={style.CellBase} >
        <h2>
          I am content of Cell 3
        </h2>
        <h2>
          User
        </h2>

          <br/>
          <a href="/contentPage1">Link to page 1</a>

      </Paper>
    )
  }

}

export default CC3

