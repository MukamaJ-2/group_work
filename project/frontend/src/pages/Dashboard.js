import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  if (!user) {
    return <div>Loading...</div>;
  }

  return user.role === 'employer' ? <EmployerDashboard /> : <JobSeekerDashboard />;
};

const EmployerDashboard = () => {
  const { data: postedJobs, isLoading } = useQuery('postedJobs', async () => {
    const response = await fetch('/api/employer/jobs', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });
    if (!response.ok) throw new Error('Failed to fetch jobs');
    return response.json();
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Employer Dashboard</h1>
        <Link
          to="/employer/post-job"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Post New Job
        </Link>
      </div>

      <div className="grid gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Posted Jobs</h2>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <div className="space-y-4">
              {postedJobs?.map((job) => (
                <div key={job.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{job.title}</h3>
                      <p className="text-gray-600">{job.location}</p>
                    </div>
                    <Link
                      to={`/employer/jobs/${job.id}`}
                      className="text-blue-600 hover:underline"
                    >
                      View Applications
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const JobSeekerDashboard = () => {
  const { data: applications, isLoading } = useQuery('applications', async () => {
    const response = await fetch('/api/applications', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });
    if (!response.ok) throw new Error('Failed to fetch applications');
    return response.json();
  });

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">My Dashboard</h1>

      <div className="grid gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">My Applications</h2>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <div className="space-y-4">
              {applications?.map((application) => (
                <div key={application.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{application.job.title}</h3>
                      <p className="text-gray-600">{application.job.company}</p>
                      <p className="text-sm text-gray-500">
                        Applied on: {new Date(application.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      application.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : application.status === 'accepted'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {application.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;