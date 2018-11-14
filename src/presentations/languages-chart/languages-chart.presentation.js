import React from 'react';
import propTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { BarChart, CartesianGrid, XAxis, YAxis, Bar } from 'recharts';

const getLanguagesForChartData = langs =>
  Object.keys(langs).map(lang => ({ name: lang, value: langs[lang] }));

const LanguagesChartPresentation = props => (
  <div className="languages-chart">
    <Typography
      variant="h4"
      className="animated fadeIn"
      style={{ padding: '16px', textAlign: 'center' }}
    >
      Languages{' '}
    </Typography>
    <BarChart width={730} height={250} data={getLanguagesForChartData(props.languages)}>
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

LanguagesChartPresentation.propTypes = {
  languages: propTypes.object.isRequired
};

export default LanguagesChartPresentation;
