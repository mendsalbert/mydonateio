import React from 'react';
import Layout from '../components/layouts/primary/index';
const FAQ = () => {
  return (
    <Layout>
      <div class="space-y-4 mt-10">
        <details
          class="p-6 border-l-4 border-green-500 dark:bg-gray-800 dark:text-gray-100 bg-gray-50 group"
          open
        >
          <summary class="flex items-center justify-between cursor-pointer">
            <h5 class="text-lg font-medium dark:text-gray-100 text-gray-900">
              How Does MyDonate Work?
            </h5>

            <span class="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 bg-white rounded-full sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p class="mt-4 leading-relaxed dark:text-gray-300 text-gray-700">
            You can start your fundraising by providing the necessary details
            with regards to your fundraising and provide target funds. You will
            have access to a user dashboard to track your fundraising. You can
            also pin donations by specifying the pin donation duration to reach
            out to a wider audience of the community. MyDonate makes it
            incredibly easy to raise funds to support causes of societal
            concern.
          </p>
        </details>

        <details class="p-6 border-l-4 border-green-500 dark:bg-gray-800 bg-gray-50 group">
          <summary class="flex items-center justify-between cursor-pointer">
            <h5 class="text-lg font-medium dark:text-gray-200 text-gray-900">
              What Can I Raise Funds For?
            </h5>

            <span class="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 bg-white rounded-full sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p class="mt-4 leading-relaxed  dark:text-gray-300 text-gray-700">
            People raise funds for almost everything, including Environment,
            Education, Famine, Health, Community, War, Disaster and Others.
            We’re always amazed at the ways people use MyDonate to raise funds
            to support causes of societal concern.
          </p>
        </details>

        <details class="p-6 border-l-4 border-green-500 dark:bg-gray-800 bg-gray-50 group">
          <summary class="flex items-center justify-between cursor-pointer">
            <h5 class="text-lg font-medium dark:text-gray-200 text-gray-900">
              How are Fundraisers Safe?{' '}
            </h5>

            <span class="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 bg-white rounded-full sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p class="mt-4 leading-relaxed  dark:text-gray-300 text-gray-700">
            Fundraisers connect to the platform with their preferred wallet and
            as such, we advise them not to expose their private keys on the
            platform.
          </p>
        </details>

        <details class="p-6 border-l-4 border-green-500 dark:bg-gray-800 bg-gray-50 group">
          <summary class="flex items-center justify-between cursor-pointer">
            <h5 class="text-lg font-medium dark:text-gray-200 text-gray-900">
              How Can I Withdraw Funds?{' '}
            </h5>

            <span class="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 bg-white rounded-full sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p class="mt-4 leading-relaxed  dark:text-gray-300 text-gray-700">
            With your wallet provided in uploading your fundraising, donations
            made to your fundraising goes straight to the available wallet
            provided and can be used when needed even-though target funds have
            not been reached.
          </p>
        </details>

        <details class="p-6 border-l-4 border-green-500 dark:bg-gray-800 bg-gray-50 group">
          <summary class="flex items-center justify-between cursor-pointer">
            <h5 class="text-lg font-medium dark:text-gray-200 text-gray-900">
              Are There Any Deadlines or Time Limits?{' '}
            </h5>

            <span class="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 bg-white rounded-full sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p class="mt-4 leading-relaxed  dark:text-gray-300 text-gray-700">
            Once your fundraising has been approved, you can receive donations
            and make withdrawals as and when the funds are needed.
          </p>
        </details>

        <details class="p-6 border-l-4 border-green-500 dark:bg-gray-800 bg-gray-50 group">
          <summary class="flex items-center justify-between cursor-pointer">
            <h5 class="text-lg font-medium dark:text-gray-200 text-gray-900">
              What If I Do Not Reach My Target Funds?
            </h5>

            <span class="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 bg-white rounded-full sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p class="mt-4 leading-relaxed  dark:text-gray-300 text-gray-700">
            No problem. With MyDonate, your fundraising will still be available
            to the community to receive funds to support the cause you are
            championing if you have not reached target funds and fundraising
            date is due. Once you reach your target funds, the progress meter on
            your fundraising will show that you have received more than your
            target funds.
          </p>
        </details>
      </div>
    </Layout>
  );
};

export default FAQ;
