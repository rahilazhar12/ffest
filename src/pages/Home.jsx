import React from "react";
import { motion } from "framer-motion";
import banner from '../assets/images/banner.png'

const bgVariants = {
  hidden: { y: "100%" },
  visible: { y: "0%", transition: { duration: 1, ease: "easeOut" } },
};

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 1 } },
};

const buttonsVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.4 },
  },
};

const registerButtonVariants = {
  hidden: { x: "-100%" },
  visible: { x: "0%", transition: { duration: 0.8, ease: "easeOut" } },
};

const partnerButtonVariants = {
  hidden: { y: "100%" },
  visible: { y: "0%", transition: { duration: 0.8, ease: "easeOut" } },
};

const floorPlanButtonVariants = {
  hidden: { x: "100%" },
  visible: { x: "0%", transition: { duration: 0.8, ease: "easeOut" } },
};

const FutureFestLandingPage = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Blurred Background */}
      <motion.div
        className="absolute inset-0x bg-cover bg-center w-full h-full z-10"
        style={{
          backgroundImage: `url(${banner})`,
        }}
        variants={bgVariants}
        initial="hidden"
        animate="visible"
      ></motion.div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
          className="text-center"
        >
          {/* Animated Headline */}
          {/* <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 text-purple-300"
            variants={textVariants}
          >
            Pakistan’s Largest Tech Event
          </motion.h1> */}

          {/* Animated Date and Location */}
          {/* <motion.p
            className="text-2xl md:text-2xl mb-8 font-bold backdrop-blur-sm text-blue-400"
            variants={textVariants}
          >
            KPK'S LARGEST
            <br />
            TECHNOLOGY GATHERING
          </motion.p> */}

          {/* Animated Buttons */}
          <motion.div
            className="flex flex-col md:flex-row gap-4 justify-center"
            variants={buttonsVariants}
          >
            {/* Register Button: Left to Right */}
            {/* <motion.button
              className="backdrop-blur-xl text-pink-500 px-6 py-3 rounded-full font-bold hover:backdrop-blur-3xl transition"
              variants={registerButtonVariants}
            >
              REGISTER NOW
            </motion.button> */}

            {/* Partner Button: Down to Up */}
            {/* <motion.button
              className="backdrop-blur-xl text-pink-500 px-6 py-3 rounded-full font-bold hover:backdrop-blur-3xl transition"
              variants={partnerButtonVariants}
            >
              BECOME A PARTNER
            </motion.button> */}

            {/* Floor Plan Button: Right to Left */}
            {/* <motion.button
              className="backdrop-blur-xl text-pink-500 px-6 py-3 rounded-full font-bold hover:backdrop-blur-3xl transition"
              variants={floorPlanButtonVariants}
            >
              VIEW FLOOR PLAN
            </motion.button> */}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default FutureFestLandingPage;
