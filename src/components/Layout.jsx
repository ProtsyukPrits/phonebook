import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from './AppBar';

export const Layout = () => {
  return (
    <div style={{ maxWidth: '760px', margin: '100px', display: 'flex', justifyContent: 'center', position:'relative' }}>
      <AppBar />
      <Suspense fallback={null}>
        <div
          style={{
            width: '400px',
            backgroundColor: '#e6e6fa',
            padding: '40px',
          }}
        >
          <Outlet />
        </div>
      </Suspense>
    </div>
  );
};
