import React from 'react';
import propTypes from 'prop-types';
import TitlePresentation from '../../presentations/title/title.presentation';
import FullscreenContainerPresentation from '../../presentations/fullscreen-content/fullscreen-content.presentation';
import ThickDividerPresentation from '../../presentations/thick-divider/thick-divider.presentation';
import BackButtonPresentation from '../../presentations/back-button/back-button.presentation';
import BottomMessagePresentation from '../../presentations/bottom-message/bottom-message.presentation';
import './basic-layout.presentation.scss';

const BasicLayoutPresentation = props => (
  <FullscreenContainerPresentation
    className={'basic-layout ' + props.className}
  >
    <BackButtonPresentation />
    <header className="header">
      <TitlePresentation>{props.title}</TitlePresentation>
      <ThickDividerPresentation />
    </header>
    <main className={'content' + (props.scrollable ? ' scrollable' : '')}>
      {props.children}
    </main>
    <footer className="footer">
      <BottomMessagePresentation />
    </footer>
  </FullscreenContainerPresentation>
);

BasicLayoutPresentation.propTypes = {
  children: propTypes.node.isRequired,
  title: propTypes.string.isRequired,
  className: propTypes.string,
  scrollable: propTypes.bool
};

BasicLayoutPresentation.defaultProps = {
  className: '',
  scrollable: false
};

export default BasicLayoutPresentation;
