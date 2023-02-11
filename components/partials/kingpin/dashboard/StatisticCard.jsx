import React from 'react';

function StatisticCard({ length, icon, title, text, unit }) {
  return (
    <div className=" overflow-hidden relative flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 dark:border-gray-600 shadow-lg rounded-xl border border-slate-200">
      <span class="absolute w-full inset-x-0 bottom-0 h-2  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
      <div className="px-5 pt-5 mb-3">
        <header className="flex justify-between items-start mb-2">
          <ion-icon
            name={icon}
            class="text-5xl text-slate-800 dark:text-gray-200"
          ></ion-icon>
        </header>
        <h2 className="text-lg font-semibold text-slate-800 dark:text-gray-300 mb-2">
          {title}
        </h2>
        <div className="text-xs font-semibold text-slate-400 dark:text-gray-200 uppercase mb-1">
          {text}
        </div>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-800 dark:text-gray-200 mr-2">
            {length} {''}
            {unit}
          </div>
        </div>
      </div>
      <div className="grow"></div>
    </div>
    // <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-md border border-slate-200">
    // <div className="px-5 pt-5">
    //   <header className="flex justify-between items-start mb-2">
    //     <ion-icon name={icon} class="text-5xl text-slate-800"></ion-icon>
    //   </header>
    //   <h2 className="text-lg font-semibold text-slate-800 mb-2">{title}</h2>
    //   <div className="text-xs font-semibold text-slate-400 uppercase mb-1">
    //     {text}
    //   </div>
    //   <div className="flex items-start">
    //     <div className="text-3xl font-bold text-slate-800 mr-2">
    //       {length} {''}
    //       {unit}
    //     </div>
    //   </div>
    // </div>
    // <div className="grow"></div>
    // </div>
  );
}

export default StatisticCard;
