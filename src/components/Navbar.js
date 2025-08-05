import React, { useState } from 'react';
import { FaBars, FaTimes, FaTrophy, FaHome, FaUser } from 'react-icons/fa';

const Navbar = ({ currentUser, onNavigate, activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (section) => {
    onNavigate(section);
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-800 shadow-sm border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white">Intern Portal</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavClick('dashboard')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activeSection === 'dashboard'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              <FaHome className="h-4 w-4" />
              <span>Dashboard</span>
            </button>
            
            <button
              onClick={() => handleNavClick('leaderboard')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activeSection === 'leaderboard'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              <FaTrophy className="h-4 w-4" />
              <span>Leaderboard</span>
            </button>
          </div>

          {/* User Info */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-gray-300">
              <FaUser className="h-4 w-4" />
              <span>Welcome, {currentUser?.name || 'User'}</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-700">
              <button
                onClick={() => handleNavClick('dashboard')}
                className={`flex items-center space-x-2 w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  activeSection === 'dashboard'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                <FaHome className="h-4 w-4" />
                <span>Dashboard</span>
              </button>
              
              <button
                onClick={() => handleNavClick('leaderboard')}
                className={`flex items-center space-x-2 w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  activeSection === 'leaderboard'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                <FaTrophy className="h-4 w-4" />
                <span>Leaderboard</span>
              </button>
              
              <div className="flex items-center space-x-2 px-3 py-2 text-gray-300">
                <FaUser className="h-4 w-4" />
                <span>Welcome, {currentUser?.name || 'User'}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 