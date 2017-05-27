import React from 'react';
import pinterest from '../layouts/pinterest';
import * as simpleEnterExit from '../enter-exit-styles/simple';

import PropTypes from 'prop-types';

export const commonPropTypes = {
  columns: PropTypes.number.isRequired,
  columnWidth: PropTypes.number.isRequired,
  gutterWidth: PropTypes.number,
  gutterHeight: PropTypes.number,
  component: PropTypes.string,
  layout: PropTypes.func,
  enter: PropTypes.func,
  entered: PropTypes.func,
  exit: PropTypes.func,
  perspective: PropTypes.number,
  lengthUnit: PropTypes.string,
  angleUnit: PropTypes.string
};

export const commonDefaultProps = {
  lengthUnit: 'px',
  angleUnit: 'deg',
  component: 'div',
  gutterWidth: 0,
  gutterHeight: 0,
  layout: pinterest,
  enter: simpleEnterExit.enter,
  entered: simpleEnterExit.entered,
  exit: simpleEnterExit.exit
};
