import React from 'react';
import { motion } from 'framer-motion';
import 'aos/dist/aos.css';
import AOS from 'aos';

const AttendeesSection = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const attendees = [
    { label: 'IT Training Professionals', icon: '💻' },
    { label: 'Government Institutions', icon: '🏛️' },
    { label: 'CEOs & CXOs', icon: '📊' },
    { label: 'Tech Influencers', icon: '🌐' },
    { label: 'Graduates', icon: '🎓' },
    { label: 'Freelancers', icon: '🧑‍💻' },
    { label: 'Software Houses', icon: '🖥️' },
    { label: 'Tech Companies', icon: '🏢' },
    { label: 'Media Professionals', icon: '🎥' },
    { label: 'Academia', icon: '📚' },
    { label: 'Startups', icon: '🚀' },
    { label: 'Students', icon: '👩‍🎓' },
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
          WHO CAN ATTEND?
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-4xl mt-2 outline-text"
        >
          3,000+ ATTENDEES EXPECTED
        </motion.p>
      </div>
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        data-aos="fade-up"
      >
        {attendees.map((attendee, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center p-6 bg-transparent backdrop-blur-md shadow-lg rounded-2xl hover:scale-105 transform transition duration-300 border border-white/20"
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className="text-5xl mb-4 text-purple-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 * index, duration: 0.5 }}
            >
              {attendee.icon}
            </motion.div>
            <motion.h2
              className="text-lg font-semibold text-gray-200 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 * index + 0.2, duration: 0.5 }}
            >
              {attendee.label}
            </motion.h2>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AttendeesSection;

