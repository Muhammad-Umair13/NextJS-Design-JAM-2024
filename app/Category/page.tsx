/* eslint-disable */
"use client";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { IoMdHeart } from "react-icons/io";
import { FaGasPump } from "react-icons/fa6";
import { MdPeopleAlt } from "react-icons/md";
import { SiTraccar } from "react-icons/si";
import { useRouter } from "next/navigation";
import { useCart, Product } from "@/app/cart-product/CartContext";
import { Button } from "@/components/ui/button";

const Category = () => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [filteredData, setFilteredData] = useState<any[]>([]);
    const [data, setData] = useState<any[]>([]);

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
                "imageUrl": image.asset->url
            }[7..16]`;

            const fetchedData = await client.fetch(query);
            setData(fetchedData);
            setFilteredData(fetchedData); // Initially show all data
        };

        fetchData();
    }, []);

    const { cart, addToCart, removeFromCart } = useCart();
    const router = useRouter();

    // Handle category selection
    const handleCategoryChange = (category: string) => {
        setSelectedCategories((prev) =>
            prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
        );
    };

    // Filter products whenever selectedCategories changes
    useEffect(() => {
        if (selectedCategories.length === 0) {
            setFilteredData(data);
        } else {
            setFilteredData(data.filter((car) => selectedCategories.includes(car.type)));
        }
    }, [selectedCategories, data]);

    const handleProceedToPayout = () => {
        router.push("/Payout");
    };

    return (
        <div className="flex">
            {/* Sidebar */}
            <div className="w-72 p-6 max-lg:hidden">
                <div className="mb-8">
                    <h3 className="text-[10px] mb-4 text-[#90A3BF]">TYPE</h3>
                    <ul className="space-y-2">
                        {["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"].map((type) => (
                            <li key={type} className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    checked={selectedCategories.includes(type)}
                                    onChange={() => handleCategoryChange(type)}
                                    className="mr-2"
                                />
                                <span>{type}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Products Section */}
            <div className="bg-gray-100 w-full">
                <section className="text-gray-600 body-font w-[78%] ml-20 max-lg:m-0 max-md:ml-5">
                    <div className="container mx-auto">
                        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {filteredData.map((car) => {
                                const product: Product = {
                                    id: car._id,
                                    name: car.name,
                                    price: car.pricePerDay,
                                    image: car.imageUrl,
                                };

                                return (
                                    <div key={car._id} className="p-4 w-full">
                                        <div className="border rounded-lg p-4 h-full flex flex-col justify-between bg-white">
                                            <div>
                                                <div className="flex justify-between">
                                                    <h2 className="text-gray-900 title-font text-lg font-medium">
                                                        {car.name}
                                                    </h2>
                                                    <IoMdHeart className="text-red-600" />
                                                </div>
                                                <p className="text-gray-500 text-sm mb-4">{car.type}</p>
                                                <Image src={car.imageUrl} alt={car.name} width={232} height={172} className="my-10" />
                                                <p className="text-gray-500 text-sm mb-4 flex items-center gap-2">
                                                    <FaGasPump /> {car.fuelCapacity}
                                                    <SiTraccar /> {car.transmission}
                                                    <MdPeopleAlt /> {car.seatingCapacity}
                                                </p>
                                            </div>
                                            <div className="flex justify-between items-center mt-auto">
                                                <p className="text-gray-900 text-lg font-medium">{car.pricePerDay}</p>
                                                <button
                                                    className="ml-4 text-white bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded"
                                                    onClick={() => addToCart(product)}
                                                >
                                                    Rent Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
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
                                <Button className="bg-red-500 hover:bg-red-700" onClick={() => removeFromCart(product.id)}>
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
    );
};

export default Category;
