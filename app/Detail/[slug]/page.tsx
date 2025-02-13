/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useCart, Product } from "@/app/cart-product/CartContext";
import { useRouter } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { SiTraccar } from "react-icons/si";
import { FaGasPump } from "react-icons/fa6";
import { MdPeopleAlt } from "react-icons/md"
const Detail_Car = ({ params: { slug } }: { params: { slug: string } }) => {
  const [data, setData] = useState<any[]>([]);
  const { addToCart } = useCart();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "car" && slug.current == $slug]{
        _id,
        name,
        type,
        pricePerDay,
        fuelCapacity,
        seatingCapacity,
        transmission,
        brand,
        "imageUrl": image.asset->url,
        description
      }`;
      try {
        const result = await client.fetch(query, { slug });
        setData(result || []);
      } catch (error) {
        console.error("Error fetching car details:", error);
      }
    };
    fetchData();
  }, [slug]);

  if (data.length === 0) {
    return <div>No car details found.</div>;
  }

  const car = data[0];

  // Map the fetched car data to a product object.
  const product: Product = {
    id: car._id,
    name: car.name,
    price: car.pricePerDay,
    image: car.imageUrl,
  };

  const handleRentNow = () => {
    addToCart(product);
    router.push("/Payout");
  };

  return (
    <div className="flex max-lg:block bg-[rgb(33,206,255)]">
      <div>
        <Image src={car.imageUrl} alt={car.name} width={360} height={492} />
      </div>
      <div className="p-6">
        <p className="text-gray-900 text-sm mb-4 flex items-center gap-2">
          <FaGasPump /> {car.fuelCapacity} <SiTraccar /> {car.transmission}{" "}
          <MdPeopleAlt /> {car.seatingCapacity}
        </p>
        <h1 className="text-3xl font-bold">{car.name}</h1>
        <p className="mt-4 black">{car.description}</p>
        <p className="mt-4 font-semibold">Price: ${car.pricePerDay} per day</p>
        <button
          onClick={handleRentNow}
          className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Rent Now
        </button>
      </div>
    </div>
  );
};

export default Detail_Car;
