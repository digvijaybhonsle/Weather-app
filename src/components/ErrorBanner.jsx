import React from 'react';
import { MdErrorOutline } from 'react-icons/md';

const ErrorBanner = ({ message = "Something went wrong..." }) => {
  return (
    <div className="w-full max-w-md mx-auto mt-4 p-4 bg-red-100 text-red-800 border border-red-300 rounded-lg shadow-md flex items-center gap-3">
      <MdErrorOutline className="text-2xl flex-shrink-0" />
      <p className="text-sm sm:text-base">{message}</p>
    </div>
  );
};

export default ErrorBanner;
