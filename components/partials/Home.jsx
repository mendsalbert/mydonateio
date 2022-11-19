import React from 'react';
import StasCard from '../templates/home/statsCard';
import HeaderImage from '../templates/home/headerImages';
import Categories from '../templates/home/categories';
import Donations from '../templates/home/donations';
import TrendingDonation from '../templates/home/donations/trendingDonation';
import PinnedDonation from '../templates/home/donations/pinnedDonations';
function Home() {
  return (
    <div className="space-y-4 col-span-full lg:col-span-2">
      <HeaderImage />
      <StasCard />
      <Categories />
      <PinnedDonation />
      <TrendingDonation />
      <Donations />
      {/* <div className="w-full flex flex-row justify-between">
        <a
          href="#"
          class=" inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-2xl hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <ion-icon name="arrow-back-outline"></ion-icon>
          Previous
        </a>

        <a
          href="#"
          class=" inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-2xl hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Next
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </a>
      </div> */}
    </div>
  );
}

export default Home;
