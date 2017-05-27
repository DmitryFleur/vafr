

import React from 'react'

import * as style from '../style/styleCells.jsx'

class CC2admin extends React.Component {

  render () {

    return (
      <div style={Object.assign({}, style.CellBase,style.AdminCell)} >
        <h2>
          I am content of Admin Cell 2
        </h2>
        <h2>
          Admin
        </h2>
      </div>
    )
  }

}

export default CC2admin

