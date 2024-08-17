import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/ayaz.jpg';
import navMenus from '../../data/navMenus';

const MobSidebar = () => {
  const [activeFolder, setActiveFolder] = useState(null);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false); // Initially hidden on mobile

  // Function to handle click on folder item
  const handleFolderClick = (index) => {
    setActiveFolder(index === activeFolder ? null : index); // Toggle active folder index
  };

  // Function to handle sidebar toggle button
  const handleSidebarToggle = () => {
    setIsSidebarVisible(!isSidebarVisible); // Toggle sidebar visibility
  };

  // Handle sidebar visibility based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setIsSidebarVisible(true); // Show sidebar on larger screens
      } else {
        setIsSidebarVisible(false); // Hide sidebar on smaller screens
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative">
      {/* Menu Button */}
      <button 
        className={`menu-button ${isSidebarVisible ? 'hidden' : 'block'} fixed top-4 left-4 p-2 bg-gray-800 text-white rounded-md`}
        onClick={handleSidebarToggle}
        aria-label="Open sidebar"
      >
        ☰ {/* Menu icon (hamburger) */}
      </button>

      {/* Close Button */}
      <button 
        className={`close-button ${isSidebarVisible ? 'block' : 'hidden'} fixed top-4 left-4 p-2 bg-gray-800 text-white rounded-md`}
        onClick={handleSidebarToggle}
        aria-label="Close sidebar"
      >
        ✕ {/* Close icon */}
      </button>

      {/* Sidebar Content */}
      <div className={`sidebar-content ${isSidebarVisible ? 'block' : 'hidden'} fixed top-0 left-0 h-full w-64 bg-gray-200 p-4 transition-transform transform`}>
        <div className="broker-content flex items-center space-x-4">
          <img src={img} alt="Logo" className="w-12 h-12" />
          <div>
            <span className="text-gray-700">{navMenus.top.logo.leftText}</span>
            <strong className="block text-gray-900">{navMenus.top.logo.rightText}</strong>
          </div>
        </div>
        <div className="mt-5">
          {navMenus.home.folders.map((folder, folderIndex) => (
            <div key={folderIndex} className={`folder-container ${activeFolder === folderIndex ? 'bg-gray-300' : ''} p-2`}>
              {folder.children && (
                <ul className="m-0 p-0 list-none">
                  {folder.children.map((child, childIndex) => (
                    <li className="py-1" key={childIndex}>
                      <Link 
                        className={`block text-gray-700 hover:text-gray-900 ${activeFolder === folderIndex ? 'font-semibold' : ''}`}
                        to={child.link}
                        onClick={() => handleFolderClick(folderIndex)}
                        aria-current={activeFolder === folderIndex && childIndex === 0 ? 'page' : undefined}
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
      </div>
    </div>
  );
};

export default MobSidebar;
