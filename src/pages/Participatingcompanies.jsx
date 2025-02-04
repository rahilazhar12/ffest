import React from 'react';
import { motion } from 'framer-motion';
import 'aos/dist/aos.css';
import AOS from 'aos';

const ParticipatingCompaniesSection = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const companies = [
    { name: 'KPITB', logo: 'https://via.placeholder.com/100' },
    { name: 'PASHA', logo: 'https://via.placeholder.com/100' },
    { name: 'DEVSINC', logo: 'https://via.placeholder.com/100' },
    { name: 'RedotPay', logo: 'https://via.placeholder.com/100' },
    { name: 'Empowerers', logo: 'https://via.placeholder.com/100' },
    { name: 'WebPro School', logo: 'https://via.placeholder.com/100' },
    { name: 'NFTP', logo: 'https://via.placeholder.com/100' },
    { name: 'Zero Loft', logo: 'https://via.placeholder.com/100' },
    { name: 'Agency One', logo: 'https://via.placeholder.com/100' },
    { name: 'MILKAR', logo: 'https://via.placeholder.com/100' },
    { name: 'Nearpeer', logo: 'https://via.placeholder.com/100' },
    { name: 'ALKHIDMAT', logo: 'https://via.placeholder.com/100' },
    { name: 'TORU Enterprises', logo: 'https://via.placeholder.com/100' },
    { name: 'PIPD', logo: 'https://via.placeholder.com/100' },
    { name: 'Grand City', logo: 'https://via.placeholder.com/100' },
    { name: 'Jannat ul Firdous Trust', logo: 'https://via.placeholder.com/100' },
    { name: 'Learn', logo: 'https://via.placeholder.com/100' },
    { name: 'AKT Enterprises', logo: 'https://via.placeholder.com/100' },
    { name: 'Green Mansions', logo: 'https://via.placeholder.com/100' },
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
          PARTICIPATING COMPANIES
        </motion.h1>
      </div>
      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        data-aos="fade-up"
      >
        {companies.map((company, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-transparent backdrop-blur-md shadow-lg rounded-2xl transform hover:scale-105 transition duration-300 relative border-animated"
            whileHover={{ scale: 1.1 }}
          >
            <div className="animated-border"></div>
            <img
              src={company.logo}
              alt={company.name}
              className="w-24 h-24 rounded-lg object-cover mb-4 z-10 relative"
            />
            <h2 className="text-lg font-semibold text-gray-200 text-center z-10 relative">
              {company.name}
            </h2>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ParticipatingCompaniesSection;

