"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const makes = [
  { make: "Nissan", count: "7,059", logo: "/images/nissan.png" },
  { make: "Chevrolet", count: "5,965", logo: "/images/chervolet.jpg" },
  { make: "Toyota", count: "6,574", logo: "/images/toyota.jpg" },
  { make: "Honda", count: "5,112", logo: "/images/honda.jpg" },
  { make: "BMW", count: "1,094", logo: "/images/bmw.jpg" },
  { make: "Audi", count: "650", logo: "/images/audi.png" },
  { make: "Dodge", count: "2,002", logo: "/images/dodge.png" },
  { make: "Jeep", count: "1,975", logo: "/images/jeep.png" },
  { make: "Subaru", count: "1,258", logo: "/images/suparu.jpg" },
  { make: "Tesla", count: "401", logo: "/images/tesla.png" },
  { make: "Volkswagen", count: "1,211", logo: "/images/volkswagan.png" },
];

export default function HotAuctionMakes() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="bg-blue-50 dark:bg-gray-900 py-14 px-6 rounded-2xl shadow-lg">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-extrabold  mb-8 text-center"
        >Top <span className="text-blue-600 dark:text-yellow-400">Brands</span>
          
        </motion.h2>
        
        {/* Grid for Car Makes */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {makes.slice(0, 5).map((item) => (
            <motion.div
              key={item.make}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="group flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-14 w-14 mb-3">
                <Image src={item.logo} alt={item.make} fill className="object-contain" priority />
              </div>
              <span className="font-semibold text-gray-800 dark:text-gray-100 text-lg">{item.make}</span>
              <span className="mt-1 bg-blue-100 dark:bg-yellow-700 text-blue-700 dark:text-yellow-300 px-3 py-1 rounded-full text-sm font-medium">
                {item.count}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Expandable Section */}
        <AnimatePresence>
          {showAll && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 mt-4 overflow-hidden"
            >
              {makes.slice(5).map((item) => (
                <motion.div
                  key={item.make}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="group flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-14 w-14 mb-3">
                    <Image src={item.logo} alt={item.make} fill className="object-contain" priority />
                  </div>
                  <span className="font-semibold text-gray-800 dark:text-gray-100 text-lg">{item.make}</span>
                  <span className="mt-1 bg-blue-100 dark:bg-yellow-700 text-blue-700 dark:text-yellow-300 px-3 py-1 rounded-full text-sm font-medium">
                    {item.count}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* View More Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 text-white bg-blue-600 dark:bg-yellow-500 dark:text-black rounded-full font-semibold hover:bg-blue-700 dark:hover:bg-yellow-600 transition-all duration-300"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </section>
  );
}
