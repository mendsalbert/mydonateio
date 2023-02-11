import React, { useState, useMemo, useEffect, useContext } from 'react';
import Card from './card';
import { AuthContext } from '../../../../utils/AuthProvider';
import { numDaysBetween, truncateString } from '../../../../lib/utilities';
import dateFormat, { masks } from 'dateformat';
import moment from 'moment';
import { ethers } from 'ethers';
const Index = () => {
  let PageSize = 10;

  const [currentPage, setCurrentPage] = useState(1);

  const { address, signer, contract, provider, ethprice, chainId } =
    useContext(AuthContext);
  const [donations, setdonations] = useState([]);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return donations.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  async function loadDonations() {
    const data = await contract?.fetchAllDonationItems();
    console.log(data);
    console.log('donations ----------', data);
    setdonations(data);
  }

  useEffect(() => {
    loadDonations();
  }, [contract]);

  console.log('contract((*****((**(***((*', contract);
  return (
    <div>
      <p className="text-2xl pt-4 dark:text-gray-100"></p>
      <div className=" grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-6 gap-10 ">
        {donations

          ?.slice(0, 16)
          ?.filter((p) => p.donationstatus.isApproved === true)
          ?.map((donation, index) => {
            if (donation.id.toString() == donations.length) {
              return '';
            } else {
              return (
                <Card
                  key={index}
                  id={donation.id.toString()}
                  title={truncateString(donation.title, 14)}
                  description={truncateString(donation.description, 20)}
                  image={donation.hash}
                  endDate={moment.unix(donation.endDate.toString()).format("MM/DD/YYYY")}
                  targetedAmount={(
                    Number(
                      ethers.utils.formatEther(
                        donation.targetedAmount.toString()
                      )
                    ) * ethprice
                  ).toLocaleString()}
                  country={truncateString(donation.user.country, 12)}
                />
              );
            }
          })
          .reverse()}
      </div>
    </div>
  );
};

export default Index;
