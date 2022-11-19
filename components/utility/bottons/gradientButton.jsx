import React from 'react';

const GradientButton = ({ title, style = '', onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mt-5 text-center w-max   px-4 py-2 md:px-6 md:py-3 rounded-full cursor-pointer text-white ${style}`}
    >
      {title}
    </button>
  );
};

export default GradientButton;
