

import React from 'react'
import Paper from 'material-ui/Paper';

import * as style from '../../style/styleBoards.jsx'

class CC3admin extends React.Component {

  render () {

    return (
      <Paper zDepth={2} style={Object.assign({}, style.CellBase,style.AdminCell)} >
        <h2>
          I am content of Admin Cell 3
        </h2>
        <h2>
          Admin
        </h2>
      </Paper>
    )
  }

}

export default CC3admin

