import React from 'react'
import Image from 'next/image'
import { CiHome } from "react-icons/ci";
import { FaCarAlt } from "react-icons/fa";
import { CgInsights } from "react-icons/cg";

import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { IoMdSettings } from "react-icons/io";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoInvertModeOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
       <div className="flex flex-col lg:flex-row">
      {/* Main Menu */} 
      <div className="w-full lg:w-1/5 bg-white p-4 rounded-lg shadow-md mb-4 lg:mb-0 lg:block md:hidden max-sm:hidden"> 
      <ul className="space-y-4"> 
        <li className="font-bold text-white flex gap-2 bg-blue-500 h-10 items-center rounded-lg"><CiHome className='size-5'/>Dashboard</li>
        <li className="flex gap-2"><FaCarAlt className='size-5' />Car Rent</li>
        <li className="flex gap-2"><CgInsights className='size-5' />Insight</li>
        <li className="flex gap-2"><IoChatboxEllipsesOutline className='size-5' />Inbox</li>
        <li className="flex gap-2"><SlCalender className='size-5' />Calendar</li>
        <li className="flex gap-2 pt-10"><IoMdSettings className='size-5' />Settings</li>
        <li className="flex gap-2"><IoIosHelpCircleOutline className='size-5' />Help & Center</li>
        <li className="flex gap-2"><IoInvertModeOutline className='size-5' />Dark Mode</li>
        <li className="flex gap-2 pt-60"><CiLogout className='size-5' />Log Out</li>
      </ul>
      </div>

      {/* Main Content */} <div className="w-full lg:w-4/5 lg:pl-4"> <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

        {/* Details Rental */}
        <div className="col-span-2 bg-white p-4 rounded-lg shadow-md"> <div className="mb-4">
          <Image src="/Img/maps.svg" alt="Map" width={486} height={272} className="justify-center m-auto"/>
        </div>
          <div className="flex items-center mb-4">
            <Image src="/Img/Detail_Car1.svg" alt="Nissan GT-R" width={64} height={64} className="w-16 h-16 rounded-lg mr-4" /> <div> <h2 className="text-xl font-bold">Nissan GT-R</h2> <p className="text-gray-500">Sport Car</p> </div> </div> <div className="grid grid-cols-2 gap-4">
            <div>
              {/* Pick-Up Section */}
              <div className="flex flex-col space-y-2 p-3 rounded-lg shadow-sm bg-white">
                <div className="text-lg font-semibold text-blue-600">Pick-Up</div>
                <div className="flex flex-wrap gap-8 w-full max-sm:flex-col">
                  <div>
                    <label className="block text-gray-500 text-sm mb-1">Locations</label>
                    <select
                      className="border border-gray-300 rounded-md text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      style={{ width: "126px", height: "48px" }}
                    >
                      <option>Select your city</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-500 text-sm mb-1">Date</label>
                    <input
                      type="date"
                      className="border border-gray-300 rounded-md text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      style={{ width: "126px", height: "48px" }}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-500 text-sm mb-1">Time</label>
                    <select
                      className="border border-gray-300 rounded-md text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      style={{ width: "126px", height: "48px" }}
                    >
                      <option>Select your time</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* Drop-Off Section */}
              <div className="flex flex-col space-y-2 p-3 rounded-lg shadow-sm bg-white">
                <div className="text-lg font-semibold text-blue-600">Drop-Off</div>
                <div className="flex flex-wrap gap-8 w-full max-sm:flex-col">
                  <div>
                    <label className="block text-gray-500 text-sm mb-1">Locations</label>
                    <select
                      className="border border-gray-300 rounded-md text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      style={{ width: "126px", height: "48px" }}
                    >
                      <option>Select your city</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-500 text-sm mb-1">Date</label>
                    <input
                      type="date"
                      className="border border-gray-300 rounded-md text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      style={{ width: "126px", height: "48px" }}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-500 text-sm mb-1">Time</label>
                    <select
                      className="border border-gray-300 rounded-md text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      style={{ width: "126px", height: "48px" }}
                    >
                      <option>Select your time</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4"> <h3 className="text-xl font-bold">Total Rental Price</h3> <p className="text-2xl font-bold text-blue-600">$80.00</p> </div> </div>

        {/* Top 5 Car Rental */}
        <div className="bg-white p-4 rounded-lg shadow-md h-screen max-sm:row-start-2">

          {/* <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg"> */}
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Top 5 Car Rental</h2>
          <div className="relative flex items-center justify-center mb-6">
            <div className="w-40 h-40 rounded-full bg-blue-900 flex items-center justify-center">
              <span className="text-2xl font-bold z-10 text-white">72,030</span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-blue-700"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-blue-500"></div>
            </div>
          </div>
          <ul className="space-2">
            <li className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <span className="w-4 h-4 rounded-full bg-blue-900 mr-2"></span>
                <span>Sport Car</span>
              </div>
              <span>17,439</span>
            </li>
            <li className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <span className="w-4 h-4 rounded-full bg-blue-700 mr-2"></span>
                <span>SUV</span>
              </div>
              <span>9,478</span>
            </li>
            <li className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <span className="w-4 h-4 rounded-full bg-blue-500 mr-2"></span>
                <span>Coupe</span>
              </div>
              <span>18,197</span>
            </li>
            <li className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <span className="w-4 h-4 rounded-full bg-blue-300 mr-2"></span>
                <span>Hatchback</span>
              </div>
              <span>12,510</span>
            </li>
            <li className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <span className="w-4 h-4 rounded-full bg-blue-100 mr-2"></span>
                <span>MPV</span>
              </div>
              <span>14,406</span>
            </li>
          </ul>
        </div>

        {/* Recent Transaction */}
        <div className="col-span-3 bg-white p-4 rounded-lg shadow-md mt-4 lg:mt-0">
          <h3 className="text-xl font-bold mb-4">Recent Transactions</h3> <table className="w-full">
            <thead> <tr> <th className="text-left">Car Model</th> <th className="text-left">Type</th>
              <th className="text-left">Date</th> <th className="text-left">Price</th> </tr> </thead> <tbody>
              <tr> <td>Nissan GT-R</td> <td>Sport Car</td> <td>20 July 2022</td> <td>$80.00</td> </tr> <tr>
                <td>Honda Civic</td> <td>SUV</td> <td>18 July 2022</td> <td>$60.00</td> </tr> <tr>
                <td>Toyota Corolla</td>
                <td>Coupe</td>
                <td>15 July 2022</td>
                <td>$50.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default page