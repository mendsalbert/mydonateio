import React, { useState, useEffect, useContext } from 'react';
import Donation from './donation'
import Fund from './fund'
import Sidebar from '../../components/partials/profile/Sidebar';
import Header from '../../components/partials/profile/Header';
import WelcomeBanner from '../../components/partials/profile/dashboard/WelcomeBanner';
import StatisticCard from '../../components/partials/profile/dashboard/StatisticCard';
import { AuthContext } from '../../utils/AuthProvider';
import { ethers } from 'ethers';
function Profile() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const { signer, address } = useContext(AuthContext);
  const [donation, setdonation] = useState([]);
  const [num, setnum] = useState([]);
  useEffect(() => {
    if (address) {
      const myDonations = async () => {
        const donation = await signer?.fetchAllDonationItems();
        const filter = donation.filter(p => p.user?._address === address);
        setdonation(filter);
      };
      myDonations();
    }
  }, [signer]);

  useEffect(() => {
    donation.map(function(donation) {
      const doners = signer
        .getDonersOfDonation(donation.id.toString())
        .then(res => {
          console.log('results', res);
          var total = 0;
          res
            .filter(p => p.doner === address)
            .map(tl => {
              total =
                total + Number(ethers.utils.formatEther(tl.amount.toString()));
            });
          setnum(oldValue => [...oldValue, total]);
          return total;
        });
    });
  }, [donation]);
  console.log(num.length);

  function getTotalAmountOfEthDonated() {
    let sum = 0;
    for (var i = 0; i < num.length; i++) {
      sum = sum + num[i];
    }
    return sum;
  }

  console.log(Number(getTotalAmountOfEthDonated()).toFixed(5));

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
              <div className="grid grid-cols-12 gap-6">
                {/* <StatisticCard
                  length={donation.length}
                  icon="heart-half-outline"
                  title={'Funds'}
                  text="Every Donation Created"
                /> */}
                <StatisticCard
                  length={num.length}
                  icon="heart-outline"
                  title={'Donations'}
                  text="All of the donations you have contributed"
                />
                <StatisticCard
                  length={Number(getTotalAmountOfEthDonated()).toFixed(5)}
                  icon="wallet-outline"
                  title={'Donated'}
                  text="Total of amount of ETH donated"
                  unit={'ETH'}
                />
               
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Profile;
