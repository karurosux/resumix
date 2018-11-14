import React from 'react';
import { IconButton } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import './back-button.presentation.scss';

const BackButtonPresentation = props => (
  <Link className="back-button" to="/main-menu">
    <IconButton>
      <ArrowBack />
    </IconButton>
  </Link>
);

export default BackButtonPresentation;
