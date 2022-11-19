import React, { useState, useEffect, useContext } from 'react';

import Sidebar from '../../components/partials/profile/Sidebar';
import Header from '../../components/partials/profile/Header';
import WelcomeBanner from '../../components/partials/profile/dashboard/WelcomeBanner';
import { AuthContext } from '../../utils/AuthProvider';
import { numDaysBetween, truncateString } from '../../lib/utilities';
import { ethers } from 'ethers';
import Modal from '../../components/utility/modal';
import Spinner from '../../components/utility/spinner/Spinner';

function Fund() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [id, setid] = useState(0);
  const { signer, address } = useContext(AuthContext);
  const [donation, setdonation] = useState([]);
  const [status, setstatus] = useState('');
  const [modalAlert, setModalAlert] = useState(false);
  const [date, setdate] = useState(new Date());
  const [loading, setloading] = useState(false);
  const getDuration = () => {
    var date2 = new Date(date);
    var date1 = new Date();
    var Difference_In_Time = date2.getTime() - date1.getTime();

    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    if (Difference_In_Days < 1) {
      return 0;
    }
    return Math.round(Difference_In_Days);
  };
  getDuration();

  useEffect(() => {
    if (address) {
      const myDonations = async () => {
        const donation = await signer.fetchAllDonationItems();
        const filter = donation.filter(p => p.user?._address === address);
        setdonation(filter);
      };
      myDonations();
    }
  }, [signer]);

  console.log(donation);

  const addPinDonation = async amount => {
    console.log('donation amount', amount);
    console.log('donation id', id);
    const date_ = new Date(date);

    const amount_ = ethers.utils.parseUnits(amount, 'ether');
    let transaction = await signer.pinDonation(
      id,
      getDuration(),
      Math.floor(date_.getTime() / 1000),
      {
        value: amount_,
      }
    );
    setloading(true);
    await transaction.wait();
    setloading(false);
    alert('donation has been pinned');
  };

  const rejectDonation = async id => {
    let transaction = await signer.rejectDonation(id);
    await transaction.wait();
    alert('donation ejected');
  };
  return (
    <>
      <div className="flex h-screen overflow-hidden dark:bg-gray-900 font-Montserrat">
        {/* Sidebar */}

        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Content are */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {/*  Site header */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <main>
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
              {/* Welcome bannr */}
              <WelcomeBanner type="Admin" address={address} />
              {/* Cards */}
              <div className="sm:flex sm:justify-end sm:items-center mb-8">
                <div className="grid grid-flow-col sm:auto-cols-max justify-end sm:justify-end gap-2">
                  {/* button */}
                </div>
              </div>

              <div>
                <div class="overflow-x-auto">
                  <h2
                    className="font-semibold  dark:text-gray-600 pb-4
                   text-slate-800"
                  >
                    All Funds
                  </h2>

                  <div className="w-max md:w-max ">
                    <div className="relative">
                      <select
                        onChange={e => {
                          setstatus(e.target.value);
                        }}
                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-state"
                      >
                        <option value="all">All</option>
                        <option value="pending">Pending</option>
                        <option value="rejected">Rejected</option>
                        <option value="approved">Approved</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <table class="min-w-full text-sm divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th class="p-4 font-medium text-left text-gray-900 dark:text-gray-300 whitespace-nowrap">
                          <div class="flex items-center">Title</div>
                        </th>
                        <th class="p-4 font-medium text-left text-gray-900 dark:text-gray-300 whitespace-nowrap">
                          <div class="flex items-center">Description</div>
                        </th>
                        <th class="p-4 font-medium text-left text-gray-900 dark:text-gray-300 whitespace-nowrap">
                          <div class="flex items-center">Status</div>
                        </th>
                        <th class="p-4 font-medium text-left text-gray-900 dark:text-gray-300 whitespace-nowrap">
                          <div class="flex items-center">Target</div>
                        </th>
                        <th class="p-4 font-medium text-left text-gray-900 dark:text-gray-300 whitespace-nowrap">
                          <div class="flex items-center">Coutry</div>
                        </th>
                      </tr>
                    </thead>

                    <tbody class="divide-y divide-gray-100">
                    {donation
                        ?.filter((p) =>
                          status === 'pending'
                            ? p.donationstatus.isApproved === false
                            : status === 'rejected'
                            ? p.donationstatus.isRejected === true
                            : status === 'approved'
                            ? p.donationstatus.isApproved === true
                            : donation
                        )
                        .map(donationItem => (
                          <tr>
                            <td class="p-4 dark:text-gray-200 font-medium text-gray-900 whitespace-nowrap">
                              {donationItem.title}{' '}
                            </td>
                            <td class="p-4 dark:text-gray-200 text-gray-700 whitespace-nowrap">
                              {truncateString(
                                donationItem.description.toString(),
                                20
                              )}{' '}
                            </td>
                            <td class="p-4 text-gray-700 whitespace-nowrap">
                              {donationItem.donationstatus.isApproved ===
                                false &&
                              !donationItem.donationstatus.isRejected ===
                                true ? (
                                <strong class="bg-yellow-100 text-yellow-700 px-3 py-1.5 rounded text-xs font-medium">
                                  Pending
                                </strong>
                              ) : donationItem.donationstatus.isApproved ===
                                true ? (
                                <strong class="bg-green-100 text-green-700 px-3 py-1.5 rounded text-xs font-medium">
                                  Approved
                                </strong>
                              ) : donationItem.donationstatus.isRejected ===
                                true ? (
                                <strong class="bg-red-100 text-red-700 px-3 py-1.5 rounded text-xs font-medium">
                                  Rejected
                                </strong>
                              ) : (
                                ''
                              )}
                            </td>
                            <td class="p-4 dark:text-gray-200 text-gray-700 whitespace-nowrap">
                              {ethers.utils.formatEther(
                                donationItem.targetedAmount.toString()
                              )}{' '}
                              {'ETH'}
                            </td>
                            <td class="p-4 dark:text-gray-200 text-gray-700 whitespace-nowrap">
                              {donationItem.user.country}
                            </td>
                            <td class="p-4 space-x-3 text-gray-700 whitespace-nowrap">
                              {Math.round(
                                numDaysBetween(
                                  Number(donationItem.endDate.toString()),
                                  new Date()
                                )
                              ) <= 1 ? (
                                <button
                                  className="w-max inline-flex justify-center rounded-full border border-transparent shadow-sm px-4 py-1 bg-red-600 text-base font-medium text-white hover:bg-red-700   sm:w-max sm:text-sm"
                                  onClick={() => {
                                    rejectDonation(donationItem.id.toString());
                                  }}
                                >
                                  Eject Donation (ended)
                                </button>
                              ) : (
                                ''
                              )}
                            </td>
                            <td class="p-4 text-gray-700 whitespace-nowrap">
                              {donationItem.donationstatus.isApproved ===
                              true ? (
                                <button
                                  type="button"
                                  disabled={
                                    donationItem.donationstatus.isPinned ===
                                    true
                                  }
                                  className="w-max  inline-flex justify-center rounded-full border border-transparent shadow-sm px-4 py-1 bg-blue-600 text-base font-medium text-white hover:bg-blue-700   sm:w-max sm:text-sm"
                                  onClick={() => {
                                    setModalAlert(true);
                                    setid(donationItem.id.toString());
                                    // approveDonation(donationItem.id.toString());
                                  }}
                                >
                                  {donationItem.donationstatus.isPinned === true
                                    ? 'Pinned'
                                    : 'Pin Donation'}
                                </button>
                              ) : (
                                ''
                              )}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Modal
        state={modalAlert}
        onClick={() => {
          setModalAlert(false);
          window.location.href = '/'
        }}
      >
        <p className="text-2xl dark:text-gray-200 py-5">Pin Donation 📍</p>

        <div className=" flex flex-row justify-between space-x-4">
          <div className="w-full">
            <label
              htmlFor="company-website"
              className="block text-md font-medium dark:text-gray-200 text-gray-700"
            >
              End Date for pin dontation
            </label>
            <input
              type="date"
              id="base-input"
              required
              value={date}
              onChange={e => {
                setdate(e.target.value);
              }}
              class=" mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-lg pt-4 dark:text-gray-200">
            This period for your {getDuration()}-day pin donation will cost you{' '}
            {''}
            {getDuration() * 0.02} ETH.
          </p>
        </div>

        <button
          onClick={() => {
            addPinDonation(`${getDuration() * 0.02}`);
          }}
          type="button"
          className="w-full mt-3 inline-flex justify-center rounded-full border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700   sm:w-full sm:text-sm"
        >
          {loading ? <Spinner /> : ''}
          Add Pin Donation
        </button>
      </Modal>
    </>
  );
}

export default Fund;
