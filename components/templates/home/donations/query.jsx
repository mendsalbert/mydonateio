import React, { useState, useRef, useEffect, useContext } from 'react';
import Card from './card';
import { AuthContext } from '../../../../utils/AuthProvider';
import { numDaysBetween, truncateString } from '../../../../lib/utilities';
import { ethers } from 'ethers';
import dateFormat from 'dateformat';
import moment from 'moment/moment';
const Index = ({ query }) => {
  const { address, signer, contract, ethprice } = useContext(AuthContext);
  const [donations, setdonations] = useState([]);
  // const [first, setfirst] = useState(second)

  async function loadDonations() {
    const data = (await contract?.fetchAllDonationItems()) || [];
    const query_ = data.filter((p) => p.category === query.toLowerCase());

    const searchItems = (searchValue) => {
      //   setSearchInput(searchValue);
      if (query !== '') {
        const filteredData = data.filter((item) => {
          return Object.values(item)
            .join('')
            .toLowerCase()
            .includes(query.toLowerCase());
        });
        setdonations(filteredData);
        // setFilteredResults(filteredData);
      } else {
        setdonations(query_);
        // setFilteredResults(APIData);
      }
    };

    searchItems(query);
  }

  useEffect(() => {
    loadDonations();
  }, [contract, query]);

  return (
    <div>
      <p className="text-2xl py-4 dark:text-gray-100">
        {' '}
        All Donations under {`'${query}'`}{' '}
        {donations.length <= 0 ? '(None)' : ''}
      </p>
      <div className=" grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 gap-10 ">
        {donations
          ?.filter((p) => p.donationstatus.isApproved === true)
          .map((donation, index) => (
            <Card
              key={index}
              id={donation.id.toString()}
              title={donation.title}
              description={truncateString(donation.description, 30)}
              image={donation.hash}
              endDate={moment.unix(donation.endDate.toString()).format("MM/DD/YYYY")}

              // endDate={dateFormat(
              //   (new Date(donation.endDate.toString()), 'dd mmm yy')
              // )}
              targetedAmount={(
                Number(
                  ethers.utils.formatEther(donation.targetedAmount.toString())
                ) * ethprice
              ).toLocaleString()}
              country={donation.user.country}
            />
          ))
          .reverse()}
      </div>
    </div>
  );
};

export default Index;
