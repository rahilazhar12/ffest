import React from 'react';
import { motion } from 'framer-motion';

const Attendees = () => {
  return (
    <motion.div 
      className="relative py-8 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div 
        className="absolute inset-0 w-full h-full"
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{ duration: 5, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        style={{ background: 'linear-gradient(270deg, rgba(30, 144, 255, 1), rgba(255, 105, 180, 1))', backgroundSize: '200% 200%' }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="mt-16 text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-extrabold text-purple-600">WHO CAN ATTEND?</h2>
          <p className="text-2xl text-blue-500 font-bold mt-2">3,000+ ATTENDEES EXPECTED</p>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            {[  
              { title: 'IT Training Professionals', icon: 'https://via.placeholder.com/40' },
              { title: 'Government Institutions', icon: 'https://via.placeholder.com/40' },
              { title: 'CEOs & CXOs', icon: 'https://via.placeholder.com/40' },
              { title: 'Tech Influencers', icon: 'https://via.placeholder.com/40' },
              { title: 'Graduates', icon: 'https://via.placeholder.com/40' },
              { title: 'Freelancers', icon: 'https://via.placeholder.com/40' },
              { title: 'Software Houses', icon: 'https://via.placeholder.com/40' },
              { title: 'Tech Companies', icon: 'https://via.placeholder.com/40' },
              { title: 'Media Professionals', icon: 'https://via.placeholder.com/40' },
              { title: 'Academia', icon: 'https://via.placeholder.com/40' },
              { title: 'Startups', icon: 'https://via.placeholder.com/40' },
              { title: 'Students', icon: 'https://via.placeholder.com/40' },
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="p-4 bg-white bg-opacity-70 rounded-lg shadow-md flex items-center space-x-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img 
                  src={item.icon} 
                  alt={item.title} 
                  className="w-12 h-12" 
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.span 
                  className="text-lg font-semibold text-purple-700"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  {item.title}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Attendees;
