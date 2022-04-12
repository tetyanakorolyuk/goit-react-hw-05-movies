import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => (
  <>
  <nav>
    <NavLink to="/" className={s.navLink} style={({ isActive }) => ({ color: isActive ? "black" : "white" })}>
      Home
    </NavLink>
    <NavLink to="/movies" className={s.navLink} style={({ isActive }) => ({ color: isActive ? "black" : "white" })}>
      Movies
    </NavLink>
  </nav>
</>
);

export default Navigation;
