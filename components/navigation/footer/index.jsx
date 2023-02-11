import React from 'react';
// import { div } from "react-router-dom";
import Link from 'next/link';
function Footer() {
  return (
    <footer className="bg-white dark:text-white dark:bg-gray-800 py-20">
      <div className="max-w-7.5xl mx-auto  px-4 sm:px-6">
        {/* <div class="max-w-screen-xl px-4 pt-16 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-24"> */}
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div class="flex justify-start text-teal-600 sm:justify-start">
              <img src="/images/logo.svg" className="w-12" />
            </div>

            <p class="max-w-md mx-auto mt-6 leading-relaxed text-left dark:text-white text-gray-500 sm:max-w-xs sm:mx-0 sm:text-left">
              With MyDonate, all individuals and organisations have to their
              disposer tools they need to raise funds and share their cause far
              and wide and make use of the power of generosity through our usage
              of blockchain technology.
            </p>

            <ul class="flex justify-start gap-6 mt-8 md:gap-8 sm:justify-start">
            
              <li>
                <a
                  href="https://www.instagram.com/mydonateio/"
                  rel="noopener noreferrer"
                  target="_blank"
                  class="text-teal-700 transition hover:text-teal-700/75"
                >
                  <span class="sr-only">Instagram</span>
                  <svg
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://twitter.com/MyDonateio"
                  rel="noopener noreferrer"
                  target="_blank"
                  class="text-teal-700 transition hover:text-teal-700/75"
                >
                  <span class="sr-only">Twitter</span>
                  <svg
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://www.youtube.com/channel/UCI-GeRrrplWQEwAY5vd4mCw"
                  rel="noopener noreferrer"
                  target="_blank"
                  class="text-teal-700 transition hover:text-teal-700/75"
                >
                  <span class="sr-only">Youtube</span>
                  <svg
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                 <path d="M4.652 0h1.44l.988 3.702.916-3.702h1.454l-1.665 5.505v3.757h-1.431v-3.757l-1.702-5.505zm6.594 2.373c-1.119 0-1.861.74-1.861 1.835v3.349c0 1.204.629 1.831 1.861 1.831 1.022 0 1.826-.683 1.826-1.831v-3.349c0-1.069-.797-1.835-1.826-1.835zm.531 5.127c0 .372-.19.646-.532.646-.351 0-.554-.287-.554-.646v-3.179c0-.374.172-.651.529-.651.39 0 .557.269.557.651v3.179zm4.729-5.07v5.186c-.155.194-.5.512-.747.512-.271 0-.338-.186-.338-.46v-5.238h-1.27v5.71c0 .675.206 1.22.887 1.22.384 0 .918-.2 1.468-.853v.754h1.27v-6.831h-1.27zm2.203 13.858c-.448 0-.541.315-.541.763v.659h1.069v-.66c.001-.44-.092-.762-.528-.762zm-4.703.04c-.084.043-.167.109-.25.198v4.055c.099.106.194.182.287.229.197.1.485.107.619-.067.07-.092.105-.241.105-.449v-3.359c0-.22-.043-.386-.129-.5-.147-.193-.42-.214-.632-.107zm4.827-5.195c-2.604-.177-11.066-.177-13.666 0-2.814.192-3.146 1.892-3.167 6.367.021 4.467.35 6.175 3.167 6.367 2.6.177 11.062.177 13.666 0 2.814-.192 3.146-1.893 3.167-6.367-.021-4.467-.35-6.175-3.167-6.367zm-12.324 10.686h-1.363v-7.54h-1.41v-1.28h4.182v1.28h-1.41v7.54zm4.846 0h-1.21v-.718c-.223.265-.455.467-.696.605-.652.374-1.547.365-1.547-.955v-5.438h1.209v4.988c0 .262.063.438.322.438.236 0 .564-.303.711-.487v-4.939h1.21v6.506zm4.657-1.348c0 .805-.301 1.431-1.106 1.431-.443 0-.812-.162-1.149-.583v.5h-1.221v-8.82h1.221v2.84c.273-.333.644-.608 1.076-.608.886 0 1.18.749 1.18 1.631v3.609zm4.471-1.752h-2.314v1.228c0 .488.042.91.528.91.511 0 .541-.344.541-.91v-.452h1.245v.489c0 1.253-.538 2.013-1.813 2.013-1.155 0-1.746-.842-1.746-2.013v-2.921c0-1.129.746-1.914 1.837-1.914 1.161 0 1.721.738 1.721 1.914v1.656z"/>                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://www.pinterest.com/mydonateio/?invite_code=60f6dc501ad9401b94bfd6528b3613a2&sender=1023091377757617650"
                  rel="noopener noreferrer"
                  target="_blank"
                  class="text-teal-700 transition hover:text-teal-700/75"
                >
                  <span class="sr-only">Pinterest</span>
                  <svg
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
<path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" fill-rule="evenodd" clip-rule="evenodd"/>                  </svg>
                </a>
              </li>

           
              <li>
                <a
                  href="https://www.tiktok.com/@mydonateio"
                  rel="noopener noreferrer"
                  target="_blank"
                  class="text-teal-700 transition hover:text-teal-700/75"
                >
                  <svg
                                        fill="currentColor"

                    width="27px" height="27px" viewBox="0 0 512 512" id="icons" xmlns="http://www.w3.org/2000/svg"><path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z" /></svg>
                </a>
              </li>
            </ul>
          </div>

          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 md:grid-cols-4">
            <div class="text-left sm:text-left">
              <p class="text-lg font-medium text-gray-900 dark:text-gray-300 ">
                About Us
              </p>

              <nav class="mt-8">
                <ul class="space-y-4 text-sm ">
                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75 dark:text-gray-200"
                      href="/about"
                    >
                      Company History
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div class="text-left sm:text-left">
              <p class="text-lg font-medium text-gray-900 dark:text-gray-300">
                Fundraising for
              </p>

              <nav class="mt-8">
                <ul class="space-y-4 text-sm">
                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75 dark:text-gray-200"
                      href="/donations"
                    >
                      Environment
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75 dark:text-gray-200"
                      href="/donations"
                    >
                      Education
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75 dark:text-gray-200"
                      href="/donations"
                    >
                      Famine
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75 dark:text-gray-200"
                      href="/donations"
                    >
                      Health
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75 dark:text-gray-200"
                      href="/donations"
                    >
                      Community
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75 dark:text-gray-200"
                      href="/donations"
                    >
                      War
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75 dark:text-gray-200"
                      href="/donations"
                    >
                      Disaster
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75 dark:text-gray-200"
                      href="/donations"
                    >
                      Others
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div class="text-left sm:text-left">
              <p class="text-lg font-medium text-gray-900 dark:text-gray-300">
                Helpful Links
              </p>

              <nav class="mt-8">
                <ul class="space-y-4 text-sm">
                  <li>
                    <a
                      class="text-gray-700 transition hover:text-gray-700/75 dark:text-gray-200"
                      href="/faq"
                    >
                      FAQs
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div class="text-left sm:text-left">
              <p class="text-lg font-medium text-gray-900 dark:text-gray-300">
                Contact Us
              </p>

              <ul class="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    class="flex items-center justify-start gap-1.5 sm:justify-start"
                    href="/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5 dark:text-gray-100 text-gray-900 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>

                    <span class="text-gray-700 dark:text-gray-100">
                      mydonateio@gmail.com
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    class="flex items-center justify-start gap-1.5 sm:justify-start"
                    href="/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5 dark:text-gray-200 text-gray-900 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>

                    <span class="text-gray-700 dark:text-gray-100">
                      +233 509287309{' '}
                    </span>
                  </a>
                </li>

                <li class="flex items-start justify-start gap-1.5 sm:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-gray-900 dark:text-gray-200 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>

                  <address class="-mt-0.5 not-italic text-gray-700 dark:text-gray-100">
                    Bungalow 27, Nkwabeng Police Clinic
                  </address>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="pt-6 mt-12 border-t border-gray-100">
          <div class="text-left sm:flex sm:justify-between sm:text-left">
            <p class="text-sm text-gray-500 dark:text-gray-200">
              <span class="block sm:inline">All rights reserved.</span>

              <a
                class="inline-block pr-3 pl-3 text-teal-600 underline transition dark:text-gray-200 hover:text-teal-600/75"
                href="/terms-condition"
              >
                Terms & Conditions
              </a>

              <span>&middot;</span>

              <a
                class="inline-block text-teal-600 underline transition dark:text-gray-200 hover:text-teal-600/75"
                href="/privacy-policy"
              >
                Privacy Policy
              </a>
            </p>

            <p class="mt-4 text-sm dark:text-gray-200 text-gray-500 sm:order-first sm:mt-0">
              &copy; 2023 sympodium
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
