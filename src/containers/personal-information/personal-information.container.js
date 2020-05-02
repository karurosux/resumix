import React from 'react';
import {connect} from 'react-redux';
import {Typography} from '@material-ui/core';
import moment from 'moment';
import BasicLayoutPresentation from '../../presentations/basic-layout/basic-layout.presentation';
import './personal-information.container.scss';

const currentDate = moment();

const PersonalInformationContainer = props => (
  <BasicLayoutPresentation title="Personal Information" className="personal-information-container">
    <Typography variant="display1" className="description animated fadeIn">
      I'm {props.fullName} but you can call me <b>{props.nickName}</b>, I'm a{' '}
      <b>{props.currentTitle}</b> and I work as a {props.company.title} but mostly as{' '}
      {props.company.subtitle} at {props.company.company}.
    </Typography>
    <br />
    <Typography variant="display1" className="description animated fadeIn">
      I'm <b>{props.age} years</b> old, I was born in {props.birthDate} at {props.birthPlace} and currently {' '}
      located at {props.currentLocation}. I
      like to {props.hobbies} and code.
    </Typography>
  </BasicLayoutPresentation>
);

export default connect(
  state => ({
    fullName: `${state.user.firstName} ${state.user.lastName}`,
    nickName: state.user.nickName,
    currentTitle: state.user.currentTitle,
    currentLocation: state.user.currentLocation,
    birthPlace: state.user.birthPlace,
    hobbies: state.user.hobbies.join(', '),
    birthDate: moment(state.user.birthDate).format('MMM DD, YYYY'),
    age: currentDate.diff(state.user.birthDate, 'years'),
    company: state.jobHistory.find(j => j.current)
  }),
  {}
)(PersonalInformationContainer);
