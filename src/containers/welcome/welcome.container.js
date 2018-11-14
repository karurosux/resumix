import React from 'react';
import { Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import './welcome.container.scss';
import BigButtonPresentation from '../../presentations/big-button/big-button.presentation';
import FullscreenContentPresentation from '../../presentations/fullscreen-content/fullscreen-content.presentation';

class WelcomeContainer extends React.Component {
  render() {
    const { firstName, lastName } = this.props.user;
    return (
      <FullscreenContentPresentation>
        <Typography variant="h2" className="welcome-title animated fast bounceInUp">
          Welcome to the CV of {firstName} {lastName}!
        </Typography>
        <BigButtonPresentation className="animated bounceInUp" text="Continue" route="/main-menu" />
      </FullscreenContentPresentation>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  {}
)(WelcomeContainer);
