

import React from 'react'

import * as style from '../style/stylePages.jsx'

class Page1 extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
       data1:'',
       data2:''
    };

  }

  render () {

    return (
      <div style={style.PageBase} >
        <p>
          I am content of page 1 ... bla bla bla bla
          I am content of page 1 ... bla bla bla bla
          I am content of page 1 ... bla bla bla bla
          I am content of page 1 ... bla bla bla bla
          I am content of page 1 ... bla bla bla bla
          I am content of page 1 ... bla bla bla bla
          I am content of page 1 ... bla bla bla bla
          I am content of page 1 ... bla bla bla bla
          I am content of page 1 ... bla bla bla bla
          I am content of page 1 ... bla bla bla bla
          I am content of page 1 ... bla bla bla bla
        </p>
      </div>
    )
  }

}

export default Page1

