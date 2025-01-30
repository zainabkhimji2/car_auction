"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Clock, Gavel, ChevronLeft, ChevronRight } from "lucide-react";

const auctionData = [
  {
    id: 1,
    name: "Lamborghini Huracan",
    images: ["/images/bmw.avif", "/images/bmw.avif", "/images/bmw.avif"],
    price: "$250,000",
    endTime: "2h 30m",
    status: "Live",
  },
  {
    id: 2,
    name: "Ferrari 488 GTB",
    images: ["/images/audi.avif", "/images/audi.avif", "/images/audi.avif"],
    price: "$230,000",
    endTime: "3h 15m",
    status: "Live",
  },
  {
    id: 3,
    name: "Porsche 911 Turbo",
    images: ["/images/porsche.avif", "/images/porsche.avif", "/images/porsche.avif"],
    price: "$180,000",
    endTime: "4h 50m",
    status: "Upcoming",
  },
  {
    id: 4,
    name: "Porsche 911 Turbo",
    images: ["/images/porsche.avif", "/images/porsche.avif", "/images/porsche.avif"],
    price: "$180,000",
    endTime: "4h 50m",
    status: "Upcoming",
  },
  {
    id: 5,
    name: "Porsche 911 Turbo",
    images: ["/images/porsche.avif", "/images/porsche.avif", "/images/porsche.avif"],
    price: "$180,000",
    endTime: "4h 50m",
    status: "Upcoming",
  },
];

const FeatureAuction = () => {
  const [darkMode, setDarkMode] = useState<boolean | null>(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem("dark-mode");
    const isDark = storedTheme ? JSON.parse(storedTheme) : window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(isDark);
  }, []);

  useEffect(() => {
    if (darkMode === null) return;
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("dark-mode", JSON.stringify(darkMode));
  }, [darkMode]);

  if (darkMode === null) return null;

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12 relative">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center">
        🔥 Featured <span className="text-blue-600 dark:text-yellow-400">Auctions</span>
      </h2>
      <p className="text-gray-600 dark:text-gray-300 text-center mt-2">
        Place your bids on the hottest cars available now!
      </p>

      {/* Navigation Arrows - Positioned Outside */}
      <div className="relative mt-10">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 5000 }}
          navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, Autoplay]}
          className="relative"
        >
          {auctionData.map((auction) => (
            <SwiperSlide key={auction.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-900 shadow-lg rounded-xl overflow-hidden transition hover:scale-105"
              >
                <div className="relative">
                  {/* Mini Image Slider inside each card */}
                  <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                    className="relative"
                    modules={[Navigation]}
                  >
                    {auction.images.map((img, index) => (
                      <SwiperSlide key={index}>
                        <Image src={img} alt={auction.name} width={500} height={300} className="w-full object-cover h-60" />
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  {/* Auction Status Badge */}
                  <Badge
                    className={`absolute top-3 left-3 text-xs px-3 py-1 ${
                      auction.status === "Live" ? "bg-red-500 text-white" : "bg-gray-500 dark:bg-gray-700 text-white"
                    }`}
                  >
                    {auction.status}
                  </Badge>

                  {/* Heart Button */}
                  <button className="absolute top-3 right-3 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md hover:scale-110 transition">
                    <Heart className="text-red-500" size={18} />
                  </button>
                </div>

                {/* Auction Details */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{auction.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Starting Bid: {auction.price}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <Clock size={18} />
                      {auction.endTime}
                    </span>
                    <Button className="bg-blue-600 dark:bg-yellow-400 text-white dark:text-gray-900 px-4 py-2 hover:scale-105 transition">
                      <Gavel size={18} /> Bid Now
                    </Button>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Arrows (Outside the Images) */}
        <button className="prev-btn absolute left-0 top-1/2 transform  -translate-y-1/2 bg-gray-200 dark:bg-gray-700 p-3 rounded-full shadow-md hover:scale-110 transition">
          <ChevronLeft size={24} />
        </button>
        <button className="next-btn absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 dark:bg-gray-700 p-3 rounded-full shadow-md hover:scale-110 transition">
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default FeatureAuction;
