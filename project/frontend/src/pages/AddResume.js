import React from 'react';
import { Upload } from 'lucide-react';

function AddResume() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Add Your Resume</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <form className="space-y-6">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">Upload Resume</h3>
              <p className="text-gray-500 mb-4">PDF, DOC, DOCX files are allowed</p>
              <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
              <button type="button" className="btn-primary">
                Choose File
              </button>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Personal Information</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input type="text" className="input-field" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input type="email" className="input-field" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Skills
              </label>
              <input 
                type="text" 
                className="input-field"
                placeholder="Add skills (comma separated)"
              />
            </div>

            <div className="pt-4">
              <button type="submit" className="btn-primary">
                Save Resume
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddResume; 