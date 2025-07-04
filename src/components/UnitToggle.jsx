import React from 'react';

const UnitToggle = ({ unit, onToggle }) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <label
        htmlFor="unit-select"
        className="text-sm font-medium text-gray-700"
      >
        Select Unit
      </label>
      <select
        id="unit-select"
        value={unit}
        onChange={(e) => onToggle(e.target.value)}
        className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 transition duration-200 cursor-pointer"
      >
        <option value="metric">Celsius (°C)</option>
        <option value="imperial">Fahrenheit (°F)</option>
      </select>
    </div>
  );
};

export default UnitToggle;
