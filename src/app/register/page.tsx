"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { useTheme } from "next-themes"; // Automatically links with Navbar's theme
import Link from "next/link";

export default function Register() {
  const { theme } = useTheme(); // Gets theme from Navbar
  const [formData, setFormData] = useState({ fullname: "", username: "", email: "", password: "" });

  useEffect(() => {
    setFormData({ fullname: "", username: "", email: "", password: "" });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Register Submitted", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-gray-900 dark:to-gray-800 transition-all duration-300">
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md p-8 rounded-2xl shadow-2xl bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 transition-all duration-300"
      >
        
        {/* Page Title */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-6"
        >
          Create an Account
        </motion.h2>

        {/* Register Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {[
            { name: "fullname", type: "text", placeholder: "Full Name", icon: <FaUser /> },
            { name: "username", type: "text", placeholder: "Username", icon: <FaUser /> },
            { name: "email", type: "email", placeholder: "Email Address", icon: <FaEnvelope /> },
            { name: "password", type: "password", placeholder: "Password", icon: <FaLock /> }
          ].map((field, index) => (
            <motion.div
              key={field.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-800 p-3"
            >
              <span className="text-gray-500 dark:text-gray-400 mr-3">{field.icon}</span>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name as keyof typeof formData]}
                onChange={handleChange}
                className="w-full bg-transparent focus:outline-none text-gray-900 dark:text-gray-200"
                required
              />
            </motion.div>
          ))}

          {/* Register Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-blue-600 dark:bg-yellow-400 text-white dark:text-gray-900 font-bold p-3 rounded-lg shadow-lg hover:bg-blue-700 dark:hover:bg-yellow-500 transition-all duration-300"
          >
            Register
          </motion.button>
        </form>

        {/* Footer Links */}
        <div className="text-center mt-6">
          <p className="text-sm">
            Already have an account? <Link href="/login" className="text-blue-500 dark:text-yellow-400 hover:underline">Login</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
