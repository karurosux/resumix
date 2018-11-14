import React from 'react';
import propTypes from 'prop-types';
import EducationCardPresentation from '../education-card/education-card.presentation';
import './education-card-list.presentation.scss';

const EducationCardListPresentation = props => {
  return (
    <div className="education-card-list">
      {props.educations.map(education => (
        <EducationCardPresentation education={education} />
      ))}
    </div>
  );
};

EducationCardListPresentation.propTypes = {
  educations: propTypes.array.isRequired
};

export default EducationCardListPresentation;
