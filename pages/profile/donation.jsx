import React, { useState, useEffect, useContext } from 'react';

import Sidebar from '../../components/partials/profile/Sidebar';
import Header from '../../components/partials/profile/Header';
import WelcomeBanner from '../../components/partials/profile/dashboard/WelcomeBanner';
import StatisticCard from '../../components/partials/profile/dashboard/StatisticCard';
import Link from 'next/link';
import { AuthContext } from '../../utils/AuthProvider';
import { ethers } from 'ethers';
import { truncateString } from '../../lib/utilities';
function Donation() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const { signer, address } = useContext(AuthContext);
  const [donation, setdonation] = useState([]);
  const [num, setnum] = useState([]);

  useEffect(() => {
    if (address) {
      const myDonations = async () => {
        const donation = await signer.fetchAllDonationItems();
        const filter = donation.filter(p => p.user?._address === address);
        setdonation(filter);
      };
      myDonations();
    }
  }, [signer]);

  useEffect(() => {
    donation.map(function(donation) {
      // console.log('donation---0-000-00', donation.length);
      const doners = signer
        .getDonersOfDonation(donation.id.toString())
        .then(res => {
          console.log('results', res);
          var total = 0;
          res
            .filter(p => p.doner === address)
            .map(tl => {
              console.log('tll------------' + tl);
              total =
                total + Number(ethers.utils.formatEther(tl.amount.toString()));
            });
          setnum(oldValue => [...oldValue, total]);
          return total;
        });
    });
  }, [donation]);
  console.log(num);

  function getTotalAmountOfEthDonated() {
    let sum = 0;
    for (var i = 0; i < num.length; i++) {
      sum = sum + num[i];
    }
    return sum;
  }

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
                  <table class="min-w-full text-sm divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th class="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                          <div class="flex items-center dark:text-gray-200">
                            Title
                          </div>
                        </th>
                        <th class="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                          <div class="flex items-center dark:text-gray-200">
                            Description
                          </div>
                        </th>

                        <th class="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                          <div class="flex items-center dark:text-gray-200">
                            Amount Donated
                          </div>
                        </th>
                      </tr>
                    </thead>

                    <tbody class="divide-y divide-gray-100">
                      {donation
                        .filter(p => p.donationstatus.isApproved === true)
                        .map((donationItem, index) => (
                          <tr>
                            <td class="p-4 dark:text-gray-200 font-medium text-gray-900 whitespace-nowrap">
                              {donationItem.title}{' '}
                            </td>
                            <td class="p-4 dark:text-gray-200 text-gray-700 whitespace-nowrap">
                              {truncateString(
                                donationItem.description.toString(),
                                20
                              )}{' '}
                            </td>

                            <td class="p-4 dark:text-gray-200 text-gray-700 whitespace-nowrap">
                              {num[index]}

                              {'ETH'}
                            </td>
                            <Link href={`/${donationItem.id.toString()}`}>
                              <td class="p-4 cursor-pointer text-blue-700 underline whitespace-nowrap">
                                view
                              </td>
                            </Link>
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

export default Donation;
