import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quote',
      text: 'Quote',
    },
  ];

  return (
    <div className="navbar-component">
      <h1>Math Magicians</h1>
      <nav className="navbar">
        <ul className="navbar-list">
          {links.map((link) => (
            <li key={link.id} className="navbar-list-items">
              <NavLink to={link.path} activeClassName="active-link" exact>
                {link.text}
              </NavLink>
              <span className="pipe-divisor"> | </span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
