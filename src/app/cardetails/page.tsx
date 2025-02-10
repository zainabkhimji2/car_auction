"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BsFillHeartFill, BsHeart } from "react-icons/bs";
import dynamic from "next/dynamic";

const SimilarVehiclesSlider = dynamic(() => import("@/components/similarvehicles"), { ssr: false });

const carDetails = {
  name: "2016 Audi A6 Premium Plus",
  price: "$8,500 USD",
  images: [
    "/images/mercedes.avif",
    "/images/audi.avif",
    "/images/porsche.avif",
    "/images/bmw.avif",
    "/images/mercedes.avif",
  ],
  specs: {
    "Lot Number": "41593405",
    VIN: "WAUFGAFCXGN******",
    "Title Code": "NJ - Certificate of Title",
    Odometer: "215,657 mi (ACTUAL)",
    "Primary Damage": "Normal Wear",
    "Secondary Damage": "Minor Dent/Scratches",
    "Estimated Retail Value": "$9,700.00 USD",
    Cylinders: "6",
    "Body Style": "Sedan 4D",
    Color: "Blue",
    "Engine Type": "3.0L 6",
    Transmission: "Automatic",
    Drive: "All Wheel Drive",
  },
};

export default function CarDetailsPage() {
  const [isClient, setIsClient] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [bidAmount, setBidAmount] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setSelectedImage(carDetails.images[0]);
    setBidAmount(8500);
    setTimeLeft(3600 * 24 * 3 + 3600 * 23 + 58 * 60 + 30); // 3D 23H 58min 30s
  }, []);

  useEffect(() => {
    if (!isClient || timeLeft === null) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev && prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [isClient, timeLeft]);

  const formatTime = (seconds: number | null) => {
    if (!isClient || seconds === null) return "Loading...";
    const d = Math.floor(seconds / (3600 * 24));
    const h = Math.floor((seconds % (3600 * 24)) / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    return `${d}D ${h}H ${m}min ${s}s`;
  };

  if (!isClient) return <div className="text-center text-gray-600">Loading...</div>;

  return (
    <div className="container mx-auto p-4 pt-20">
      {/* Title & Favorite Button */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">{carDetails.name}</h1>
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsFavorite(!isFavorite)}
          className="text-2xl"
        >
          {isFavorite ? <BsFillHeartFill className="text-red-500" /> : <BsHeart className="text-gray-400 dark:text-gray-300" />}
        </motion.button>
      </div>

      {/* Car Image & Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Image Section */}
        <div className="lg:col-span-2">
          <motion.div whileHover={{ scale: 1.05 }} className="relative w-full flex justify-center">
            <Image
              src={selectedImage || "/images/placeholder.jpg"}
              alt="Selected Car Image"
              width={800}
              height={500}
              priority
              className="rounded-lg object-cover w-full h-[400px] sm:h-[450px]"
            />
          </motion.div>

          {/* Thumbnail Images */}
          <div className="flex justify-center mt-4 space-x-2">
            {carDetails.images.map((image, index) => (
              <motion.div whileHover={{ scale: 1.1 }} key={index}>
                <Image
                  src={image}
                  alt="Car thumbnail"
                  width={100}
                  height={80}
                  className={`cursor-pointer rounded-lg object-cover w-20 h-16 border ${selectedImage === image ? "border-blue-500" : "border-gray-300"}`}
                  onClick={() => setSelectedImage(image)}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Vehicle Details & Bidding */}
        <div className="lg:col-span-1 space-y-6">
          {/* Vehicle Details Card */}
          <Card className="p-4 shadow-lg dark:bg-gray-800 dark:text-white">
            <CardContent>
              <h2 className="text-xl font-semibold">Vehicle Details</h2>
              <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-300">
                {Object.entries(carDetails.specs).map(([key, value]) => (
                  <li key={key} className="flex justify-between border-b pb-1">
                    <strong>{key}:</strong>
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Bidding Section */}
          <Card className="p-4 shadow-lg dark:bg-gray-800 dark:text-white">
            <CardContent>
              <h2 className="text-xl font-semibold">Bid Information</h2>
              <p className="text-gray-500 dark:text-gray-400">Bid status: <strong>Open</strong></p>
              <p className="text-gray-500 dark:text-gray-400">Sale status: <strong>Minimum bid</strong></p>
              <p className="text-red-500 font-bold">Time left: {formatTime(timeLeft)}</p>
              <p className="text-lg font-bold text-blue-600 dark:text-yellow-400">Starting Price: {carDetails.price}</p>

              {/* Bid Buttons */}
              <div className="mt-3 flex items-center space-x-2">
                <Button className="bg-gray-300 dark:bg-gray-700 text-black dark:text-white px-3 py-2" onClick={() => setBidAmount((prev) => (prev && prev > 100 ? prev - 100 : prev))}>
                  -100
                </Button>
                <input type="number" value={bidAmount ?? ""} className="w-full p-2 border rounded-md text-black dark:text-white dark:bg-gray-700" readOnly />
                <Button className="bg-gray-300 dark:bg-gray-700 text-black dark:text-white px-3 py-2" onClick={() => setBidAmount((prev) => (prev ? prev + 100 : 100))}>
                  +100
                </Button>
              </div>

              <Button className="mt-3 w-full bg-blue-500 text-white px-4 py-2 hover:bg-blue-700 dark:bg-yellow-500 dark:hover:bg-yellow-600">Bid Now</Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Similar Vehicles */}
      <SimilarVehiclesSlider />
    </div>
  );
}
