"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

// Image Data
const slides = [
  {
    image: "/images/audi.avif",
    text: "Find Your Dream Car at the Best Price!",
  },
  {
    image: "/images/bmw.avif",
    text: "Exclusive Auctions on Premium Cars!",
  },
  {
    image: "/images/porsche.avif",
    text: "Luxury Cars for Every Budget!",
  },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { theme } = useTheme();

  return (
    <section className="relative w-full h-[90vh] min-h-[500px] overflow-hidden">
      {/* Swiper Slider */}
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full h-full "
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[90vh] min-h-[500px] flex items-center justify-center">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center brightness-[0.6] transition-all duration-700 ease-in-out"
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>

              {/* Text & CTA Button */}
              <motion.div
                key={activeIndex} // Re-animate when text changes
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 text-center text-white px-6"
              >
                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-wide drop-shadow-md">
                  {slides[activeIndex].text}
                </h1>
                <p className="mt-4 text-lg sm:text-xl font-medium opacity-90">
                  Explore the best deals on high-end cars, only at AutoHub!
                </p>
                <button
                  className="mt-6 px-6 py-3 text-lg font-semibold rounded-lg shadow-lg transition-all bg-blue-600 dark:bg-yellow-500 text-white dark:text-black dark:hover:bg-yellow-400 hover:bg-blue-500"
                >
                  Browse Now
                </button>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
