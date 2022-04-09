import React from 'react';
import Navigation from 'components/Navigation';
import { Outlet } from 'react-router-dom';
import s from './AppBar.module.css';

const AppBar = () => {
  return (
    <>
      <div className={s.header}>
        <Navigation />
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};
export default AppBar;
