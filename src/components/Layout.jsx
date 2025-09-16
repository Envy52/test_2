import React from 'react';
import { Outlet } from 'react-router-dom'; 
import Header from './Header';
import NavPanel from './NavPanel';
import Footer from './Footer';

const Layout = () => {
  return (
    <div>
      <Header />
      <NavPanel />
      
      <main>
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;