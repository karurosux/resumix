import React from 'react';
import propTypes from 'prop-types';
import { Card, Typography } from '@material-ui/core';
import './project-card.presentation.scss';

const ProjectCardPresentation = props => (
  <Card className="project-card animated fadeIn">
    <Typography variant="h4">{props.project.name}</Typography>
    <Typography variant="caption">
      {props.project.company}, {props.project.year}
    </Typography>
    <Typography variant="body1">{props.project.detail}</Typography>
  </Card>
);

ProjectCardPresentation.propTypes = {
  project: propTypes.object.isRequired
};

export default ProjectCardPresentation;
