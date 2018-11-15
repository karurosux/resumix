import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { PictureAsPdf } from '@material-ui/icons';
import { connect } from 'react-redux';
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
      <Typography variant="body1" className="animated fadeIn">
        The project is not completed yet due to limitation of time, responsive, unit testing and
        other cool features waiting on the queue.
      </Typography>
      <Button
        variant="outlined"
        target="_blank"
        href={window.location.origin + '/assets/cv.pdf'}
        className="pdf-button animated flipInX"
      >
        <PictureAsPdf className="pdf-icon" />
        View PDF
      </Button>
    </div>
  </BasicLayoutPresentation>
);

export default connect(
  state => ({}),
  {}
)(AboutContainer);
