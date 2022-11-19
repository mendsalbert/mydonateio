import React, { useState, useEffect } from 'react';
import HeaderImage from '../templates/home/headerImages';
import Categories from '../templates/home/categories';
import QueryComponent from '../templates/home/donations/query';
import Modal from '../utility/modal';
import axios from 'axios';
const Query = ({ query }) => {
  const [modal, setModal] = useState(false);
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

      <QueryComponent query={query} />
    </div>
  );
};

export default Query;
