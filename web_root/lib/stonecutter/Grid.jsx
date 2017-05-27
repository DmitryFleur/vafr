import React, { Component } from 'react';
import isEqualWith from 'lodash.isequalwith';
import {
  SpringGrid,
  makeResponsive,
  measureItems,
  layout as layouts,
  enterExitStyle as enterExitStyles
} from './index';

export default class extends Component {

  componentWillMount() {
    this.createGrid(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqualWith(nextProps, this.props, (a, b, key) => {
      if (key === 'children') return true;
    })) {
      this.createGrid(nextProps);
    }
  }

  createGrid = ({ measured, responsive }) => {

    let Grid = SpringGrid;

    if (measured) {
      Grid = measureItems(Grid);
    }

    if (responsive) {
      Grid = makeResponsive(Grid, { maxWidth: 1500, minPadding: 100 });
    }

    this.setState({ Grid });
  };

  render() {
    const { children, responsive, layout, enterExitStyle,
      duration, easing, stiffness, damping, gutters, columns,columnWidth, ...rest } = this.props;

    const { Grid } = this.state;
    const gridLayout = layouts[layout];
    const gridEnterExitStyle = enterExitStyles[enterExitStyle];

    return (
      <Grid
        {...rest}
        component="ul"
        columns={!responsive ? columns : null}
        columnWidth={columnWidth}
        gutterWidth={gutters}
        gutterHeight={gutters}
        layout={gridLayout}
        enter={gridEnterExitStyle.enter}
        entered={gridEnterExitStyle.entered}
        exit={gridEnterExitStyle.exit}
        perspective={600}
        duration={null}
        easing={null}
        springConfig={ stiffness && damping ? { stiffness, damping } : null}
        style={{ listStyle: 'none', padding: '0px',  margin: '0 auto'}}
      >
        {children}
      </Grid>
    );
  }

}
