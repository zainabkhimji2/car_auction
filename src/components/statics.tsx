"use client";
import { motion } from "framer-motion";
import { TrendingUp, Users, Car, DollarSign } from "lucide-react";

const stats = [
  {
    icon: <TrendingUp size={40} className="text-blue-500 dark:text-yellow-400" />,
    title: "Total Auctions",
    value: "12,500+",
    description: "Successful auctions completed on our platform.",
  },
  {
    icon: <Users size={40} className="text-blue-500 dark:text-yellow-400" />,
    title: "Active Users",
    value: "8,200+",
    description: "Car enthusiasts and bidders active daily.",
  },
  {
    icon: <Car size={40} className="text-blue-500 dark:text-yellow-400" />,
    title: "Cars Sold",
    value: "5,700+",
    description: "Dream cars purchased through our platform.",
  },
  {
    icon: <DollarSign size={40} className="text-blue-500 dark:text-yellow-400" />,
    title: "Revenue Generated",
    value: "$18M+",
    description: "Total sales generated through auctions.",
  },
];

const Statistics = () => (
  <section className="py-16 bg-gray-50 dark:bg-black">
    <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
        Trusted by Thousands
      </h2>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        Here are the numbers that show our impact.
      </p>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg"
          >
            <div className="flex justify-center mb-4">{stat.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              {stat.value}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-1">{stat.title}</p>
            <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">{stat.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Statistics;
