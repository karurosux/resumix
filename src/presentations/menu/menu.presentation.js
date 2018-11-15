import React from 'react';
import propTypes from 'prop-types';
import BigButtonPresentation from '../../presentations/big-button/big-button.presentation';
import './menu.presentation.scss';

const MenuPresentation = props => (
  <div className="buttons-container">
    {props.menu.map((buttonRow, rowIndex) => (
      <div key={rowIndex}>
        {buttonRow.map(button => {
          let text =
            typeof button.text === 'function'
              ? button.text(props)
              : button.text;
          return (
            <BigButtonPresentation
              key={button.route}
              text={text}
              icon={button.icon}
              route={button.route}
            />
          );
        })}
      </div>
    ))}
  </div>
);

MenuPresentation.propTypes = {
  menu: propTypes.array.isRequired
};

export default MenuPresentation;
