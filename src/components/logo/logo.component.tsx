import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as LogoIcon } from './assets/logo.svg';

import './logo.styles.css';

const Logo = () => {
  return (
    <Link to="/" className="logo">
      <div className="logo-wrapper">
        <LogoIcon />
        Mercury-terminal
      </div>
      {/* <div className="logo-image-wrapper">
        <img src="'./assets/logo.png" />
      </div> */}
    </Link>
  );
};

export default Logo;
