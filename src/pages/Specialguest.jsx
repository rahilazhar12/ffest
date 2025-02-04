import React from 'react';
import { motion } from 'framer-motion';
import 'aos/dist/aos.css';
import AOS from 'aos';

const SpecialGuestsSection = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const guests = [
    { name: 'Guest 1', image: 'https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-175961.jpg?t=st=1738659145~exp=1738662745~hmac=e4d1b8199f269e7131cfcbab48e7e3695dc62e415dad4f82cd43d03991e35a08&w=740' },
    { name: 'Guest 2', image: 'https://via.placeholder.com/100' },
    { name: 'Guest 3', image: 'https://via.placeholder.com/100' },
    { name: 'Guest 4', image: 'https://via.placeholder.com/100' },
    { name: 'Guest 5', image: 'https://via.placeholder.com/100' },
    { name: 'Guest 6', image: 'https://via.placeholder.com/100' },
    { name: 'Guest 7', image: 'https://via.placeholder.com/100' },
    { name: 'Guest 8', image: 'https://via.placeholder.com/100' },
    { name: 'Guest 9', image: 'https://via.placeholder.com/100' },
    { name: 'Guest 10', image: 'https://via.placeholder.com/100' },
    { name: 'Guest 11', image: 'https://via.placeholder.com/100' },
    { name: 'Guest 12', image: 'https://via.placeholder.com/100' },
    { name: 'Guest 13', image: 'https://via.placeholder.com/100' },
    { name: 'Guest 14', image: 'https://via.placeholder.com/100' },
    { name: 'Guest 15', image: 'https://via.placeholder.com/100' },
  ];

  return (
    <div className="bg-gradient-to-r from-purple-700 via-blue-800 to-purple-900 py-12 px-6">
      <div className="text-center mb-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-400"
        >
          SOME OF OUR SPECIAL GUESTS
        </motion.h1>
      </div>
      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        data-aos="fade-up"
      >
        {guests.map((guest, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-transparent backdrop-blur-md shadow-lg rounded-2xl transform hover:scale-105 transition duration-300 relative border-animated"
            whileHover={{ scale: 1.1 }}
          >
            <div className="animated-border"></div>
            <img
              src={guest.image}
              alt={guest.name}
              className="w-24 h-24 rounded-full object-cover mb-4 z-10 relative"
            />
            <h2 className="text-lg font-semibold text-gray-200 text-center z-10 relative">
              {guest.name}
            </h2>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SpecialGuestsSection;


