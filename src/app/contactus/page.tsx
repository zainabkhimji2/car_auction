"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useTheme } from "next-themes";

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const { theme } = useTheme();

  useEffect(() => {
    setFormData({ name: "", email: "", subject: "", message: "" });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 transition-all duration-300 flex flex-col items-center px-6 py-16">
      
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold text-center mb-10"
      >
        Contact Us
      </motion.h1>

      {/* Contact Section */}
      <div className="grid lg:grid-cols-2 gap-12 w-full max-w-6xl">
        
        {/* Contact Details */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {[
            { icon: <FaMapMarkerAlt />, text: "1234 Car Auction St, New York, NY" },
            { icon: <FaPhoneAlt />, text: "+1 (123) 456-7890" },
            { icon: <FaEnvelope />, text: "10b5286zainabkhimji@gmail.com" },
          ].map((item, index) => (
            <div key={index} className="flex items-center space-x-4 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
              <div className="text-3xl text-blue-500 dark:text-yellow-400">{item.icon}</div>
              <p className="text-lg">{item.text}</p>
            </div>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full space-y-6"
        >
          {["name", "email", "subject"].map((field, index) => (
            <motion.div
              key={field}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                value={formData[field as keyof typeof formData]}
                onChange={handleChange}
                className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-400 transition-all duration-200"
                required
              />
            </motion.div>
          ))}

          {/* Message Field */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-400 transition-all duration-200"
              required
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-blue-600 dark:bg-yellow-400 text-white dark:text-gray-900 font-bold p-4 rounded-lg shadow-lg hover:bg-blue-700 dark:hover:bg-yellow-500 transition-all duration-300"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
}
