import Link from 'next/link';
import React, { useState, useRef, useEffect, useContext } from 'react';
import { AuthContext } from '../../../../utils/AuthProvider';
import GradientButton from '../../../utility/bottons/gradientButton';

const Card = ({
  title,
  description,
  image,
  endDate,
  targetedAmount,
  country,
  id,
}) => {
  const { address, connect } = useContext(AuthContext);

  return (
    <div>
      <div class="h-min bg-white rounded-2xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#" className="w-full h-full">
          <img
            class="rounded-t-lg h-52  object-cover w-full"
            src={image}
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
              {/* Australia Fire Outbreak */}
            </h5>
          </a>
          <p class="mb-3 font-normal text-lg text-gray-700 dark:text-gray-400">
            {description}
            {/* Supporting get of australias' fire Outbreak */}
          </p>
          <div className="flex flex-row space-x-2 items-center">
            <ion-icon
              name="time-outline"
              class="text-2xl dark:text-gray-100"
            ></ion-icon>
            <p className="text-xl dark:text-gray-100">{endDate}</p>
          </div>
          <div className="flex flex-row space-x-2 items-center">
            <ion-icon
              name="wallet-outline"
              class="text-2xl dark:text-gray-100"
            ></ion-icon>
            <p className="text-xl w-max dark:text-gray-200">
              ${targetedAmount}
            </p>
          </div>
          <div className="flex flex-row space-x-2 items-center">
            <ion-icon
              name="earth-outline"
              class="text-2xl dark:text-gray-200"
            ></ion-icon>
            <p className="text-xl dark:text-gray-100">{country}</p>
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
            <Link href={`/${id}`}>
              <GradientButton title={'Read more'}></GradientButton>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
