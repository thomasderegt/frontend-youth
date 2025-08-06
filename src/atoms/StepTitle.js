import React from 'react';

const StepTitle = ({ title, subtitle, className = '' }) => {
  return (
    <div className={`text-center mb-6 ${className}`}>
      {title && (
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          {title}
        </h1>
      )}
      {subtitle && (
        <p className="text-lg text-gray-600">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default StepTitle; 