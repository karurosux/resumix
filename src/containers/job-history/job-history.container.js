import React from 'react';
import { connect } from 'react-redux';
import BasicLayoutPresentation from '../../presentations/basic-layout/basic-layout.presentation';
import JobCardListPresentation from '../../presentations/job-card-list/job-card-list.presentation';

const JobHistoryContainer = props => (
  <BasicLayoutPresentation title="Job History">
    <JobCardListPresentation jobHistory={props.jobHistory} />
  </BasicLayoutPresentation>
);

export default connect(
  state => ({ jobHistory: [...state.jobHistory].reverse() }),
  {}
)(JobHistoryContainer);
