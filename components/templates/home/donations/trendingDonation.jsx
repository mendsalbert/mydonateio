import React, { useState, useRef, useEffect, useContext } from 'react';
import GradientButton from '../../../utility/bottons/gradientButton';
import Card from '../donations/tendingCards';
import Link from 'next/link';
import { numDaysBetween, truncateString } from '../../../../lib/utilities';
import { ethers } from 'ethers';
import { AuthContext } from '../../../../utils/AuthProvider'; 
import dateFormat from 'dateformat'
const TrendingDonation = () => {
  const { address, connect, contract, ethprice } = useContext(AuthContext);
  const [donations, setdonations] = useState([
    {
      title: '',
      description: '',
      endDate: 0,
      targetedAmount: 0,
      hash: '',
      user: {
        country: '',
      },
    },
  ]);

  async function loadDonations() {
    const data = (await contract?.fetchAllDonationItems()) || donations;
    console.log(data);
    let filter = data.filter(p => p.donationstatus?.isApproved === true);
    setdonations(filter);
  }

  useEffect(() => {
    loadDonations();
  }, [contract]);

  console.log(donations);
  // if (!donations[donations.length - 1].hash === undefined) {
  // if (typeof donations !== 'undefined') {
  if (donations[donations.length - 1]?.hash) {
    return (
      <div className="relative flex flex-col space-y-1 ">
        <p className="text-2xl py-4 dark:text-gray-100">Recent Donation</p>
        <div className="flex md:flex-row flex-col space-x-0 md:space-x-8 w-full">
          <div class="w-full md:w-6/12 h-full">
            <img
              src={`${donations[donations.length - 1].hash}`}
              className="object-cover h-96 rounded-2xl w-full"
            />
          </div>
          <div className="py-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl  font-semibold dark:text-gray-200">
              {donations[donations.length - 1].title}{' '}
            </h2>
            <p className=" text-lg sm:text-xl md:text-2xl dark:text-gray-100">
              {truncateString(
                donations[donations.length - 1].description.toString(),
                40
              )}{' '}
            </p>
            <div className="flex flex-row space-x-2 items-center">
              <ion-icon
                name="time-outline"
                class=" text-lg md:text-2xl dark:text-gray-100"
              ></ion-icon>
              <p className="text-lg md:text-xl dark:text-gray-100">
              {dateFormat(
                    (new Date(donations?.endDate?.toString()), 'dd mmm yy')
                  )}
              </p>
            </div>
            <div className="flex flex-row space-x-2 items-center">
              <ion-icon
                name="wallet-outline"
                class="text-lg md:text-2xl  dark:text-gray-100"
              ></ion-icon>
              <p className="text-lg md:text-xl dark:text-gray-200">
                {'$'+(
                  Number(
                    ethers.utils.formatEther(
                      donations[donations.length - 1].targetedAmount.toString()
                    )
                  ) * ethprice
                ).toLocaleString()}
              </p>
            </div>
            <div className="flex flex-row space-x-2 items-center">
              <ion-icon
                name="earth-outline"
                class="text-lg md:text-2xl  dark:text-gray-200"
              ></ion-icon>
              <p className="text-xl dark:text-gray-100">
                {donations[donations.length - 1].user.country}
              </p>
            </div>
            {!address ? (
              <div
                onClick={() => {
                  !address ? connect() : '';
                }}
              >
                <GradientButton o title={'Read more'}></GradientButton>
              </div>
            ) : (
              <Link href={`${donations[donations.length - 1].id}`}>
                <GradientButton title={'Read more'}></GradientButton>
              </Link>
            )}
            {/* <Link href={`${donations[donations.length - 1].id}`}>
              <GradientButton title="View details" />
            </Link> */}
          </div>
        </div>

        <style></style>
      </div>
    );
  } else {
    return '';
  }
};

export default TrendingDonation;
