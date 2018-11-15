import React from 'react';
import propTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { BarChart, CartesianGrid, XAxis, YAxis, Bar } from 'recharts';
import './languages-chart.presentation.scss';

const getLanguagesForChartData = langs =>
  Object.keys(langs).map(lang => ({ name: lang, value: langs[lang] }));
class LanguagesChartPresentation extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      width: 730,
      height: 250
    };
  }

  updateSize() {
    if (window.innerWidth > 750) {
      this.setState({
        width: 730
      });
    } else {
      this.setState({
        width: window.innerWidth - 16
      });
    }
  }

  componentDidMount() {
    this.updateSize();
    window.addEventListener('resize', this.updateSize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateSize.bind(this));
  }

  render() {
    return (
      <div className="languages-chart">
        <Typography
          variant="h4"
          className="animated fadeIn"
          style={{ padding: '16px', textAlign: 'center' }}
        >
          Languages{' '}
        </Typography>
        <BarChart
          width={this.state.width}
          height={this.state.height}
          data={getLanguagesForChartData(this.props.languages)}
        >
          <CartesianGrid color="white" strokeDasharray="3 3" />
          <XAxis stroke="white" dataKey="name" />
          <YAxis stroke="white" />
          <Bar
            stroke="white"
            strokeWidth={3}
            fillOpacity={0.2}
            animationBegin={true}
            dataKey="value"
            fill="#FFFFFF"
          />
        </BarChart>
      </div>
    );
  }
}

LanguagesChartPresentation.propTypes = {
  languages: propTypes.object.isRequired
};

export default LanguagesChartPresentation;
