
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

const Main = () => {
    return (
        <>
          <Navbar/>
          <div className='min-h-screen'>
          <Outlet />
          </div>
            <Footer />
        </>
    );
};

export default Main;
