import React from 'react';
import Logo from '../Logo';
import './Header.css';

export default () => (
  <header className="header">
    <Logo className="header__logo" />
    <h1 className="headerText">
      Periodic Table
    </h1>
  </header>
);
