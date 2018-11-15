import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import * as icons from '@material-ui/icons';
import propTypes from 'prop-types';
import './big-button.presentation.scss';

const getIcon = iconName => {
  const Icon = icons[iconName];
  return <Icon className="big-button-icon" />;
};

const BigButtonPresentation = props => (
  <Link to={props.route}>
    <Button
      key={props.route}
      variant="outlined"
      className={'big-button small-margin ' + props.className}
    >
      {props.icon ? getIcon(props.icon) : ''}
      {props.text}
    </Button>
  </Link>
);

BigButtonPresentation.propTypes = {
  text: propTypes.string.isRequired,
  route: propTypes.string.isRequired,
  icon: propTypes.string,
  className: propTypes.string
};

BigButtonPresentation.defaultProps = {
  className: 'animated flipInX'
};

export default BigButtonPresentation;
