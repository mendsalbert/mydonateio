import React, { useState } from 'react';
import HeaderImage from '../../templates/home/headerImages';
import Categories from '../../templates/home/categories';
import Donations from '../../templates/home/donations';
import TrendingDonation from '../../templates/home/donations/trendingDonation';
import Modal from '../../utility/modal';
const Index = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className="space-y-4 mt-8 col-span-full lg:col-span-2">
      {/* <HeaderImage /> */}

      <div
        onClick={() => {
          setModal(true);
        }}
        className={`bg-gradient-to-r from-cyan-500 space-x-0 to-blue-500 mt-5 text-center w-max md:w-max items-center flex flex-row  px-6 py-3 rounded-full cursor-pointer text-white `}
      >
        <span>Filter</span>

        <ion-icon name="funnel-outline" class="text-2xl"></ion-icon>
      </div>

      <Categories />
      <TrendingDonation />
      <Donations />

      <Modal
        state={modal}
        onClick={() => {
          setModal(false);
        }}
      >
        <p>something</p>
      </Modal>
    </div>
  );
};

export default Index;
