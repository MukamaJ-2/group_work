import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Layout from './components/Layout.js';
import Home from './pages/Home.js';
import Jobs from './pages/Jobs.js';
import JobDetails from './pages/JobDetails.js';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import Dashboard from './pages/Dashboard.js';
import Profile from './pages/Profile.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Help from './pages/Help.js';
import Pricing from './pages/Pricing.js';
import FAQ from './pages/FAQ.js';
import Notifications from './pages/Notifications.js';
import SavedJobs from './pages/SavedJobs.js';
import PostJob from './pages/PostJob.js';
import ManageJobs from './pages/ManageJobs.js';
import Applications from './pages/Applications.js';
import BrowseCategories from './pages/BrowseCategories.js';
import AddResume from './pages/AddResume.js';
import { AuthProvider } from './context/AuthContext.js';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="jobs" element={<Jobs />} />
              <Route path="jobs/:id" element={<JobDetails />} />
              <Route path="post-job" element={<PostJob />} />
              <Route path="profile" element={<Profile />} />
              <Route path="saved-jobs" element={<SavedJobs />} />
              <Route path="applications" element={<Applications />} />
              <Route path="manage-jobs" element={<ManageJobs />} />
              <Route path="add-resume" element={<AddResume />} />
              <Route path="notifications" element={<Notifications />} />
              <Route path="categories" element={<BrowseCategories />} />
              <Route path="faq" element={<FAQ />} />
              <Route path="help" element={<Help />} />
              <Route path="pricing" element={<Pricing />} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App; 