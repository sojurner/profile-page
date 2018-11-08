import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

export const NavBar = ({ handleClick }) => {
  const navBars = ['About', 'Projects'];
  const navBar = navBars.map((linkType, index) => {
    return (
      <NavLink
        className="nav-link"
        key={`nav-${index}`}
        name={linkType}
        exact
        to={`/${linkType}`}
      >
        {linkType}
      </NavLink>
    );
  });
  return (
    <nav className="nav-bar">
      <NavLink className="nav-link" name={`Home`} exact to={`/`}>
        Home
      </NavLink>
      {navBar}
    </nav>
  );
};
