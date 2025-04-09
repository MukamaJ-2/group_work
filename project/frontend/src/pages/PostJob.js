import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Briefcase, MapPin, DollarSign, Clock } from 'lucide-react';

function PostJob() {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    description: '',
    requirements: '',
    salary: '',
    type: 'full-time'
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to post job');
      }

      navigate('/manage-jobs');
    } catch (error) {
      console.error('Error posting job:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-16 px-4">
        <div className="container mx-auto text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Post a New Job</h1>
          <p className="text-xl opacity-90">Create a job posting to find the perfect candidate</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <div className="grid gap-6">
            <div className="border-b pb-4">
              <h2 className="text-2xl font-semibold">Job Details</h2>
              <p className="text-gray-600">Fill in the details of the position you're hiring for</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Job Title
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Briefcase className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="input-field pl-10"
                    placeholder="e.g., Senior Software Engineer"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Job Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={6}
                  className="input-field"
                  placeholder="Describe the role, responsibilities, and ideal candidate..."
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Location
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="input-field pl-10"
                      placeholder="e.g., New York, NY"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Employment Type
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Clock className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="input-field pl-10"
                    >
                      <option value="full-time">Full-time</option>
                      <option value="part-time">Part-time</option>
                      <option value="contract">Contract</option>
                      <option value="remote">Remote</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Salary Range
                </label>
                <input
                  name="salary"
                  value={formData.salary}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="e.g., $80,000 - $100,000"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Requirements (one per line)
                </label>
                <textarea
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  rows={4}
                  className="input-field"
                  placeholder="- 5+ years of experience in web development&#10;- Bachelor's degree in Computer Science&#10;- Strong problem-solving skills"
                />
              </div>

              <div className="pt-6 border-t">
                <div className="flex justify-end gap-4">
                  <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Post Job
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostJob; 