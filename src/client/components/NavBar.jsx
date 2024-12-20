import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    // <div>
    //   <ul>
    //     <Link className='nav-Link' to='/' title='Home Page'>
    //       <li>Home</li>
    //     </Link>
    //     <Link
    //       className='nav-Link'
    //       to='/recipe-builder'
    //       title='Create your own recipe.'
    //     >
    //       <li>Create your recipe</li>
    //     </Link>
    //   </ul>
    // </div>
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Recipe Generator</a>
        <ul className="navbar-nav d-flex flex-row ms-auto">
          <li className="nav-item me-3">
            <Link className="nav-link" to="/" title="Home Page">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/recipe-builder"
              title="Create your own recipe."
            >
              Create your recipe
            </Link>
          </li>
        </ul>
      </div>
    </nav>

  );
};

export default NavBar;
