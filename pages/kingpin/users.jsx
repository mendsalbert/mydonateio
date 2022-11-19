import React, { useState, useEffect, useContext } from 'react';

import Sidebar from '../../components/partials/kingpin/Sidebar';
import Header from '../../components/partials/kingpin/Header';
import WelcomeBanner from '../../components/partials/kingpin/dashboard/WelcomeBanner';
import { AuthContext } from '../../utils/AuthProvider';
import { numDaysBetween, truncateString } from '../../lib/utilities';
import { ethers } from 'ethers';
import Modal from '../../components/utility/modal';

function Fund() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [status, setstatus] = useState('');

  const { signer, address } = useContext(AuthContext);

  const [users, setusers] = useState([]);

  useEffect(() => {
    if (address) {
      const getUsers = async () => {
        const users = await signer.fetchAllUsers();
        console.log(users);
        setusers(users);
      };
      getUsers();
    }
  }, [signer]);

  return (
    <>
      <div className="flex h-screen overflow-hidden dark:bg-gray-900 font-Montserrat">
        {/* Sidebar */}

        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {/*  Site header */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <main>
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
              {/* Welcome banner */}
              <WelcomeBanner type="Admin" address={address} />
              {/* Cards */}
              <div className="sm:flex sm:justify-end sm:items-center mb-8">
                <div className="grid grid-flow-col sm:auto-cols-max justify-end sm:justify-end gap-2">
                  {/* button */}
                </div>
              </div>

              <div>
                <div class="overflow-x-auto">
                  <h2
                    className="font-semibold  dark:text-gray-600 pb-4
                   text-slate-800"
                  >
                    All Users
                  </h2>

                  <div className="w-max md:w-max ">
                    <div className="relative">
                      <select
                        onChange={(e) => {
                          setstatus(e.target.value);
                        }}
                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-state"
                      >
                        <option value="all">All</option>
                        <option value="individual">Individuals</option>
                        <option value="organization">Organizations</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <table class="min-w-full text-sm divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th class="p-4 font-medium text-left text-gray-900 dark:text-gray-300 whitespace-nowrap">
                          <div class="flex items-center">Email</div>
                        </th>
                        <th class="p-4 font-medium text-left text-gray-900 dark:text-gray-300 whitespace-nowrap">
                          <div class="flex items-center">User type</div>
                        </th>
                        <th class="p-4 font-medium text-left text-gray-900 dark:text-gray-300 whitespace-nowrap">
                          <div class="flex items-center">Country</div>
                        </th>
                        <th class="p-4 font-medium text-left text-gray-900 dark:text-gray-300 whitespace-nowrap">
                          <div class="flex items-center">Residence</div>
                        </th>
                        <th class="p-4 font-medium text-left text-gray-900 dark:text-gray-300 whitespace-nowrap">
                          <div class="flex items-center">City</div>
                        </th>
                        <th class="p-4 font-medium text-left text-gray-900 dark:text-gray-300 whitespace-nowrap">
                          <div class="flex items-center">Address</div>
                        </th>
                      </tr>
                    </thead>

                    <tbody class="divide-y divide-gray-100">
                      {users
                        ?.filter((p) =>
                          status === 'individual'
                            ? p.userType === 'individual'
                            : status === 'organization'
                            ? p.userType === 'organization'
                            : users
                        )
                        .map((user) => (
                          <tr>
                            <td class="p-4 dark:text-gray-200 font-medium text-gray-900 whitespace-nowrap">
                              {user.email.toString()}{' '}
                            </td>
                            <td class="p-4 dark:text-gray-200 text-gray-700 whitespace-nowrap">
                              {user.userType.toString()}
                            </td>

                            <td class="p-4 dark:text-gray-200 text-gray-700 whitespace-nowrap">
                              {user.country.toString()}
                            </td>
                            <td class="p-4 dark:text-gray-200 text-gray-700 whitespace-nowrap">
                              {user.residenceAddress.toString()}
                            </td>
                            <td class="p-4 dark:text-gray-200 text-gray-700 whitespace-nowrap">
                              {user.city.toString()}
                            </td>
                            <td class="p-4 dark:text-gray-200 text-gray-700 whitespace-nowrap">
                              {user._address.toString()}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Fund;
