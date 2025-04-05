import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { MapPin, Building, Clock, DollarSign, Briefcase } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const fetchJob = async (id) => {
  const response = await fetch(`/api/jobs/${id}`);
  if (!response.ok) throw new Error('Failed to fetch job');
  return response.json();
};

const JobDetails = () => {
  const { id } = useParams();
  const { user, isAuthenticated } = useAuth();
  const { data: job, isLoading, error } = useQuery(['job', id], () => fetchJob(id));

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error || !job) {
    return (
      <div className="text-center text-red-600 py-8">
        Error loading job details. Please try again later.
      </div>
    );
  }

  const handleApply = async () => {
    try {
      const response = await fetch(`/api/jobs/${id}/apply`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      
      if (!response.ok) throw new Error('Application failed');
      
      // Show success message
      alert('Application submitted successfully!');
    } catch (error) {
      console.error('Application error:', error);
      alert('Failed to submit application. Please try again.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm p-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{job.title}</h1>
            <div className="flex items-center gap-4 text-gray-600">
              <span className="flex items-center">
                <Building className="h-4 w-4 mr-1" />
                {job.company}
              </span>
              <span className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                {job.location}
              </span>
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {job.type}
              </span>
              <span className="flex items-center">
                <DollarSign className="h-4 w-4 mr-1" />
                {job.salary}
              </span>
            </div>
          </div>
          {isAuthenticated && user?.role === 'jobseeker' && (
            <button
              onClick={handleApply}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Apply Now
            </button>
          )}
        </div>

        {/* Description */}
        <div className="prose max-w-none mb-8">
          <h2 className="text-xl font-semibold mb-4">Job Description</h2>
          <p className="text-gray-600 whitespace-pre-line">{job.description}</p>
        </div>

        {/* Requirements */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Requirements</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            {job.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>

        {/* Skills */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Required Skills</h2>
          <div className="flex flex-wrap gap-2">
            {job.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        {!isAuthenticated && (
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Want to apply for this position?</h3>
            <p className="text-gray-600 mb-4">Create an account or sign in to apply for this job</p>
            <div className="flex justify-center gap-4">
              <Link
                to="/register"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Create Account
              </Link>
              <Link
                to="/login"
                className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Sign In
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobDetails;