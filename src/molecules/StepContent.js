import React from 'react';

const StepContent = ({ children, className = '' }) => {
  return (
    <div className={`flex-1 overflow-y-auto px-6 py-4 ${className}`}>
      <div className="max-w-2xl mx-auto">
        {children}
      </div>
    </div>
  );
};

export default StepContent; 