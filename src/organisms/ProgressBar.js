import React from 'react';

const ProgressBar = ({ progress = 0, max = 100, className = '', style = {} }) => {
  const percentage = Math.min((progress / max) * 100, 100);

  return (
    <div 
      className={`w-full bg-gray-200 rounded-full h-2 ${className}`}
      style={style}
    >
      <div 
        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default ProgressBar; 