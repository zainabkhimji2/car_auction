"use client";

import { motion } from "framer-motion";
import { FaUsers, FaAward, FaHandshake, FaLightbulb } from "react-icons/fa";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function AboutUs() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 transition-all duration-300">
      
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 dark:from-gray-800 dark:to-gray-700 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold text-center tracking-wide"
        >
          About Us
        </motion.h1>
      </div>

      {/* Company Story */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto my-16 px-6 text-center"
      >
        <h2 className="text-4xl font-bold mb-6">Our Story</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Welcome to <span className="font-bold text-blue-600 dark:text-yellow-400">Car Auction</span>, the most trusted platform for buying and selling vehicles. 
          Our mission is to make car auctions **transparent, secure, and accessible** for everyone.
        </p>
      </motion.div>

      {/* Our Values */}
      <div className="py-16 bg-gray-100 dark:bg-gray-800 transition-all duration-300">
        <h2 className="text-4xl font-bold text-center mb-10">Our Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
          {[
            { icon: <FaUsers />, title: "Customer First", desc: "We prioritize user experience and satisfaction." },
            { icon: <FaAward />, title: "Quality & Trust", desc: "Providing a secure and reliable auction process." },
            { icon: <FaHandshake />, title: "Transparency", desc: "Ensuring fair and honest deals for all." },
            { icon: <FaLightbulb />, title: "Innovation", desc: "Constantly evolving with cutting-edge solutions." },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg text-center flex flex-col items-center transition-all duration-300 hover:shadow-xl"
            >
              <div className="text-5xl text-blue-500 dark:text-yellow-400 mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Meet the Team */}
      <div className="max-w-6xl mx-auto my-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Meet Our Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {["CEO", "CTO", "CMO"].map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-700 shadow-lg rounded-xl p-6 text-center transition-all duration-300 hover:shadow-2xl"
            >
              <Image
                className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-blue-500 dark:border-yellow-400"
                src="/images/user_3.jpg"
                alt="team-member"
                width={96}
                height={96}
              />
              <h3 className="text-xl font-bold">John Doe</h3>
              <p className="text-gray-600 dark:text-gray-300">{role}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-blue-600 dark:bg-yellow-500 text-white dark:text-gray-900 py-16 text-center transition-all duration-300"
      >
        <h2 className="text-4xl font-bold mb-4">Join Us Today!</h2>
        <p className="text-lg mb-6">Start bidding or selling your car with confidence.</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white dark:bg-gray-900 text-blue-600 dark:text-yellow-400 font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  );
}
