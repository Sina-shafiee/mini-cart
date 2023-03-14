import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to='/'>Home</Link>
      <Link style={{ marginLeft: 'auto', display: 'block' }} to='/cart'>
        Cart
      </Link>
    </header>
  );
};

export default Header;
