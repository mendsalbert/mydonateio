import React from 'react';
import Card from './card';
const index = ({ name, color }) => {
  return (
    <div className="relative flex flex-col space-y-1 ">
      <p className="text-2xl py-4 dark:text-gray-100">Categories</p>

      <div class="flex overflow-x-scroll pb-10 hide-scroll-bar snap-x">
        <div className="flex flex-nowrap mt-5">
          <div class="inline-block px-3 w-6/12 snap-center">
            <Card
              name={'Environment'}
              color={'bg-green-800'}
              icon={'leaf-outline'}
            />
          </div>
          <div class="inline-block px-3 w-6/12 snap-center">
            <Card
              name={'Education'}
              color={'bg-red-400'}
              icon={'book-outline'}
            />
          </div>
          <div class="inline-block px-3 snap-center">
            <Card
              name={'Disaster'}
              color={'bg-yellow-400'}
              icon={'flask-outline'}
            />
          </div>
          <div class="inline-block px-3 snap-center">
            <Card
              name={'Health'}
              color={'bg-green-400'}
              icon={'pulse-outline'}
            />
          </div>
          <div class="inline-block px-3 snap-center">
            <Card
              name={'Famine'}
              color={'bg-blue-400'}
              icon={'fast-food-outline'}
            />
          </div>
          <div class="inline-block px-3 snap-center">
            <Card
              name={'Community'}
              color={'bg-pink-400'}
              icon={'people-outline'}
            />
          </div>

          <div class="inline-block px-3 snap-center">
            <Card name={'War'} color={'bg-amber-600'} icon={'sad-outline'} />
          </div>

          <div class="inline-block px-3 snap-center">
            <Card
              name={'Others'}
              color={'bg-slate-600'}
              icon={'help-outline'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
