import React from 'react';
import { Bell } from 'lucide-react';

const Notifications = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Notifications</h1>
        <div className="bg-white rounded-lg shadow-sm divide-y">
          {/* Add notification items here */}
          <div className="p-4 flex items-start space-x-4">
            <div className="bg-blue-100 p-2 rounded-full">
              <Bell className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="font-medium">New job match found</p>
              <p className="text-gray-600">A new job matching your skills has been posted</p>
              <p className="text-sm text-gray-500 mt-1">2 hours ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications; 