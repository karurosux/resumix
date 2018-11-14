import React from 'react';
import propTypes from 'prop-types';
import ProjectCardPresentation from '../project-card/project-card.presentation';
import './project-card-list.presentation.scss';

const ProjectCardListPresentation = props => {
  return (
    <div className="project-card-list">
      {props.projects.map(project => (
        <ProjectCardPresentation project={project} />
      ))}
    </div>
  );
};

ProjectCardListPresentation.propTypes = {
  projects: propTypes.array.isRequired
};

export default ProjectCardListPresentation;
