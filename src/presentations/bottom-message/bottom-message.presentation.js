import React from 'react';
import { Typography } from '@material-ui/core';
import { Favorite } from '@material-ui/icons';
import './bottom-message.presentation.scss';

const BottomMessagePresentation = props => (
  <Typography variant="body1" className="bottom-message-presentation">
    Made with <Favorite /> using{' '}
    <a href="https://reactjs.org/" rel="noopener noreferrer" target="_blank">
      React
    </a>{' '}
    and{' '}
    <a href="https://es.redux.js.org/" rel="noopener noreferrer" target="_blank">
      Redux
    </a>{' '}
    by{' '}
    <a href="https://github.com/karurosux" rel="noopener noreferrer" target="_blank">
      Carlos Gonzalez
    </a>
    .
  </Typography>
);

export default BottomMessagePresentation;
