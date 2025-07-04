import React from 'react';
import { WiDaySunny } from 'react-icons/wi';

const Header = () => {
  return (
    <header className="bg-blue-900 text-white shadow-md py-4 px-6 sm:px-10">
      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2">
        
        {/* Branding Section: Centered on mobile */}
        <div className="flex items-center gap-2">
          <WiDaySunny className="text-3xl" />
          <h1 className="text-xl sm:text-2xl font-semibold tracking-wide">
            WeatherMate
          </h1>
        </div>

        {/* Real-time Text: Hidden on mobile */}
        <div className="hidden sm:block text-sm text-white/80">
          Real-time weather updates 🌤️
        </div>
      </div>
    </header>
  );
};

export default Header;
