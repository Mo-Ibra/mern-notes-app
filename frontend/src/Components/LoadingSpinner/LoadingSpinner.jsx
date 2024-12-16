import React from 'react';
import { ClipLoader } from 'react-spinners';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
      <ClipLoader size={50} color="#ffffff" />
    </div>
  );
};

export default LoadingSpinner;