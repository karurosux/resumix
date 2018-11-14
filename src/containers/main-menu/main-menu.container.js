import React from 'react';
import { connect } from 'react-redux';
import ThickDividerPresentation from '../../presentations/thick-divider/thick-divider.presentation';
import FullscreenContentPresentation from '../../presentations/fullscreen-content/fullscreen-content.presentation';
import TitlePresentation from '../../presentations/title/title.presentation';
import MenuPresentation from '../../presentations/menu/menu.presentation';
import BottomMessagePresentation from '../../presentations/bottom-message/bottom-message.presentation';

const MainMenuContainer = props => (
  <FullscreenContentPresentation>
    <TitlePresentation>Main Menu</TitlePresentation>
    <ThickDividerPresentation />
    <MenuPresentation menu={props.menu} />
    <BottomMessagePresentation />
  </FullscreenContentPresentation>
);

export default connect(
  state => ({
    firstName: state.user.firstName,
    menu: state.menu
  }),
  {}
)(MainMenuContainer);
