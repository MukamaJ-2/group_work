import React from 'react';
import { Heart, MapPin, Building } from 'lucide-react';

const SavedJobs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Saved Jobs</h1>
        <div className="space-y-4">
          {/* Add saved job items here */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold">Senior Software Engineer</h2>
                <div className="flex items-center space-x-4 text-gray-600 mt-2">
                  <span className="flex items-center">
                    <Building className="h-4 w-4 mr-1" />
                    Company Name
                  </span>
                  <span className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    Location
                  </span>
                </div>
              </div>
              <button className="text-red-500">
                <Heart className="h-5 w-5 fill-current" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedJobs; 