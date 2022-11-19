import React from 'react';
import { ellipseAddress } from '../../../../lib/utilities';
function WelcomeBanner({ type, message, address }) {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-blue-500 to-green-300 py-10 px-6 rounded-xl overflow-hidden mb-8 ">
      <div
        className="absolute right-0 top-0 -mt-4 mr-16 pointer-events-none hidden xl:block"
        aria-hidden="true"
      ></div>
      <div className="relative">
        <h1 className="text-2xl md:text-3xl text-slate-200 font-bold mb-1">
          Welcome, {ellipseAddress(address)}👋
        </h1>
        <p className="text-white">
          {message || 'Check your statistics on mydonate'}
        </p>
      </div>
    </div>
  );
}

export default WelcomeBanner;
