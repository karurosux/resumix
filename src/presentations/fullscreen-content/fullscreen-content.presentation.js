import React from 'react';
import propTypes from 'prop-types';
import './fullscreen-content.presentation.scss';

const FullscreenContentPresentation = props => (
  <div className={'fullscreen-container ' + props.className}>
    {props.children}
  </div>
);

FullscreenContentPresentation.propTypes = {
  children: propTypes.node.isRequired,
  className: propTypes.string
};

propTypes.defaultProps = {
  className: ''
};

export default FullscreenContentPresentation;
