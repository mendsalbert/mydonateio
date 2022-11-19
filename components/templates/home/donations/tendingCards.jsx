import React from 'react';
import GradientButton from '../../../utility/bottons/gradientButton';

const TrendingCard = ({ title, description, image }) => {
  return (
    <div>
      <div class="max-w-sm w-max md:w-80 lg:w-80 h-min bg-white rounded-2xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#" className="w-full h-full">
          <img
            class="rounded-t-lg h-52  object-cover w-full"
            src={`/images/${image}`}
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-lg md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
              {/* Australia Fire Outbreak */}
            </h5>
          </a>
          <p class="mb-3 font-normal text-md md:text-lg text-gray-700 dark:text-gray-400">
            {description}
            {/* Supporting get of australias' fire Outbreak */}
          </p>
          <div className="flex flex-row space-x-2 items-center">
            <ion-icon
              name="time-outline"
              class="text-2xl dark:text-gray-100"
            ></ion-icon>
            <p className="text-xl dark:text-gray-100">15 days more</p>
          </div>
          <div className="flex flex-row space-x-2 items-center">
            <ion-icon
              name="wallet-outline"
              class="text-2xl dark:text-gray-100"
            ></ion-icon>
            <p className="text-xl w-max dark:text-gray-200">$1,000.00</p>
          </div>
          <div className="flex flex-row space-x-2 items-center">
            <ion-icon
              name="earth-outline"
              class="text-2xl dark:text-gray-200"
            ></ion-icon>
            <p className="text-xl dark:text-gray-100">Ghana</p>
          </div>
          <GradientButton title={'Read more'}></GradientButton>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
