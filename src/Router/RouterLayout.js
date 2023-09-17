import React from 'react';
import { Outlet } from 'react-router-dom';

const RouterLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default RouterLayout;
