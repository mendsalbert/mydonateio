import React, { useState, useEffect } from 'react';
import Header from '../../navigation/header';
import Footer from '../../navigation/footer';
function Layout(props) {
  
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F5] dark:bg-gray-900 overflow-hidden font-Montserrat">
      <section className="relative">
        <Header />
        <main className="flex-grow">
          {/* <div className="relative max-w-7xl mx-4 md:mx-auto px-2 sm:px-3 */}
          <div className="max-w-7.5xl mx-auto px-4 sm:px-6">
            <div className="py-12 md:py-20">
              <div className="max-w-sm mx-auto sm:max-w-xl  md:max-w-3xl lg:max-w-none">
                {props.children}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </section>
    </div>
  );
}

export default Layout;
