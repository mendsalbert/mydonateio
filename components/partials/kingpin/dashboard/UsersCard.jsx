import { UserCircleIcon } from '@heroicons/react/outline';
import React from 'react';

function UserCard({ users }) {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-md border border-slate-200">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          <ion-icon
            name="wallet-outline"
            class="text-4xl text-slate-800"
          ></ion-icon>
        </header>
        <h2 className="text-lg font-semibold text-slate-800 mb-2">
          All dontaions Made
        </h2>
        <div className="text-xs font-semibold text-slate-400 uppercase mb-1">
          Total number of donations made
        </div>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-800 mr-2">
            {users} ETH
          </div>
        </div>
      </div>
      <div className="grow"></div>
    </div>
  );
}

export default UserCard;
