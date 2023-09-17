import React from 'react';

const Layout = ({ title, children }) => {
  return (
    <div className='container py-5'>
      <div className='row'>
        <div className='col-8 offset-2'>
          <h1 className='text-centar mb-5'>{title}</h1>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
