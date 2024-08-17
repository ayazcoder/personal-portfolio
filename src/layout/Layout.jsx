import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';

function Layout() {
  return (
    <div className="flex flex-grow-1">
      <div className="lg:w-1/4 ">
        <Sidebar />
      </div>
      <div className="lg:w-3/4 flex-grow-1 px-6 bg-[#EFFBF8]">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
