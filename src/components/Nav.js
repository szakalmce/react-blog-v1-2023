import React from 'react';
import { NavLink } from 'react-router-dom';
import { urls } from '../utils/urls';

const Nav = () => {
  return (
    <ul className="nav-wrapper">
      <div className="center-wrapper">
        <NavLink
          className={({ isActive }) => (isActive ? 'selected' : '')}
          to={urls.home}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'selected' : '')}
          to={urls.about}
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'selected' : '')}
          to={urls.posts}
        >
          Posts
        </NavLink>
      </div>
      <div className="nav-user-wrapper">
        <NavLink
          className={({ isActive }) =>
            isActive ? 'selected signup' : 'signup'
          }
          to={urls.signup}
        >
          SignUp
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'selected' : '')}
          to={urls.login}
        >
          Login
        </NavLink>
      </div>
    </ul>
  );
};

export default Nav;
