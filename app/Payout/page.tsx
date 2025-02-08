// app/payout.tsx
"use client";
import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import { useCart } from "@/app/cart-product/CartContext";

const Payment = () => {
  const { cart } = useCart();
  
  return (
    <div className="w-full bg-[#F6F7F9]">
      <div className="flex flex-col lg:flex-row lg:space-x-8 lg:min-h-screen">
        {/* Selected Products Section */}
        <div className="w-full lg:w-1/3 p-6">
          <h3 className="text-2xl font-bold mb-4">Your Selected Product(s):</h3>
          {cart.length > 0 ? (
            <ul className="space-y-4">
              {cart.map((product, index) => (
                <li key={index} className="flex items-center gap-4 p-4 bg-white rounded shadow">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={150}
                    height={100}
                    className="rounded"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">{product.name}</h4>
                    <p className="text-gray-700">Price: ${product.price}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No product selected.</p>
          )}
        </div>

        {/* Main Form Section */}
        <div className="w-full lg:w-2/3 p-6">
          {/* Billing Info */}
          <div className="bg-white rounded-[10px] p-6 mb-8">
            <div className="mb-4">
              <p className="font-bold text-xl">Billing Info</p>
              <p className="font-medium text-sm">Please enter your billing info</p>
            </div>
            <form className="space-y-6">
              <div className="flex flex-wrap gap-4">
                <div className="w-full sm:w-[48%]">
                  <label htmlFor="name" className="font-semibold text-base">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full h-14 rounded-xl bg-[#F6F7F9] p-5 mt-1"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="w-full sm:w-[48%]">
                  <label htmlFor="phone" className="font-semibold text-base">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    required
                    className="w-full h-14 rounded-xl bg-[#F6F7F9] p-5 mt-1"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="w-full sm:w-[48%]">
                  <label htmlFor="address" className="font-semibold text-base">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    required
                    className="w-full h-14 rounded-xl bg-[#F6F7F9] p-5 mt-1"
                    placeholder="Address"
                  />
                </div>
                <div className="w-full sm:w-[48%]">
                  <label htmlFor="city" className="font-semibold text-base">
                    Town/City
                  </label>
                  <input
                    type="text"
                    id="city"
                    required
                    className="w-full h-14 rounded-xl bg-[#F6F7F9] p-5 mt-1"
                    placeholder="Town or City"
                  />
                </div>
              </div>
            </form>
          </div>

          {/* Rental Section */}
          <div className="bg-white rounded-[10px] p-6 mb-8">
            <div className="mb-4">
              <p className="font-bold text-lg lg:text-xl">Rental Info</p>
              <p className="font-medium text-sm">Please select your rental date</p>
            </div>
            <div className="mb-6">
              <label className="inline-flex items-center">
                <input type="radio" className="form-radio" name="rentalType" defaultChecked />
                <span className="ml-2">Pick-Up</span>
              </label>
            </div>
            <form>
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="w-full lg:w-[356px]">
                  <label className="font-semibold text-base">Locations</label>
                  <select className="w-full h-14 rounded-xl bg-[#F6F7F9] p-5 mt-1">
                    <option>Select your city</option>
                  </select>
                </div>
                <div className="w-full lg:w-[356px]">
                  <label className="font-semibold text-base">Date</label>
                  <select className="w-full h-14 rounded-xl bg-[#F6F7F9] p-5 mt-1">
                    <option>Select your date</option>
                  </select>
                </div>
              </div>
              <div className="mt-4">
                <label className="font-semibold text-base">Time</label>
                <select className="w-full lg:w-[356px] h-14 rounded-xl bg-[#F6F7F9] p-5 mt-1">
                  <option>Select your time</option>
                </select>
              </div>
            </form>
            <div className="mt-6">
              <label className="inline-flex items-center">
                <input type="radio" className="form-radio" name="rentalType" />
                <span className="ml-2">Drop-Off</span>
              </label>
            </div>
            <form className="mt-4">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="w-full lg:w-[356px]">
                  <label className="font-semibold text-base">Locations</label>
                  <select className="w-full h-14 rounded-xl bg-[#F6F7F9] p-5 mt-1">
                    <option>Select your city</option>
                  </select>
                </div>
                <div className="w-full lg:w-[356px]">
                  <label className="font-semibold text-base">Date</label>
                  <select className="w-full h-14 rounded-xl bg-[#F6F7F9] p-5 mt-1">
                    <option>Select your date</option>
                  </select>
                </div>
              </div>
              <div className="mt-4">
                <label className="font-semibold text-base">Time</label>
                <select className="w-full lg:w-[356px] h-14 rounded-xl bg-[#F6F7F9] p-5 mt-1">
                  <option>Select your time</option>
                </select>
              </div>
            </form>
          </div>

          {/* Payment Method Section */}
          <div className="bg-white rounded-[10px] p-6 mb-8">
            <div className="mb-4">
              <p className="font-bold text-lg lg:text-xl">Payment Method</p>
              <p className="font-medium text-sm">Please enter your payment method</p>
            </div>
            <div className="bg-[#F6F7F9] rounded-[10px] p-4 mb-4">
              <div className="flex items-center">
                <input type="radio" className="mr-2" name="payment" defaultChecked />
                <span>Credit Card</span>
              </div>
              <form className="mt-4">
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="w-full lg:w-[356px]">
                    <label className="font-semibold text-base">Card Number</label>
                    <input
                      type="text"
                      required
                      className="w-full h-14 rounded-xl bg-white p-5 mt-1"
                      placeholder="Card number"
                    />
                  </div>
                  <div className="w-full lg:w-[356px]">
                    <label className="font-semibold text-base">Expiration Date</label>
                    <input
                      type="date"
                      required
                      className="w-full h-14 rounded-xl bg-white p-5 mt-1"
                    />
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-4 mt-4">
                  <div className="w-full lg:w-[356px]">
                    <label className="font-semibold text-base">Card Holder</label>
                    <input
                      type="text"
                      required
                      className="w-full h-14 rounded-xl bg-white p-5 mt-1"
                      placeholder="Card holder"
                    />
                  </div>
                  <div className="w-full lg:w-[356px]">
                    <label className="font-semibold text-base">CVC</label>
                    <input
                      type="number"
                      required
                      className="w-full h-14 rounded-xl bg-white p-5 mt-1"
                      placeholder="CVC"
                      maxLength={3}
                      minLength={3}
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="bg-[#F6F7F9] rounded-[10px] p-3 flex items-center justify-between mb-3">
              <div className="flex items-center">
                <input type="radio" className="mr-2" name="payment" />
                <span>Paypal</span>
              </div>
              <Image src="/Icons/Paypal.svg" alt="paypal" width={92} height={20} />
            </div>
            <div className="bg-[#F6F7F9] rounded-[10px] p-3 flex items-center justify-between">
              <div className="flex items-center">
                <input type="radio" className="mr-2" name="payment" />
                <span>Bitcoin</span>
              </div>
              <Image src="/Icons/Bitcoin.svg" alt="Bitcoin" width={92} height={20} />
            </div>
          </div>

          {/* Confirmation Section */}
          <div className="bg-white rounded-[10px] p-6">
            <div className="mb-4">
              <p className="font-bold text-lg lg:text-xl">Confirmation</p>
              <p className="font-medium text-sm">
                We are getting to the end. Just a few clicks and your rental is ready!
              </p>
            </div>
            <div className="space-y-4 mb-6">
              <div className="bg-[#F6F7F9] rounded-[10px] p-3">
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" />
                  <p className="font-semibold text-sm lg:text-base">
                    I agree with sending Marketing and newsletter emails. No spam, promised!
                  </p>
                </div>
              </div>
              <div className="bg-[#F6F7F9] rounded-[10px] p-3">
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" />
                  <p className="font-semibold text-sm lg:text-base">
                    I agree with our terms and conditions and privacy policy.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <button className="h-14 w-full lg:w-[140px] bg-[#3563E9] text-white rounded-xl font-semibold text-sm">
                <Link href="Dashboard">Rent Now</Link>
              </button>
            </div>
            <div className="mt-10 space-y-2">
              <Image src="/Icons/safety.svg" alt="safety" width={32} height={32} />
              <p className="font-semibold text-sm lg:text-base">All your data are safe</p>
              <p className="font-medium text-sm text-[#90A3BF]">
                We are using the most advanced security to provide you with the best experience ever.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
