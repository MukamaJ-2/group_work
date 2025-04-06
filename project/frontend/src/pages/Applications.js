import React from 'react';
import { User, MapPin, Building, CheckCircle, XCircle } from 'lucide-react';

function Applications() {
  const applications = [
    {
      id: 1,
      candidate: {
        name: 'John Doe',
        email: 'john@example.com',
        location: 'New York, USA',
      },
      job: {
        title: 'Senior Software Engineer',
        company: 'Tech Corp',
        location: 'New York, USA',
      },
      status: 'pending',
      appliedDate: '2024-03-15',
    }
  ];

  function handleAccept(id) {
    // Handle accept logic
  }

  function handleReject(id) {
    // Handle reject logic
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Job Applications</h1>
      <div className="bg-white rounded-lg shadow-sm">
        {applications.map(application => (
          <div key={application.id} className="p-6 border-b last:border-b-0">
            <div className="flex justify-between items-start">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">{application.candidate.name}</h2>
                  <p className="text-gray-600">{application.candidate.email}</p>
                  <div className="flex items-center space-x-4 text-gray-600 mt-2">
                    <span className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {application.candidate.location}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex space-x-2">
                <button 
                  onClick={() => handleAccept(application.id)}
                  className="p-2 text-green-600 hover:bg-green-50 rounded"
                >
                  <CheckCircle className="h-5 w-5" />
                </button>
                <button 
                  onClick={() => handleReject(application.id)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded"
                >
                  <XCircle className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Applications; 