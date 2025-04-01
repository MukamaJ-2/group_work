import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: '29',
      features: [
        'Post 1 job',
        'Access to candidate database',
        'Email support',
        '30 days listing',
      ],
    },
    {
      name: 'Professional',
      price: '99',
      features: [
        'Post 5 jobs',
        'Featured listings',
        'Priority support',
        '60 days listing',
        'Advanced analytics',
      ],
      recommended: true,
    },
    {
      name: 'Enterprise',
      price: '199',
      features: [
        'Unlimited job posts',
        'Premium listings',
        '24/7 support',
        '90 days listing',
        'Custom branding',
        'API access',
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Pricing Plans</h1>
        <p className="text-gray-600">Choose the perfect plan for your needs</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`bg-white rounded-lg shadow-sm p-8 ${
              plan.recommended ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            {plan.recommended && (
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Recommended
              </span>
            )}
            <h2 className="text-2xl font-bold mt-4">{plan.name}</h2>
            <div className="mt-4 text-gray-600">
              <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
              <span className="text-gray-500">/month</span>
            </div>
            <ul className="mt-6 space-y-4">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center text-gray-600">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className="mt-8 w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing; 