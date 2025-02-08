import React from 'react'

const footer = () => {
  return (
    <div>
      <footer className="body-font mt-auto max-lg:mt-[900px]">
        <div className="text-gray-600 container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-[292px] flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center">
              <span className="ml-3 font-bold text-[32px] text-[#3563E9]">MORENT</span>
            </a>
            <p className="mt-2 font-medium text-base">
              Our vision is to provide convenience and help increase your sales business.
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center justify-end">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="text-black font-semibold text-xl mb-3">
                About
              </h2>
              <nav className="list-none">
                <li className="mb-3">
                  <a className="text-[#131313] font-medium text-base leading-6">How it works</a>
                </li>
                <li className="mb-3">
                  <a className="text-[#131313] font-medium text-base leading-6">Featured</a>
                </li>
                <li className="mb-3">
                  <a className="text-[#131313] font-medium text-base leading-6">Partnership</a>
                </li>
                <li className="mb-3">
                  <a className="text-[#131313] font-medium text-base leading-6">Business Relation</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="text-black font-semibold text-xl mb-3">
                Community
              </h2>
              <nav className="list-none mb-10">
                <li className="mb-3">
                  <a className="text-[#131313] font-medium text-base leading-6">Events</a>
                </li>
                <li className="mb-3">
                  <a className="text-[#131313] font-medium text-base leading-6">Blog</a>
                </li>
                <li className="mb-3">
                  <a className="text-[#131313] font-medium text-base leading-6">Podcast</a>
                </li>
                <li className="mb-3">
                  <a className="text-[#131313] font-medium text-base leading-6">Invite a friend</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="text-black font-semibold text-xl mb-3">
                Social
              </h2>
              <nav className="list-none mb-10">
                <li className="mb-3">
                  <a className="text-[#131313] font-medium text-base leading-6">Discord</a>
                </li>
                <li className="mb-3">
                  <a className="text-[#131313] font-medium text-base leading-6">Instagram</a>
                </li>
                <li className="mb-3">
                  <a className="text-[#131313] font-medium text-base leading-6">Twitter</a>
                </li>
                <li className="mb-3">
                  <a className="text-[#131313] font-medium text-base leading-6">Facebook</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <hr className='h-1 bg-[#131313]'></hr>
        <div className="text-black">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-sm text-center sm:text-left">
              © 2020 MORENT. All rights reserved
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start gap-8">
              <span className='bold'>Privacy & Policy</span>
              <span className='bold'>Terms & Condition</span>
            </span>
          </div>
        </div>
      </footer>


    </div>
  )
}

export default footer;