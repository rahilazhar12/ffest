import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const DawnFestSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="relative py-12"
      style={{
        backgroundImage: `url('https://static.vecteezy.com/system/resources/thumbnails/021/285/689/small_2x/abstract-blue-watercolor-frame-background-png.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-6">
        {/* Heading Section */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          data-aos="fade-up"
        >
          <h1 className="text-6xl font-extrabold text-black tracking-wide">
            DATE & VENUE
          </h1>
        </motion.div>

        {/* Date & Venue Details */}
        <motion.div
          className="mt-6 text-2xl text-white flex justify-center items-center flex-col"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          data-aos="fade-up"
        >
          <div className="flex items-center space-x-2">
            <span className="material-icons text-black text-3xl">
              calendar_today
            </span>
            <span className="text-4xl text-black font-bold">19th, FEB</span>
          </div>
          <div className="text-4xl font-bold mt-2 text-black">2025</div>
          <div className="flex items-center space-x-2 mt-4">
            <span className="material-icons text-3xl text-black">
              location_on
            </span>
            <span className="text-4xl font-bold text-black">Alhamra Hotel</span>
          </div>
          <div className="text-4xl font-bold mt-2 text-black">MARDAN</div>
        </motion.div>

        {/* Images Section with Motion Effects */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
          }}
          data-aos="fade-up"
        >
          {[
            "https://alhamramardan.com/wp-content/uploads/2018/11/IMG_6641.jpg",
            "https://toruenterprises.com/wp-content/uploads/2022/10/Al-hamra-hotel-02-scaled-750x500.jpg",
            "https://alhamramardan.com/wp-content/uploads/2018/11/21.jpg",
          ].map((src, index) => (
            <motion.div
              key={index}
              className="relative border-animated overflow-hidden rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              data-aos="zoom-in"
            >
              <img
                src={src}
                alt={`Venue ${index + 1}`}
                className="w-full opacity-90 rounded-lg"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default DawnFestSection;
