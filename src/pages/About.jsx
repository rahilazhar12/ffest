import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import pngfix from '../assets/images/pngfix.png';
import pngfix2 from '../assets/images/pngfix2.png';

const FutureFest2025 = () => {
  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, [0, 1000], [0, 360]);

  return (
    <div className="bg-white text-gray-800 px-6 py-10 md:px-20 lg:px-40 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Left Section */}
      <div className="space-y-6 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold">
          Imagine a world where creativity knows no bounds and innovators shape the future.
        </h1>
        <p className="text-lg md:text-xl">
          Welcome to Future Fest 2025, Pakistan's largest tech event, happening on
          <span className="font-semibold"> January 24-26, 2025 </span>
          at the Expo Center Lahore.
        </p>
        <p className="text-base md:text-lg">
          This fourth edition celebrates innovation, the creative economy, and regional progress by
          gathering the brightest minds from over 50 countries to share ideas, showcase cutting-edge
          technology, and inspire each other to push boundaries.
        </p>
        <p className="text-base md:text-lg">
          Under the theme <span className="font-semibold">"Creators United,"</span> Future Fest is more than
          an event—it's a movement. With activations, networking opportunities, and global tech
          leaders, it's the ultimate destination for entrepreneurs, innovators, and anyone passionate
          about technology.
        </p>
        <p className="text-lg md:text-xl font-semibold">
          Supported by industry giants like <span className="font-bold">Hashoo Group, Graana, EasyPaisa,</span>
          and <span className="font-bold">Google Cloud</span>, Future Fest has driven
          <span className="text-green-600"> $200M+ </span>
          in investments and created <span className="text-green-600">30,000+ jobs.</span>
        </p>
        <p className="text-lg md:text-xl font-semibold">
          Recognized as the <span className="italic">"World's Largest Innovation Expo,"</span> it's an
          experience that inspires and empowers.
        </p>
        <p className="text-lg md:text-xl">
          Mark your calendars for <span className="font-semibold">January 24-26, 2025</span>, and join the
          movement.
        </p>
      </div>

      {/* Right Section */}
      <div className="flex justify-center items-center relative">
        <motion.div
          className="rounded-full shadow-lg overflow-hidden w-64 h-64 md:w-80 md:h-80 z-10 mb-72"
          style={{ rotate }}
        >
          <img
            src={pngfix2}
            alt="Future Fest Graphic"
            className="object-cover w-full h-full"
          />
        </motion.div>
        <img className="absolute max-sm:hidden bottom-0 md:bottom-[210px] w-60 md:w-72" src={pngfix} alt="" />
      </div>
    </div>
  );
};

export default FutureFest2025;
