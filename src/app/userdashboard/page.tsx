"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaUser, FaCar, FaHeart, FaGavel, FaComments, FaSun, FaMoon } from "react-icons/fa";

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState("profile");
  const [darkMode, setDarkMode] = useState<boolean | null>(null);

  // Get theme preference from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("dark-mode");
    const isDark = storedTheme ? JSON.parse(storedTheme) : window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(isDark);
  }, []);

  useEffect(() => {
    if (darkMode === null) return;
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("dark-mode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("dark-mode", "false");
    }
  }, [darkMode]);

  if (darkMode === null) return null; // Prevent SSR mismatch

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-all">
      {/* Header & Theme Toggle */}
      <div className="w-full max-w-6xl flex justify-between items-center mb-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold tracking-wide"
        >
          User Dashboard
        </motion.h1>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:scale-110 transition"
        >
          {darkMode ? <FaSun size={22} className="text-yellow-400" /> : <FaMoon size={22} className="text-gray-800" />}
        </button>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {[
          { key: "profile", label: "Profile", icon: FaUser },
          { key: "bids", label: "My Bids", icon: FaGavel },
          { key: "comments", label: "Comments", icon: FaComments },
          { key: "favorites", label: "Favorites", icon: FaHeart },
          { key: "success", label: "Successful Bids", icon: FaCar },
        ].map(({ key, label, icon: Icon }) => (
          <motion.button
            key={key}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setActiveTab(key)}
            className={`p-3 flex items-center gap-2 text-lg rounded-lg shadow-md transition-all
              ${activeTab === key ? "bg-blue-600 text-white dark:bg-yellow-400 dark:text-gray-900" 
              : "bg-white dark:bg-gray-800 text-blue-600 dark:text-yellow-400"}`}
          >
            <Icon className="text-xl" />
            {label}
          </motion.button>
        ))}
      </div>

      {/* Content Sections */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-5xl bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl"
      >
        {activeTab === "profile" && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
            <p>Name: <span className="font-medium">John Doe</span></p>
            <p>Email: <span className="font-medium">johndoe@example.com</span></p>
          </div>
        )}
        {activeTab === "bids" && <h2 className="text-2xl font-semibold">Bids on Auctions</h2>}
        {activeTab === "comments" && <h2 className="text-2xl font-semibold">User Comments</h2>}
        {activeTab === "favorites" && <h2 className="text-2xl font-semibold">Favorite Cars</h2>}
        {activeTab === "success" && <h2 className="text-2xl font-semibold">Successful Bids</h2>}
      </motion.div>
    </div>
  );
}
