"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGoogle } from "react-icons/fa";
import { useTheme } from "next-themes"; // Automatically links with Navbar's theme
import Link from "next/link";

export default function Login() {
  const { theme } = useTheme(); // Gets theme from Navbar
  const [formData, setFormData] = useState({ email: "", password: "" });

  useEffect(() => {
    setFormData({ email: "", password: "" });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login Submitted", formData);
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
          Welcome Back
        </motion.h2>

        {/* Google Login Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full flex items-center justify-center gap-3 bg-red-500 text-white p-3 rounded-lg shadow-lg hover:bg-red-600 transition-all duration-300"
        >
          <FaGoogle className="text-xl" />
          Continue with Google
        </motion.button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300 dark:border-gray-700" />
          <span className="px-4 text-gray-500 dark:text-gray-400">or</span>
          <hr className="flex-grow border-gray-300 dark:border-gray-700" />
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {["email", "password"].map((field, index) => (
            <motion.div
              key={field}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <input
                type={field}
                name={field}
                placeholder={field === "email" ? "Enter Your Email" : "Enter Your Password"}
                value={formData[field as keyof typeof formData]}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-400 transition-all duration-200"
                required
              />
            </motion.div>
          ))}

          {/* Login Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-blue-600 dark:bg-yellow-400 text-white dark:text-gray-900 font-bold p-3 rounded-lg shadow-lg hover:bg-blue-700 dark:hover:bg-yellow-500 transition-all duration-300"
          >
            Login
          </motion.button>
        </form>

        {/* Footer Links */}
        <div className="text-center mt-6">
          <p className="text-sm">
            Don't have an account? <Link href="/register" className="text-blue-500 dark:text-yellow-400 hover:underline">Sign Up</Link>
          </p>
          <p className="text-sm mt-2">
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:underline">Forgot Password?</a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
