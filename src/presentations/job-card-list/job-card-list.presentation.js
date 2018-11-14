import React from 'react';
import propTypes from 'prop-types';
import JobCardPresentation from '../job-card/job-card.presentation';

const getJobCardAnimation = index => {
  const even = index % 2 === 0;
  return even ? 'animated fadeInLeft' : 'animated fadeInRight';
};

const JobCardListPresentation = props => (
  <div className="job-card-list">
    {props.jobHistory.map((job, index) => (
      <JobCardPresentation key={index} job={job} className={getJobCardAnimation(index + 1)} />
    ))}
  </div>
);

JobCardListPresentation.propTypes = {
  jobHistory: propTypes.array.isRequired
};

export default JobCardListPresentation;
