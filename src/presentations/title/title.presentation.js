import React from 'react';
import { Typography } from '@material-ui/core';
import propTypes from 'prop-types';
import './title.presentation.scss';

const TitlePresentation = props => (
  <Typography variant="h3" className="animated slideInDown" style={{ textAlign: 'center' }}>
    {props.children}
  </Typography>
);

TitlePresentation.propTypes = {
  children: propTypes.string.isRequired
};

export default TitlePresentation;
