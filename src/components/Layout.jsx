import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from './AppBar';
import logo from 'images/logo.png';

export const Layout = () => {
  return (
    <div
      style={{
        margin: '100px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <AppBar />
      <Suspense fallback={null}>
        <div
          style={{
            width: '400px',
            backgroundColor: '#e6e6fa',
            padding: '40px',
            position: 'relative',
          }}
        >
          <img
            src={logo}
            alt=""
            width="50"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          />
          <Outlet />
        </div>
      </Suspense>
    </div>
  );
};
