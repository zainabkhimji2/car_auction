"use client";
import { motion } from "framer-motion";
import Image from "next/image";

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
];

const Testimonials = () => (
  <section className="bg-gray-100 dark:bg-black py-12">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white">
      What Our Users Say
    </h2>
    <div className="mt-8 max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
          className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
        >
          <div className="flex items-center mb-4">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={50}
              height={50}
              className="w-12 h-12 rounded-full"
            />
            <h3 className="ml-4 text-lg font-semibold text-gray-900 dark:text-white">
              {testimonial.name}
            </h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300">{testimonial.feedback}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Testimonials;
