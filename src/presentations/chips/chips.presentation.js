import React from 'react';
import propTypes from 'prop-types';
import { Chip, Typography } from '@material-ui/core';
import './chips.presentation.scss';

const ChipsPresentation = props => (
  <div className="chips">
    <Typography variant="h4" className="animated fadeIn">
      {props.title}
    </Typography>
    <div className="chip-container">
      {props.chips.map(tech => (
        <Chip label={tech} key={tech} className="chip animated bounceIn" variant="outlined" />
      ))}
    </div>
  </div>
);

ChipsPresentation.propTypes = {
  title: propTypes.string.isRequired,
  chips: propTypes.array.isRequired
};

export default ChipsPresentation;
