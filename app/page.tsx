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
// import { LuArrowUpDown } from "react-icons/lu";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart, Product } from "@/app/cart-product/CartContext";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  const [data, setData] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { cart, addToCart, removeFromCart } = useCart();
  const router = useRouter();

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
        "slug": slug.current,
        "imageUrl": image.asset->url
      }[0..11]`;
      try {
        const result = await client.fetch(query);
        setData(Array.isArray(result) ? result : []);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query.toLowerCase());
  };

  const filteredData = data.filter((car) =>
    car.name.toLowerCase().includes(searchQuery)
  );

  const handleProceedToPayout = () => {
    router.push("/Payout");
  };

  return (
    <div>
      <div className="w-full bg-[#F6F7F9]">
        {/* Search Bar */}
        <div className="flex justify-center mt-5">
          {data.length > 0 && <SearchBar onSearch={handleSearch} />}
        </div>

        {/* Cars List */}
        {data.length === 0 ? (
          <p className="text-center py-10">Loading...</p>
        ) : (
          <div className="flex flex-wrap justify-between -m-4">
            {filteredData.map((car: any) => {
              const product: Product = {
                id: car._id,
                name: car.name,
                price: car.pricePerDay,
                image: car.imageUrl,
              };

              return (
                <div
                  key={car._id}
                  className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
                >
                  <div className="border rounded-lg p-4 h-full flex flex-col justify-between bg-white">
                    <div>
                      <div className="flex justify-between">
                        <h2 className="text-gray-900 title-font text-lg font-medium">
                          {car.name}
                        </h2>
                        <IoMdHeart className="text-red-600" />
                      </div>
                      <Image
                        src={car.imageUrl}
                        alt={car.name}
                        width={232}
                        height={172}
                        className="my-10"
                      />
                      <p className="text-gray-500 text-sm mb-4 flex items-center gap-2">
                        <FaGasPump /> {car.fuelCapacity} <SiTraccar /> {car.transmission} <MdPeopleAlt /> {car.seatingCapacity}
                      </p>
                    </div>
                    <div className="flex justify-between items-center mt-auto">
                      <p className="text-gray-900 text-lg font-medium">{car.pricePerDay}</p>
                      <div className="flex gap-6">
                        <Button>
                          <Link href={`/Detail/${car.slug}`}>Product Detail</Link>
                        </Button>
                        <Button onClick={() => addToCart(product)}>Rent Now</Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Cart Section */}
        {cart.length > 0 && (
          <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md p-4 z-50">
            <h2 className="text-lg font-semibold">Your Cart</h2>
            <div className="flex flex-col space-y-2">
              {cart.map((product, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span>{product.name}</span>
                  <span>${product.price}</span>
                  <Button
                    className="bg-red-500 hover:bg-red-700"
                    onClick={() => removeFromCart(product.id)}
                  >
                    Delete
                  </Button>
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
          <Link href="/Category">Show more cars</Link>
        </Button>
      </div>
    </div>
  );
}
