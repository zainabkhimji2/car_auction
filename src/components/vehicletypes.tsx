"use client";

import { motion } from "framer-motion";

const vehicleTypes = [
  { name: "Automobiles", count: 10000, icon: "🚗" },
  { name: "Med. Duty Trucks", count: 1152, icon: "🚚" },
  { name: "Motorcycles", count: 627, icon: "🏍️" },
  { name: "Trailers", count: 218, icon: "🚛" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const VehicleTypes = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 bg-gray-100 dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
      {/* Title */}
      <motion.h2
        className="text-4xl font-extrabold  text-center tracking-wide"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Car <span className="text-blue-600 dark:text-yellow-400">Categories</span>
        
      </motion.h2>

      {/* Vehicle Types Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {vehicleTypes.map((vehicle, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-lg rounded-xl flex flex-col items-center justify-center text-center border border-gray-300 dark:border-gray-700 transition-all relative group"
            variants={itemVariants}
            whileHover={{ scale: 1.08, rotate: 2 }}
          >
            <span className="text-6xl group-hover:scale-110 transition-all">{vehicle.icon}</span>
            <h3 className="mt-3 text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-all">
              {vehicle.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-all">
              {vehicle.count.toLocaleString()} Listings
            </p>

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-blue-500 dark:bg-yellow-500 opacity-0 group-hover:opacity-20 blur-xl transition-all"></div>
          </motion.div>
        ))}
      </motion.div>

      {/* View All Button */}
      <div className="flex justify-center mt-10">
        <motion.button
          className="bg-gradient-to-r from-blue-600 to-blue-400 dark:from-yellow-500 dark:to-yellow-300 text-white dark:text-black font-bold py-3 px-8 rounded-full shadow-xl hover:shadow-2xl transition-all"
          whileHover={{ scale: 1.1 }}
        >
          View All Types
        </motion.button>
      </div>
    </section>
  );
};

export default VehicleTypes;
