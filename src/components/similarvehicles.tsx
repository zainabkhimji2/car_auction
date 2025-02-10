"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const vehicles = [
  {
    id: 1,
    image: "/images/mercedes.avif",
    title: "2017 AUDI Q5 PREMIUM",
    lot: "82050244",
    bid: "Start the bidding",
    location: "FL - MIAMI NORTH",
  },
  {
    id: 2,
    image: "/images/bmw.avif",
    title: "2017 BMW 320 XI",
    lot: "80675114",
    bid: "Start the bidding",
    location: "SC - COLUMBIA",
  },
  {
    id: 3,
    image: "/images/ty.jpg",
    title: "2016 BMW X1 XDRIVE28I",
    lot: "89245925",
    bid: "$1,500.00 USD",
    location: "GA - SAVANNAH",
  },
  {
    id: 4,
    image: "/images/mercedes.avif",
    title: "2016 MERCEDES-BENZ CLA 250",
    lot: "84638504",
    bid: "$4,500.00 USD",
    location: "SC - COLUMBIA",
  },
  {
    id: 5,
    image: "/images/tyo.jpg",
    title: "2018 TOYOTA CAMRY XSE",
    lot: "73219025",
    bid: "$6,200.00 USD",
    location: "TX - HOUSTON",
  },
];

const ITEMS_PER_PAGE = 4;

const SimilarVehiclesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + ITEMS_PER_PAGE >= vehicles.length ? 0 : prev + ITEMS_PER_PAGE
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - ITEMS_PER_PAGE < 0 ? vehicles.length - ITEMS_PER_PAGE : prev - ITEMS_PER_PAGE
    );
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 mt-10">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        View Similar Vehicles
      </h2>

      {/* Vehicle Cards Container */}
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {vehicles.slice(currentIndex, currentIndex + ITEMS_PER_PAGE).map((vehicle) => (
              <motion.div
                key={vehicle.id}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 transition-all"
              >
                <div className="relative">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-200">
                    {vehicle.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Lot # <span className="text-blue-600 dark:text-blue-400">{vehicle.lot}</span>
                  </p>
                  <p
                    className={`font-bold ${
                      vehicle.bid.includes("$") ? "text-green-600 dark:text-green-400" : "text-gray-500 dark:text-gray-400"
                    }`}
                  >
                    {vehicle.bid}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">Location: {vehicle.location}</p>

                  {/* Buttons */}
                  <div className="mt-4 flex justify-between items-center">
                    <button className="bg-blue-600 dark:bg-yellow-400 text-white dark:text-black px-4 py-2 rounded-md hover:bg-blue-700 dark:hover:bg-yellow-300 transition">
                      View details
                    </button>
                    <button className="text-blue-600 dark:text-yellow-300 hover:text-blue-800  dark:hover:text-yellow-200 flex items-center">
                      ☆ Watch
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination Buttons */}
      <div className="flex justify-between items-center mt-6">
        <motion.button
          onClick={prevSlide}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600 transition"
        >
          ← Prev
        </motion.button>
        <span className="text-gray-600 dark:text-gray-300">
          {currentIndex + 1}-{Math.min(currentIndex + ITEMS_PER_PAGE, vehicles.length)} of{" "}
          {vehicles.length}
        </span>
        <motion.button
          onClick={nextSlide}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600 transition"
        >
          Next →
        </motion.button>
      </div>
    </div>
  );
};

export default SimilarVehiclesSlider;
