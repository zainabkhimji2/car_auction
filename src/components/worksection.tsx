"use client";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const steps = [
  { title: "Sign Up", description: "Create an account to get started." },
  { title: "Browse Cars", description: "Explore a variety of car listings." },
  { title: "Place a Bid", description: "Bid on your favorite cars with ease." },
  { title: "Win & Enjoy", description: "Win auctions and enjoy your new car!" },
];

const HowItWorks = () => (
  <section className="py-16 bg-blue-50 dark:bg-black">
    <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
      How It Works
    </h2>
    <p className="text-center text-gray-600 dark:text-gray-300 mt-2">
      Follow these simple steps to start your journey.
    </p>
    <div className="max-w-5xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: index * 0.2 }}
          className="text-center p-6 bg-white dark:bg-gray-900 shadow-lg rounded-xl"
        >
          <CheckCircle className="text-blue-500 dark:text-yellow-400 mx-auto mb-4" size={36} />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {step.title}
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">{step.description}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default HowItWorks;
