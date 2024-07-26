import React from 'react';
import './Section.css'

export const IndeterminateProgressBar = () => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden relative">
      <div
        className="bg-blue-600  h-3 absolute animate-indeterminate"
        style={{ animation: 'indeterminate 1s infinite' }}
      ></div>
    </div>
  );
};
