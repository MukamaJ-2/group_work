import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-gray-300">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
              <li><Link to="/pricing" className="hover:text-gray-300">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">For Job Seekers</h3>
            <ul className="space-y-2">
              <li><Link to="/jobs" className="hover:text-gray-300">Browse Jobs</Link></li>
              <li><Link to="/add-resume" className="hover:text-gray-300">Add Resume</Link></li>
              <li><Link to="/saved-jobs" className="hover:text-gray-300">Saved Jobs</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">For Employers</h3>
            <ul className="space-y-2">
              <li><Link to="/post-job" className="hover:text-gray-300">Post a Job</Link></li>
              <li><Link to="/manage-jobs" className="hover:text-gray-300">Manage Jobs</Link></li>
              <li><Link to="/applications" className="hover:text-gray-300">Browse Applications</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Help & Support</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="hover:text-gray-300">FAQ</Link></li>
              <li><Link to="/help" className="hover:text-gray-300">Help Center</Link></li>
              <li><Link to="/contact" className="hover:text-gray-300">Support</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400">© {new Date().getFullYear()} JobPortal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 