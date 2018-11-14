import React from 'react';
import propTypes from 'prop-types';
import { Card, Typography } from '@material-ui/core';
import './education-card.presentation.scss';

const EducationCardPresentation = props => (
  <Card className="education-card animated fadeIn">
    <Typography variant="h4">{props.education.title}</Typography>
    <Typography variant="caption">{props.education.place}</Typography>
    {props.education.achievements.length > 0 ? (
      <div>
        <br />
        <Typography variant="h4">Achievements</Typography>
        {props.education.achievements.map((a, index) => (
          <Typography variant="caption">
            {index + 1}. {a}
          </Typography>
        ))}
      </div>
    ) : (
      ''
    )}
    {props.education.website ? (
      <Typography className="visit-link">
        <a href={props.education.website} target="_blank">
          Visit Website
        </a>
      </Typography>
    ) : (
      ''
    )}
  </Card>
);

EducationCardPresentation.propTypes = {
  education: propTypes.object.isRequired
};

export default EducationCardPresentation;
