"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa"; // Import quote icon

const testimonials = [
  {
    name: "John Doe",
    feedback: "CarAuction made it so easy to find my dream car! Highly recommend.",
    image: "/images/user_1.jpg",
  },
  {
    name: "Jane Smith",
    feedback: "I sold my car at a great price. The process was smooth and transparent!",
    image: "/images/user_2.jpg",
  },
  {
    name: "Mark Johnson",
    feedback: "Amazing platform with a fantastic selection of cars. Loved the experience!",
    image: "/images/user_3.jpg",
  },
  {
    name: "Emily Davis",
    feedback: "Superb experience! The bidding process was smooth, and customer service was helpful.",
    image: "/images/user_2.jpg",
  },
  {
    name: "David Wilson",
    feedback: "Highly trusted platform! I got my car at a great price without any hassle.",
    image: "/images/user_3.jpg",
  },
];

const Testimonials = () => {
  const controls = useAnimation();
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      controls.start({
        x: "-100%",
        transition: {
          repeat: Infinity,
          duration: 20, // Smooth movement
          ease: "linear",
        }
      });
    } else {
      controls.stop();
    }
  }, [isPaused, controls]);

  return (
    <section className="bg-gray-100 dark:bg-black py-16 overflow-hidden">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center">
        👍 Customer <span className="text-blue-600 dark:text-yellow-400">Feedback</span>
      </h2>
      <p className="text-gray-600 dark:text-gray-300 text-center mt-2">
        Feedback That Drives Us
      </p>

      {/* Scrolling Container */}
      <div className="relative mt-10 w-full flex overflow-hidden">
        <motion.div
          className="flex space-x-6"
          animate={controls}
          transition={{
            repeat: Infinity,
            duration: 10, // Smooth movement
            ease: "linear",
          }}
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg min-w-[300px] md:min-w-[350px] lg:min-w-[400px] flex-shrink-0 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              whileHover={{ scale: 1.05 }}
            >
              {/* Top Left Quote Icon */}
              <FaQuoteLeft className="absolute top-4 left-4 text-gray-300 dark:text-gray-700 text-3xl" />

              {/* User Info */}
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="w-16 h-16 rounded-full object-cover border-4 border-blue-500 dark:border-yellow-300 shadow-md"
                />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {testimonial.name}
                </h3>
              </div>

              {/* Feedback */}
              <p className="text-gray-700 dark:text-gray-300 text-md leading-relaxed">
                {testimonial.feedback}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
