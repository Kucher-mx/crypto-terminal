import React from 'react';
import { Link } from 'react-router-dom';

import './logo.styles.css';

const Logo = () => {
  return (
    <Link to="/" className="logo">
      Mercury-terminal
    </Link>
  );
};

export default Logo;
