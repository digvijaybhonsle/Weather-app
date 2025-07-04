import React from 'react';

const RecentSearches = ({ cities = [], onSelect }) => {
  if (!cities.length) return null;

  return (
    <div className="w-full max-w-md bg-white p-4 rounded-lg shadow-md mt-4">
      <h2 className="text-lg font-semibold text-gray-700 mb-2">Recent Searches</h2>
      <ul className="flex flex-wrap gap-2">
        {cities.map((city, index) => (
          <li key={index}>
            <button
              onClick={() => onSelect(city)}
              className="px-3 py-1 bg-gray-100 hover:bg-blue-100 text-gray-800 rounded-full transition duration-200 text-sm shadow-sm"
            >
              {city}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentSearches;
