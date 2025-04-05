import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { MapPin, Building, Clock } from 'lucide-react';

const Jobs = () => {
  const { data: jobs, isLoading, error } = useQuery('jobs', fetchJobs);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 py-8">
        Error loading jobs. Please try again later.
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Available Jobs</h1>
        <div className="flex gap-4">
          <input
            type="search"
            placeholder="Search jobs..."
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">All Categories</option>
            <option value="tech">Technology</option>
            <option value="design">Design</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
      </div>

      <div className="grid gap-6">
        {jobs?.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

const JobCard = ({ job }) => (
  <Link
    to={`/jobs/${job.id}`}
    className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6"
  >
    <div className="flex justify-between items-start">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h2>
        <div className="flex items-center gap-4 text-gray-600 mb-4">
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
        </div>
        <p className="text-gray-600 line-clamp-2">{job.description}</p>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-blue-600 font-semibold">{job.salary}</span>
        <span className="text-sm text-gray-500 mt-2">{job.posted}</span>
      </div>
    </div>
    <div className="mt-4 flex gap-2">
      {job.skills.map((skill, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
        >
          {skill}
        </span>
      ))}
    </div>
  </Link>
);

export default Jobs;