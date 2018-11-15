import React from 'react';
import propTypes from 'prop-types';
import moment from 'moment';
import { Card, Typography } from '@material-ui/core';

const JobCardPresentation = props => (
  <Card
    className={'information-card' + (props.job.current ? ' current' : '') + ' ' + props.className}
  >
    <Typography variant="h4">{props.job.company}</Typography>
    <Typography variant="caption">
      {moment(props.job.startDate).format('MMM YYYY') +
        ' - ' +
        (props.job.endDate ? moment(props.job.endDate).format('MMM YYYY') : 'Today')}{' '}
      - <span style={{ color: 'white' }}>{props.job.title}</span>
    </Typography>
    <Typography className="visit-link" variant="body2">
      <a target="_blank" rel="" href={props.job.website}>
        Visit Website
      </a>
    </Typography>
  </Card>
);

JobCardPresentation.propTypes = {
  job: propTypes.object.isRequired
};

JobCardPresentation.defaultProps = {
  className: ''
};

export default JobCardPresentation;
