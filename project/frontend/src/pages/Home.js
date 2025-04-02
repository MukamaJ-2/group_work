import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, Users, Building, Search, Shield } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">
            Where Great Companies <br />
            Meet Great Talent
          </h1>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            A powerful platform connecting employers with qualified candidates. 
            Streamline your hiring process or find your dream job today.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/jobs"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Find Jobs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/employer/post-job"
              className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-400 transition-colors"
            >
              Post a Job
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <StatCard number="10K+" label="Active Jobs" />
            <StatCard number="5M+" label="Job Seekers" />
            <StatCard number="20K+" label="Companies" />
            <StatCard number="8M+" label="Successful Hires" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 rounded-2xl">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Platform Features</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Our comprehensive platform provides powerful tools for both employers and job seekers
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Search className="h-8 w-8" />}
              title="Smart Matching"
              description="Advanced algorithms to match candidates with the right opportunities"
            />
            <FeatureCard
              icon={<Building className="h-8 w-8" />}
              title="Company Profiles"
              description="Detailed company profiles and culture insights for informed decisions"
            />
            <FeatureCard
              icon={<Shield className="h-8 w-8" />}
              title="Verified Employers"
              description="All employers are verified to ensure a safe hiring environment"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">For Job Seekers</h3>
              <ul className="space-y-4 mb-6">
                <li className="flex items-center gap-2">
                  <CheckIcon /> Create your professional profile
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon /> Access thousands of verified jobs
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon /> Track your applications
                </li>
              </ul>
              <Link
                to="/register"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Create Account
              </Link>
            </div>
            <div className="bg-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">For Employers</h3>
              <ul className="space-y-4 mb-6">
                <li className="flex items-center gap-2">
                  <CheckIcon /> Post unlimited job listings
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon /> Access candidate database
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon /> Advanced hiring tools
                </li>
              </ul>
              <Link
                to="/employer/register"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Start Hiring
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const StatCard = ({ number, label }) => (
  <div>
    <div className="text-4xl font-bold text-blue-600 mb-2">{number}</div>
    <div className="text-gray-600">{label}</div>
  </div>
);

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
    <div className="text-blue-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const CheckIcon = () => (
  <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default Home;