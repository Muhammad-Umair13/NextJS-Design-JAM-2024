import React from 'react';

// Import Icons
// import { CiSearch } from "react-icons/ci";
// import { GoHeartFill } from "react-icons/go";
// import { GoBellFill } from "react-icons/go";
// import { IoMdSettings } from "react-icons/io";

const header = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="font-bold ml-3 text-[32px] text-[#3563E9]">MORENT</span>
          </a>
          <div className="md:ml-16 md:mr-auto flex flex-wrap items-center text-base justify-center relative">
          </div>
          <div className="inline-flex items-center border-0 py-1 px-3 text-base mt-4 md:mt-0 gap-5">
            <div>
              {/* <GoHeartFill className='border-2 rounded-[70px] size-10 p-2 max-lg:hidden' /> */}
            </div>
            <div>
              {/* <GoBellFill className='border-2 rounded-[70px] size-10 p-2 max-lg:hidden' /> */}
            </div>
            <div>
              {/* <IoMdSettings className='border-2 rounded-[70px] size-10 p-2 max-lg:hidden' /> */}
            </div>
            <div>
              {/* <Image src="/Img/profile.svg" alt='image' width={44} height={44} className='max-lg:hidden'></Image> */}
            </div>
          </div>
        </div>
      </header>

    </div>
  )
}

export default header;