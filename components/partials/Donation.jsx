import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../utils/AuthProvider';
import { ethers } from 'ethers';
import {
  numDaysBetween,
  truncateString,
  ellipseAddress,
  timeConverter,
} from '../../lib/utilities';
import Modal from '../utility/modal';
import Spinner from '../utility/spinner/Spinner';
import { RWebShare } from 'react-web-share';
import { ShareIcon } from '@heroicons/react/outline';
import dateFormat from 'dateformat';
function Home({ id }) {
  const [modal, setModal] = useState(false);
  const [amount, setamount] = useState(0);
  const [doners, setdoners] = useState([]);
  const [loading, setloading] = useState(false);
  const [modalAlert, setModalAlert] = useState(false);
  const { signer, address, contract, ethprice } = useContext(AuthContext);
  const [donation_, setdonation_] = useState({
    donationsRaised: 0,
    targetedAmount: 0,
    description: '',
    endDate: 0,
  });

  const getDonationPercentage = () => {
    let fixVal = 2;
    let percentage =
      (parseInt(
        Number(
          ethers.utils.formatEther(donation_.donationsRaised.toString()) *
            ethprice
        )
      ) /
        parseInt(
          Number(
            ethers.utils.formatEther(donation_.targetedAmount.toString()) *
              ethprice
          )
        )) *
      100;

    if (percentage >= 90) {
      fixVal = 0;
    }

    console.log(percentage);
    return parseFloat(
      (parseInt(
        Number(
          ethers.utils.formatEther(donation_.donationsRaised.toString()) *
            ethprice
        )
      ) /
        parseInt(
          Number(
            ethers.utils.formatEther(donation_.targetedAmount.toString()) *
              ethprice
          )
        )) *
        100
    ).toFixed(fixVal);
  };

  const targetedAmount = () => {
    return (
      Number(ethers.utils.formatEther(donation_.targetedAmount.toString())) *
      ethprice
    ).toLocaleString();
  };

  const donationRaised = () => {
    return (
      Number(ethers.utils.formatEther(donation_.donationsRaised.toString())) *
      ethprice
    ).toLocaleString();
  };
  console.log('donationRaised');

  useEffect(() => {
    if (address) {
      const donation = async () => {
        const data = await signer.getDonation(id);
        const doners = await signer.getDonersOfDonation(id);

        setdoners(doners);
        console.log('get doners', doners);
        setdonation_(data);
        console.log(data);
      };
      donation();
    }
  }, [signer, loading]);

  console.log(parseInt(targetedAmount()));
  const addDonation = async (value = amount) => {
    const amount_ = ethers.utils.parseUnits(value, 'ether');

    let transaction = await signer.addDonation(id, {
      value: amount_,
    });
    setloading(true);
    let hash = await transaction.wait();
    setModal(false);
    setloading(false);
    setModalAlert(true);
  };

  return (
    <div className="space-y-4 col-span-full mt-5 lg:col-span-2">
      <section>
        <div class="relative max-w-screen-xl px-2 py-8 mx-auto">
          <div class="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
            <div class="grid grid-cols-1 gap-4 md:grid-cols-1">
              <div class="w-full h-full">
                <img
                  alt={donation_.title}
                  class="object-cover rounded-xl w-full h-96"
                  src={donation_.hash}
                />
              </div>
            </div>

            <div class="sticky top-0">
              <div class="flex justify-between">
                <div class="max-w-[35ch]">
                  <h1 class="text-2xl font-bold dark:text-gray-300">
                    {donation_.title}
                  </h1>

                  <div className="flex flex-row items-center space-x-2">
                    <ion-icon
                      name="cash-outline"
                      class="text-xl dark:text-gray-200"
                    ></ion-icon>
                    <p class="text-lg font-bold dark:text-gray-200">
                      {/* $119.99/$20,000.00 targetedAmount= */}
                      {/* {Math.floor(getDonationPercentage()) >= 100
                        } */}
                      {Math.floor(getDonationPercentage()) >= 100
                        ? targetedAmount() +
                          '/' +
                          targetedAmount() +
                          '+' +
                          '  Target Exceeded 🎉'
                        : donationRaised() + '/' + targetedAmount()}
                    </p>
                  </div>
                  {Math.floor(getDonationPercentage()) >= 100 ? (
                    <div className="flex flex-row items-center space-x-2">
                      <p class="text-lg font-bold dark:text-gray-200">
                        {'+'}
                        {parseInt(donationRaised()) -
                          parseInt(targetedAmount()) +
                          ' USD'}
                      </p>
                    </div>
                  ) : (
                    ''
                  )}
                </div>
              </div>
              <details class="relative mt-4 group">
                <summary class="block">
                  <div>
                    <div class="prose max-w-none group-open:hidden">
                      <p className="dark:text-gray-200">
                        {truncateString(donation_.description.toString(), 60)}
                      </p>
                    </div>

                    <span class="mt-4  dark:text-gray-200 text-sm font-medium underline cursor-pointer group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0">
                      Read More
                    </span>
                  </div>
                </summary>

                <div class="pb-6 prose max-w-none dark:text-gray-300">
                  {donation_.description}
                </div>
              </details>
              <div class="flex justify-between ">
                <span class="text-base font-medium text-blue-700 dark:text-white">
                  Donations
                </span>
                <span class="text-sm font-medium text-blue-700 dark:text-white">
                  {Math.floor(getDonationPercentage()) >= 100
                    ? '100% +'
                    : getDonationPercentage() + '%'}
                </span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                <div
                  class={`${
                    Math.floor(getDonationPercentage()) >= 100
                      ? `bg-green-600 h-4 rounded-full`
                      : 'bg-blue-600 h-4 rounded-full '
                  }`}
                  style={{
                    width: `${
                      Math.floor(getDonationPercentage()) >= 100
                        ? 100
                        : Math.floor(getDonationPercentage())
                    }%`,
                  }}
                ></div>
              </div>
              <div class="flex justify-between py-4 ">
                <span class="text-base font-medium text-gray-700 dark:text-white">
                  {doners.length}+ Donated
                </span>
                <div className=" bg-blue-600 py-1 px-3 text-white text-lg rounded-full overflow-hidden mb-3 ">
                  {dateFormat(
                    (new Date(donation.endDate.toString()), 'dd mmm yy')
                  )}
                </div>
              </div>
              <button
                onClick={() => {
                  setModal(true);
                }}
                className="inline-block -mt-10 px-8 py-3 text-lg font-medium text-white transition  rounded-full w-full bg-gradient-to-r from-fuchsia-600 to-pink-600 focus:outline-none focus:ring"
              >
                {loading ? <Spinner /> : 'Donate'}
              </button>
              <div className="flex flex-row items-end justify-end">
                <RWebShare
                  data={{
                    text: 'Hi, check out this donation on mydonate',
                    url: `https://mydonate2.vercel.app/${donation_.id}`,
                    title: 'Mydonate',
                  }}
                  onClick={() => console.log('shared successfully!')}
                >
                  <ShareIcon className="h-6 dark:text-white mt-2 text-gray-600" />
                </RWebShare>
              </div>
              <details class="relative mt-4 group">
                <div class="pb-6 prose max-w-none dark:text-gray-300">
                  <div class="overflow-x-auto">
                    <table class="min-w-full text-sm divide-y divide-gray-200">
                      <thead>
                        <tr>
                          <th class=" font-medium text-left text-gray-900 whitespace-nowrap">
                            <div class="flex items-center">Address</div>
                          </th>
                          <th class=" font-medium text-left text-gray-900 whitespace-nowrap">
                            <div class="flex items-center">Amount</div>
                          </th>
                          <th class="font-medium text-left text-gray-900 whitespace-nowrap">
                            <div class="flex items-center">Date</div>
                          </th>
                        </tr>
                      </thead>

                      <tbody class="divide-y-0 divide-gray-50">
                        {doners
                          .map(doners => (
                            <tr>
                              <td class="py-2 text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                {/* <strong class="bg-green-100 text-green-700 px-3 py-1.5 rounded text-xs font-medium"> */}
                                {ellipseAddress(doners.doner)}
                                {/* </strong> */}
                              </td>
                              <td class=" text-gray-700 dark:text-gray-100 whitespace-nowrap">
                                {ethers.utils.formatEther(
                                  doners.amount.toString()
                                )}{' '}
                                ETH
                              </td>
                              <td class=" text-gray-700 dark:text-gray-100 whitespace-nowrap">
                                {timeConverter(doners.date.toString())}
                              </td>
                            </tr>
                          ))
                          .reverse()}
                      </tbody>
                    </table>
                  </div>
                </div>

                <summary class="block">
                  <div>
                    <span class="mt-4  dark:text-gray-200 text-sm font-medium underline cursor-pointer group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0">
                      View Doners
                    </span>
                  </div>
                </summary>

                <div></div>
              </details>
            </div>
          </div>
        </div>
      </section>
      <Modal
        state={modal}
        onClick={() => {
          setModal(false);
        }}
      >
        <p className="text-lg dark:text-gray-200 py-5">Filter Donations</p>
        <div className="space-y-4">
          <div
            onClick={() => {
              addDonation('5');
            }}
            className="text-center cursor-pointer border-[1px] border-opacity-30 text-lg border-gray-600 rounded-lg w-full py-2 bg-green-300 text-gray-700 "
          >
            5 ETH
          </div>
          <div
            onClick={() => {
              addDonation('10');
            }}
            className="text-center cursor-pointer border-[1px] border-opacity-30 text-lg border-gray-600 rounded-lg w-full py-2 bg-blue-300 text-gray-700 "
          >
            10 ETH
          </div>
          <div
            onClick={() => {
              addDonation('15');
            }}
            className="text-center cursor-pointer border-[1px] border-opacity-30 text-lg border-gray-600 rounded-lg w-full py-2 bg-purple-300 text-gray-700 "
          >
            15 ETH
          </div>
          <div className="">
            <label
              htmlFor="company-website"
              className="block text-md font-medium dark:text-gray-200 text-gray-700"
            >
              Input Manually
            </label>

            <input
              type="number"
              value={amount}
              onChange={e => {
                setamount(e.target.value);
              }}
              placeholder="Enter amount manually"
              class=" mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <button
            onClick={() => {
              addDonation();
            }}
            type="button"
            className="w-full inline-flex justify-center rounded-full border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700   sm:w-full sm:text-sm"
          >
            {loading ? <Spinner /> : 'Submit'}
            {/* Submit */}
          </button>
        </div>
      </Modal>
      <Modal
        state={modalAlert}
        onClick={() => {
          setModalAlert(false);
          window.location.href = '/'

        }}
      >
        <p className="text-2xl dark:text-gray-200 py-5">Thank You 💖</p>
        <div className="space-y-4">
          <p className="text-lg dark:text-gray-200">
            The mydonate team sincerely appreciates your generosity and
            contribution to improving the world.
          </p>
        </div>
      </Modal>
    </div>
  );
}

export default Home;
