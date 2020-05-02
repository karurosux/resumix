import React from 'react';
import {Typography} from '@material-ui/core';
import {connect} from 'react-redux';
import BasicLayoutPresentation from '../../presentations/basic-layout/basic-layout.presentation';
import packageJson from '../../../package.json';
import './about.container.scss';

const AboutContainer = props => (
  <BasicLayoutPresentation title="About" className="about-container">
    <div className="about">
      <Typography variant="display1" className="animated fadeIn">
        <b>Version: </b>
        {packageJson.version}
      </Typography>
      <Typography variant="display1" className="animated fadeIn">
        <b>Source: </b>
        <a href="https://github.com/karurosux/resumix" rel="noopener noreferrer" target="_blank">
          github.com/karurosux/resumix
        </a>
      </Typography>
    </div>
  </BasicLayoutPresentation>
);

export default connect(
  state => ({}),
  {}
)(AboutContainer);
