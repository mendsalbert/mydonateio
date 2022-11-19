import React, { useState, useEffect } from 'react';
import HeaderImage from '../templates/home/headerImages';
import Categories from '../templates/home/categories';
import Donations from '../templates/home/donations';
import TrendingDonation from '../templates/home/donations/trendingDonation';
import Modal from '../utility/modal';
import axios from 'axios';
import Link from 'next/link';
const Donation = () => {
  const [modal, setModal] = useState(false);
  const [query, setquery] = useState('');
  const [countries, setcountries] = useState([]);
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => {
        // console.log(response.data);
        setcountries(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="space-y-4 mt-8 col-span-full lg:col-span-2">
      {/* <HeaderImage /> */}

      <Categories />
      <TrendingDonation />
      <Donations />
    </div>
  );
};

export default Donation;
