import React from 'react';
import { connect } from 'react-redux';
import BasicLayoutPresentation from '../../presentations/basic-layout/basic-layout.presentation';
import ProjectCardListPresentation from '../../presentations/project-card-list/project-card-list.presentation';

const ProjectsContainer = class extends React.Component {
  render() {
    return (
      <BasicLayoutPresentation title="Projects" scrollable>
        <ProjectCardListPresentation projects={this.props.projects} />
      </BasicLayoutPresentation>
    );
  }
};

export default connect(
  state => ({ projects: state.projects }),
  {}
)(ProjectsContainer);
