import React from 'react';
import { Link } from 'react-router-dom';
import { Edit2, Trash2, Eye, Clock, MapPin, Building } from 'lucide-react';

const ManageJobs = () => {
  const jobs = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'Tech Corp',
      location: 'New York, USA',
      type: 'Full-time',
      posted: '2 days ago',
      applications: 12,
      status: 'active',
    },
    // Add more jobs as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Manage Jobs</h1>
        <Link
          to="/employer/post-job"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Post New Job
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        {jobs.map((job) => (
          <div key={job.id} className="p-6 border-b last:border-b-0">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold">{job.title}</h2>
                <div className="flex items-center space-x-4 text-gray-600 mt-2">
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
                    {job.posted}
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Link
                  to={`/employer/jobs/${job.id}`}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded"
                >
                  <Eye className="h-5 w-5" />
                </Link>
                <Link
                  to={`/employer/jobs/${job.id}/edit`}
                  className="p-2 text-green-600 hover:bg-green-50 rounded"
                >
                  <Edit2 className="h-5 w-5" />
                </Link>
                <button className="p-2 text-red-600 hover:bg-red-50 rounded">
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <span className={`px-3 py-1 rounded-full text-sm ${
                  job.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {job.status}
                </span>
                <span className="text-gray-600">
                  {job.applications} Applications
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageJobs; 