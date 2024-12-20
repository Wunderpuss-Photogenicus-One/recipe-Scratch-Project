import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <ul>
        <Link className='nav-Link' to='/' title='Home Page'>
          <li>Home</li>
        </Link>
        <Link
          className='nav-Link'
          to='/recipe-builder'
          title='Create your own recipe.'
        >
          <li>Create your recipe</li>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;


