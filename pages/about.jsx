import React from 'react';
import Layout from '../components/layouts/primary';

const About = () => {
  return (
    <Layout>
      <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-24">
        <div class="max-w-xl mx-auto text-center">
          <h2 class="text-4xl dark:text-gray-200 font-bold tracking-tight sm:text-5xl">
            About My Donate
          </h2>

          <p class="max-w-6xl  dark:text-gray-300 mt-4 text-gring-offset-warm-gray-500">
            The world can only become a better if we all dream of making the
            world a better place to live in. That desire to offer alms to
            people, fix communities, or better still contribute to the
            development of a nation. At Mydonate, we encourage all individuals
            and organisations help in this regard with any of the widely used
            and approved cryptocurrency because that is the only way we can make
            the world a better place.
          </p>

          <p class="max-w-6xl dark:text-gray-300 mx-auto mt-4 text-gring-offset-warm-gray-500">
            What we intend to do is to create and contribute to the giving layer
            of the internet with blockchain technology: a community where all
            individuals, organisations, and nonprofits can champion causes that
            are of societal concern and raise funds to make a change. With
            Mydonate, all individuals and organisations have to their disposer
            tools they need to raise funds and share their cause far and wide
            and make use of the power of generosity through our usage of
            blockchain technology.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-3 sm:gap-16">
          <div>
            <div className="mx-auto flex flex-row justify-center items-center">
              <ion-icon
                name="hand-right-outline"
                class="text-4xl p-4 rounded-full bg-green-300  mx-auto shadow-xl"
              ></ion-icon>
            </div>

            <blockquote class="flex flex-col justify-between p-12 -mt-6 text-center rounded-lg shadow-xl">
              <p class="text-lg font-bold dark:text-gray-300 text-gray-700">
                Reach
              </p>

              <p class="mt-4 text-sm dark:text-gray-300 text-gray-500">
                Mydonate helps you share your story far and wide over various
                platforms to amass support for your cause. We as also have a
                team that look for great stories to amplify and share with the
                media and our community.
              </p>
            </blockquote>
          </div>

          <div>
            <div className="mx-auto flex flex-row justify-center items-center">
              <ion-icon
                name="refresh-outline"
                class="text-4xl p-4 rounded-full bg-green-300  mx-auto shadow-xl"
              ></ion-icon>
            </div>

            <blockquote class="flex flex-col justify-between p-12 -mt-6 text-center rounded-lg shadow-xl">
              <p class="text-lg font-bold dark:text-gray-300 text-gray-700">
                Restoration
              </p>

              <p class="mt-4 text-sm dark:text-gray-300 text-gray-500">
                We intend to help individuals, families and communities get back
                on their feet as early as possible through our platform. Create
                a fundraising, make use of the available tools to get the
                community donate funds to your fundraising to undertake whatever
                cause.
              </p>
            </blockquote>
          </div>

          <div className="">
            <div className="mx-auto flex flex-row justify-center items-center">
              <ion-icon
                name="lock-closed-outline"
                class="text-4xl p-4 rounded-full bg-green-300  mx-auto shadow-xl"
              ></ion-icon>
            </div>

            <blockquote class="flex flex-col dark:border-1 dark:border-gray-200 justify-between p-12 -mt-6 text-center rounded-lg shadow-xl">
              <p class="text-lg font-bold dark:text-gray-300 text-gray-700">
                Trust & Safety
              </p>

              <p class="mt-4 text-sm dark:text-gray-300 text-gray-500">
                We have a trusted team that works timelessly to ensure safety
                and protect against fraud on the platform. All processes and
                activities on the platform flows on the blockchain hence making
                them transparent to end users. Blockchain is a proven technology
                in today’s world with regards to data safety and hence we are
                taking such step.
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
