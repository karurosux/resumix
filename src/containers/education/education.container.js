import React from 'react';
import { connect } from 'react-redux';
import BasicLayoutPresentation from '../../presentations/basic-layout/basic-layout.presentation';
import EducationCardListPresentation from '../../presentations/education-card-list/education-card-list.presentation';

const EducationContainer = props => (
  <BasicLayoutPresentation title="Education">
    <EducationCardListPresentation educations={props.education} />
  </BasicLayoutPresentation>
);

export default connect(
  state => {
    console.log(state);
    return { education: state.education };
  },
  {}
)(EducationContainer);
