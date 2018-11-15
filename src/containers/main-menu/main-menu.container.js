import React from 'react';
import { connect } from 'react-redux';
import MenuPresentation from '../../presentations/menu/menu.presentation';
import BasicLayoutPresentation from '../../presentations/basic-layout/basic-layout.presentation';

const MainMenuContainer = props => (
  <BasicLayoutPresentation hideBackButton title="Main Menu">
    <MenuPresentation menu={props.menu} />
  </BasicLayoutPresentation>
);

export default connect(
  state => ({
    firstName: state.user.firstName,
    menu: state.menu
  }),
  {}
)(MainMenuContainer);
