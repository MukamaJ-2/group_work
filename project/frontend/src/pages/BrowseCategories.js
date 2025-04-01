import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import { Link } from 'react-router-dom';
import {
  Briefcase,
  Code,
  PenTool,
  Building,
  Stethoscope,
  Calculator,
  GraduationCap,
  Headphones
} from 'lucide-react';

function BrowseCategories() {
  const categories = [
    {
      id: 1,
      name: 'Technology',
      icon: <Code className="h-8 w-8" />,
      jobCount: 1234,
      color: 'blue',
    },
    {
      id: 2,
      name: 'Design',
      icon: <PenTool className="h-8 w-8" />,
      jobCount: 856,
      color: 'purple',
    },
    // ... other categories
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Browse by Category</h1>
        <p className="text-gray-600">Find the job that's perfect for you.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map(category => (
          <Link
            key={category.id}
            to={`/jobs?category=${category.name.toLowerCase()}`}
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className={`w-16 h-16 rounded-lg bg-${category.color}-100 flex items-center justify-center mb-4`}>
              <div className={`text-${category.color}-500`}>{category.icon}</div>
            </div>
            <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
            <p className="text-gray-600">{category.jobCount} jobs available</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BrowseCategories; 