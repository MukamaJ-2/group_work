import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Jobs from './pages/Jobs.jsx';
import JobDetails from './pages/JobDetails.jsx';
import FAQ from './pages/FAQ.jsx';
import Pricing from './pages/Pricing.jsx';
import Notifications from './pages/Notifications.jsx';
import SavedJobs from './pages/SavedJobs.jsx';
import PostJob from './pages/PostJob.jsx';
import ManageJobs from './pages/ManageJobs.jsx';
import BrowseCategories from './pages/BrowseCategories.jsx';
import AddResume from './pages/AddResume.jsx';
import Applications from './pages/Applications.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/saved-jobs" element={<SavedJobs />} />
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/manage-jobs" element={<ManageJobs />} />
        <Route path="/categories" element={<BrowseCategories />} />
        <Route path="/add-resume" element={<AddResume />} />
        <Route path="/applications" element={<Applications />} />
      </Routes>
    </div>
  );
}

export default App; 