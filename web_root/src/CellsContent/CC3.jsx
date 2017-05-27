

import React from 'react'

import * as style from '../style/styleCells.jsx'

class CC3 extends React.Component {

  render () {

    return (
      <div style={style.CellBase} >
        <h2>
          I am content of Cell 3
        </h2>
        <h2>
          User
        </h2>

          <br/>
          <a href="/contentPage1">Link to page 1</a>

      </div>
    )
  }

}

export default CC3

