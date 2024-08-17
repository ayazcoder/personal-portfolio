import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import LOGO from '../../assets/ayaz1.png';
import MobSidebar from '../mobSidebar/MobSiebar';
import navMenus from '../../data/navMenus';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Sidebar = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation(); // Get current location
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile) {
    return <MobSidebar />;
  }

  return (
    <div className="w-full border-r-[1px]">
      <div className="w-full h-screen bg-white relative -top-5 flex flex-col items-center justify-between">
        <div className="flex flex-col items-center p-4">
          <img src={LOGO} alt="Logo" className="w-[80px] h-[80px] rounded-full mt-5"/>
          <span className="relative italic text-[60px] font-bold font-kristi leading-none text-[rgba(19,15,73,0.07)] block">
            {navMenus.top.logo.leftText}

            <span className="absolute top-1/2 left-1/2 w-full transform -translate-x-1/2 font-inter -translate-y-1/2 z-[1] font-bold text-[22px] text-center text-dark mt-1">
              {navMenus.top.logo.leftText}
            </span>
          </span>
        </div>
        <div className="">
          {navMenus.home.folders.map((folder, folderIndex) => (
            <div key={folderIndex} className="p-2">
              {folder.children && (
                <ul className="m-0 p-0 list-none">
                  {folder.children.map((child, childIndex) => (
                    <li key={childIndex} className="py-1 text-center">
                      <Link
                        className={`block text-gray-700 ${
                          location.pathname === child.link ? 'text-[#a5a6ff] font-bold' : 'text-main'
                        } hover:text-blue font-medium`}
                        to={child.link}
                      >
                        {child.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div className="copyright flex flex-col items-center w-full">
          <div className="social w-full flex justify-center mb-[7px]">
            <ul className="flex space-x-3">
              <li>
                <a
                  className="w-[30px] h-[30px] inline-flex items-center justify-center rounded-full bg-[rgba(19,15,73,0.07)] text-dark transition-all"
                  href="#"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="text-[16px]" />
                </a>
              </li>
              <li>
                <a
                  className="w-[30px] h-[30px] inline-flex items-center justify-center rounded-full bg-[rgba(19,15,73,0.07)] text-dark transition-all"
                  href="#"
                  aria-label="Twitter"
                >
                  <FaTwitter className="text-[16px]" />
                </a>
              </li>
              <li>
                <a
                  className="w-[30px] h-[30px] inline-flex items-center justify-center rounded-full bg-[rgba(19,15,73,0.07)] text-dark transition-all"
                  href="#"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn className="text-[16px]" />
                </a>
              </li>
            </ul>
          </div>

          <div className="text-sm py-2 text-center text-main">
            <p>
              Copyright © {currentYear} Ayaz Khan
              <br />
              <span>All rights reserved.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
