import React from 'react';
import { connect } from 'react-redux';
import BasicLayoutPresentation from '../../presentations/basic-layout/basic-layout.presentation';
import LanguagesChartPresentation from '../../presentations/languages-chart/languages-chart.presentation';
import ChipsPresentation from '../../presentations/chips/chips.presentation';

class SkillsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollable: false
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ scrollable: true }), 1000);
  }

  render() {
    return (
      <BasicLayoutPresentation title="Skills" scrollable={this.state.scrollable}>
        <LanguagesChartPresentation languages={this.props.languages} />
        <ChipsPresentation title="Technologies" chips={this.props.technologies} />
        <ChipsPresentation title="Favorites" chips={this.props.favorites} />
      </BasicLayoutPresentation>
    );
  }
}

export default connect(
  state => ({
    languages: state.skills.languages,
    technologies: state.skills.technologies,
    favorites: state.skills.favorites
  }),
  {}
)(SkillsContainer);
