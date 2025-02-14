/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect } from "react";
import { IoMdHeart } from "react-icons/io";
import { FaGasPump } from "react-icons/fa6";
import { MdPeopleAlt } from "react-icons/md";
import { SiTraccar } from "react-icons/si";
import { client } from "@/sanity/lib/client";
import { LuArrowUpDown } from "react-icons/lu";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart, Product } from "@/app/cart-product/CartContext";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  const [data, setData] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "car"]{
        _id,
        name,
        type,
        pricePerDay,
        fuelCapacity,
        seatingCapacity,
        transmission,
        brand,
        "slug":slug.current,
        "imageUrl": image.asset->url
      }[0..11]`;
      const result = await client.fetch(query);
      setData(result);
    };
    fetchData();
  }, []);

  const { cart, addToCart, removeFromCart } = useCart();
  const router = useRouter();

  const handleSearch = (query: string) => {
    setSearchQuery(query.toLowerCase());
  };

  const filteredData = data.filter((car) => car.name.toLowerCase().includes(searchQuery));

  const handleProceedToPayout = () => {
    router.push("/Payout");
  };


  if (data.length === 0) {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
    </div>
  );
}

  return (
    <div>
      <div className="w-full bg-[#F6F7F9]">
        {/* Banner Section */}
        <div className="flex gap-[27px] justify-center">
          <div className="w-[640px] h-[360px] bg-[#54A6FF] rounded-[10px] mt-8">
            <div className="w-[284px] h-[224px] p-6 gap-5">
              <p className="font-semibold text-[32px] text-white w-[274px]">
                The Best Platform for Car Rental
              </p>
              <p className="font-medium text-base w-[284px] text-white">
                Ease of doing a car rental safely and reliably. Of course at a low price.
              </p>
              <Button className="bg-[#3563E9] hover:bg-blue-900 px-5 mt-5">
                Rental Car
              </Button>
            </div>
            <div className="ml-24">
              <Image src="/Img/Car-image.svg" alt="car" width={406} height={116} />
            </div>
          </div>
          <div className="w-[640px] h-[360px] bg-[#54A6FF] rounded-[10px] mt-8 max-lg:hidden">
            <div className="w-[284px] h-[224px] p-6 gap-5">
              <p className="font-semibold text-[32px] text-white w-[280px]">
                Easy way to rent a car at a low price
              </p>
              <p className="font-medium text-base w-[284px] text-white">
                Providing cheap car rental services and safe and comfortable facilities.
              </p>
              <Button className="bg-[#3563E9] hover:bg-blue-900 px-5 mt-5">
                Rental Car
              </Button>
            </div>
            <div className="ml-24">
              <Image src="/Img/Car2-image.svg" alt="car" width={340} height={108} />
            </div>
          </div>
        </div>

        {/* Date/Time Selection Section */}
        <div className="flex items-center justify-center bg-gray-100 py-16 px-5">
          <div className="flex items-center bg-white rounded-lg shadow-lg flex-col lg:flex-row">
            {/* Pick-Up Section */}
            <div className="flex flex-col space-y-2 p-6 bg-white rounded-lg shadow-sm mb-4 lg:mb-0">
              <div className="text-lg font-semibold text-blue-600">Pick-Up</div>
              <div className="flex flex-wrap gap-4 lg:gap-8">
                <div className="w-full lg:w-auto">
                  <label className="block text-gray-500 text-sm mb-1">Locations</label>
                  <select
                    className="border border-gray-300 rounded-md text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none w-full lg:w-32"
                    style={{ height: "48px" }}
                  >
                    <option>Select your city</option>
                  </select>
                </div>
                <div className="w-full lg:w-auto">
                  <label className="block text-gray-500 text-sm mb-1">Date</label>
                  <input
                    type="date"
                    className="border border-gray-300 rounded-md text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none w-full lg:w-32"
                    style={{ height: "48px" }}
                  />
                </div>
                <div className="w-full lg:w-auto">
                  <label className="block text-gray-500 text-sm mb-1">Time</label>
                  <select
                    className="border border-gray-300 rounded-md text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none w-full lg:w-32"
                    style={{ height: "48px" }}
                  >
                    <option>Select your time</option>
                  </select>
                </div>
              </div>
            </div>
            {/* Switch Button */}
            <div className="flex items-center justify-center mx-6 my-4 lg:my-0">
              <button className="bg-blue-600 text-white rounded-xl p-4 shadow-lg hover:bg-blue-700">
                <LuArrowUpDown />
              </button>
            </div>
            {/* Drop-Off Section */}
            <div className="flex flex-col space-y-2 p-6 bg-white rounded-lg shadow-sm">
              <div className="text-lg font-semibold text-blue-600">Drop-Off</div>
              <div className="flex flex-wrap gap-4 lg:gap-8">
                <div className="w-full lg:w-auto">
                  <label className="block text-gray-500 text-sm mb-1">Locations</label>
                  <select
                    className="border border-gray-300 rounded-md text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none w-full lg:w-32"
                    style={{ height: "48px" }}
                  >
                    <option>Select your city</option>
                  </select>
                </div>
                <div className="w-full lg:w-auto">
                  <label className="block text-gray-500 text-sm mb-1">Date</label>
                  <input
                    type="date"
                    className="border border-gray-300 rounded-md text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none w-full lg:w-32"
                    style={{ height: "48px" }}
                  />
                </div>
                <div className="w-full lg:w-auto">
                  <label className="block text-gray-500 text-sm mb-1">Time</label>
                  <select
                    className="border border-gray-300 rounded-md text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none w-full lg:w-32"
                    style={{ height: "48px" }}
                  >
                    <option>Select your time</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ✅ Search Bar Component */}
        <div className="flex justify-center mt-5">
          {data.length > 0 && (
            <SearchBar onSearch={handleSearch} />
          )}
        </div>

        {/* Cars List */}
        <div className="flex flex-wrap justify-between -m-4">
          {filteredData.map((car: any) => {
            const product: Product = {
              id: car._id,
              name: car.name,
              price: car.pricePerDay,
              image: car.imageUrl,
            };


            return (
              <div key={car._id} className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                <div className="border rounded-lg p-4 h-full flex flex-col justify-between bg-white">
                  <div>
                    <div className="flex justify-between">
                      <h2 className="text-gray-900 title-font text-lg font-medium">{car.name}</h2>
                      <span>
                        <IoMdHeart className="text-red-600" />
                      </span>
                    </div>
                    <Image src={car.imageUrl} alt={car.name} width={232} height={172} className="my-10" />
                    <p className="text-gray-500 text-sm mb-4 flex items-center gap-2">
                      <FaGasPump /> {car.fuelCapacity} <SiTraccar /> {car.transmission}{" "}
                      <MdPeopleAlt /> {car.seatingCapacity}
                    </p>
                  </div>
                  <div className="flex justify-between items-center mt-auto">
                    <p className="text-gray-900 text-lg font-medium">{car.pricePerDay}</p>
                    <div className="flex gap-6">
                      <button className="ml-4 text-white bg-blue-500 border-0 py-2 px-2 focus:outline-none hover:bg-blue-600 rounded">
                        <Link href={`/Detail/${car.slug}`}>Product Detail</Link>
                      </button>
                      <button
                        className="text-white bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded"
                        onClick={() => addToCart(product)}
                      >
                        Rent Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Cart Section */}
        {cart.length > 0 && (
          <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md p-4 z-50">
            <h2 className="text-lg font-semibold">Your Cart</h2>
            <div className="flex flex-col space-y-2">
              {cart.map((product, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span>{product.name}</span>
                  <span>${product.price}</span>
                  <Button className="bg-red-500 hover:bg-red-700" onClick={() => removeFromCart(product.id)}> Delete </Button>
                </div>
              ))}
            </div>
            <Button className="bg-blue-700 hover:bg-blue-900 w-full mt-4" onClick={handleProceedToPayout}>
              Proceed to Checkout
            </Button>
          </div>
        )}
      </div>
      <div className="flex justify-center my-5 mb-5 border-2">
        <Button className="w-[135px] h-[30px] flex items-center mx-auto border-2 border-black bg-blue-600 hover:bg-blue-800 rounded-[4px] mt-5">
          <Link href="/Category">Show more cars</Link></Button></div>
    </div>
  );
}
