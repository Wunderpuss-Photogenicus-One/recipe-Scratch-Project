import React from 'react';
import { Link } from 'react-router-dom';

// const NavBar = () => {
//   return (
//     <div>
//       <ul>
//         <Link className='nav-Link' to='/' title='Home Page'>
//           <li>Home</li>
//         </Link>
//         <Link
//           className='nav-Link'
//           to='/recipe-builder'
//           title='Create your own recipe.'
//         >
//           <li>Create your recipe</li>
//         </Link>
//       </ul>
//     </div>
//   );
// };

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">Recipe Creator</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Using Link for routing instead of <a> */}
            <li className="nav-item">
              <Link className="nav-link" to="/" title="Home Page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/recipe-builder"
                title="Create your own recipe"
              >
                Create your recipe
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ai-suggestions" title="AI Suggestions">
                Ai Suggestions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



