

import React from 'react'
import Paper from 'material-ui/Paper';

import * as style from '../../style/styleBoards.jsx'

class CC5 extends React.Component {

  render () {

    return (
      <Paper zDepth={2} style={style.CellBase} >
        <h2>
          I am content of Cell 5
        </h2>
        <h2>
          User
        </h2>
      </Paper>
    )
  }

}

export default CC5

