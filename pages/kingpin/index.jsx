import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../utils/AuthProvider';
import { ethers } from 'ethers';

import Sidebar from '../../components/partials/kingpin/Sidebar';
import Header from '../../components/partials/kingpin/Header';
import WelcomeBanner from '../../components/partials/kingpin/dashboard/WelcomeBanner';
import StatisticCard from '../../components/partials/kingpin/dashboard/StatisticCard';

function Index() {
  const { signer, address } = useContext(AuthContext);
  const [totalAmount, settotalAmount] = useState(0);
  const [users, setusers] = useState(0);
  const [donation, setdonation] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [pindonation, setpindonation] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (address) {
      const statistics = async () => {
        const amount = await signer.amountRaised();
        const users = await signer.usersCount();
        const donations = await signer.donationCount();
        const pindonation = await signer.fetchAllDonationItems();
        const filter = pindonation.filter(
          (p) => p.donationstatus?.isPinned === true
        );
        setpindonation(filter);
        setusers(users.toString());
        setdonation(donations.toString());
        settotalAmount(amount);
      };
      statistics();
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
              <WelcomeBanner type="Admin" />
              {/* Cards */}
              <div className="sm:flex sm:justify-end sm:items-center mb-8">
                <div className="grid grid-flow-col sm:auto-cols-max justify-end sm:justify-end gap-2">
                  {/* button */}
                </div>
              </div>
              <div className="grid grid-cols-12 gap-6">
                <StatisticCard
                  length={donation}
                  icon="heart-outline"
                  title={'Donations'}
                  text="All donations Made"
                />
                <StatisticCard
                  length={users}
                  icon="people-outline"
                  title={'Users'}
                  text="Total of Users"
                />
                <StatisticCard
                  length={ethers.utils.formatEther(totalAmount.toString())}
                  icon="wallet-outline"
                  title={'Donated'}
                  text="Total of amount donated"
                  unit={'ETH'}
                />
                <StatisticCard
                  length={pindonation.length}
                  icon="pin-outline"
                  title={'Pin donation'}
                  text="All pinned donations"
                />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Index;
