import React from 'react';
import { Typography } from '@material-ui/core';
import propTypes from 'prop-types';

const TitlePresentation = props => (
  <Typography variant="h3" className="animated slideInDown">
    {props.children}
  </Typography>
);

TitlePresentation.propTypes = {
  children: propTypes.string.isRequired
};

export default TitlePresentation;