import React from 'react';
import propTypes from 'prop-types';
import { Typography, Card } from '@material-ui/core';
import { AccountBox } from '@material-ui/icons';
import './contact-card.presentation.scss';

const ContactCardPresentation = props => (
  <Card className="contact-card animated flipInY">
    <AccountBox className="card-picture" />
    <Typography variant="display1" className="name-display">
      <b>Full Name: </b>
      {props.fullName}
    </Typography>
    <Typography variant="display1" className="email-display">
      <b>Email: </b>
      <a href={'mailto:' + props.email}>{props.email}</a>
    </Typography>
    <Typography variant="display1" className="phone-display">
      <b>Phone: </b>
      <a href={'tel:' + props.phone}>{props.phone}</a>
    </Typography>
    <Typography variant="display1" className="linkedin-display">
      <b>LinkedIn: </b>
      <a href={'https://' + props.linkedIn} target="_blank">
        {props.linkedIn}
      </a>
    </Typography>
    <Typography variant="display1" className="github-display">
      <b>Github: </b>
      <a href={props.github} target="_blank">
        {props.github}
      </a>
    </Typography>
  </Card>
);

ContactCardPresentation.propTypes = {
  fullName: propTypes.string.required,
  email: propTypes.string.required,
  phone: propTypes.string.required,
  github: propTypes.string.required,
  linkedIn: propTypes.string.required
};

export default ContactCardPresentation;
