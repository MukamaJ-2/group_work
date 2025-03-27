import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { Bell, Briefcase, User, LogOut } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo and main navigation */}
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              JobPortal
            </Link>
            <div className="hidden md:flex space-x-4">
              <Link to="/jobs" className="text-gray-700 hover:text-blue-600">
                Find Jobs
              </Link>
              <Link to="/categories" className="text-gray-700 hover:text-blue-600">
                Categories
              </Link>
              {user?.role === 'employer' && (
                <Link to="/post-job" className="text-gray-700 hover:text-blue-600">
                  Post a Job
                </Link>
              )}
            </div>
          </div>

          {/* User navigation */}
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Link to="/notifications" className="text-gray-600 hover:text-blue-600">
                  <Bell className="h-5 w-5" />
                </Link>
                {user.role === 'jobseeker' ? (
                  <Link to="/saved-jobs" className="text-gray-600 hover:text-blue-600">
                    <Briefcase className="h-5 w-5" />
                  </Link>
                ) : (
                  <Link to="/manage-jobs" className="text-gray-600 hover:text-blue-600">
                    <Briefcase className="h-5 w-5" />
                  </Link>
                )}
                <div className="relative group">
                  <button className="flex items-center space-x-1">
                    <User className="h-5 w-5" />
                    <span className="text-sm">{user.name}</span>
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block">
                    {user.role === 'jobseeker' && (
                      <Link
                        to="/applications"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        My Applications
                      </Link>
                    )}
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-blue-600 hover:text-blue-700"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 