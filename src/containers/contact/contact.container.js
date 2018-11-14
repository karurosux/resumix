import React from 'react';
import { connect } from 'react-redux';
import BasicLayoutPresentation from '../../presentations/basic-layout/basic-layout.presentation';
import ContactCardPresentation from '../../presentations/contact-card/contact-card.presentation';

const ContactContainer = props => (
  <BasicLayoutPresentation title="Contact" className="contact-container">
    <ContactCardPresentation {...props} />
  </BasicLayoutPresentation>
);

export default connect(
  state => {
    const { email, linkedIn, phone, github } = state.contact;
    const { firstName, lastName } = state.user;
    return {
      email,
      linkedIn,
      phone,
      github,
      fullName: `${firstName} ${lastName}`
    };
  },
  {}
)(ContactContainer);
