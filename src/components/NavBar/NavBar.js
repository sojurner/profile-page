import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.css';

export const NavBar = ({ handleHover }) => {
  const navBars = ['Contact', 'About', 'Projects'];
  const navBar = navBars.map(linkType => {
    return (
      <NavLink className="nav-link" name={linkType} exact to={`/${linkType}`}>
        {linkType}
      </NavLink>
    );
  });
  return <nav className="nav-bar">{navBar}</nav>;
};
