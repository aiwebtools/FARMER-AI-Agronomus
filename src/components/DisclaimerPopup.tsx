
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X } from 'lucide-react';

interface DisclaimerPopupProps {
  onAccept: () => void;
}

const DisclaimerPopup: React.FC<DisclaimerPopupProps> = ({ onAccept }) => {
  const [isHovering, setIsHovering] = useState(false);
  
  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative max-w-md w-full rounded-xl overflow-hidden"
        >
          {/* Animated gradient border */}
          <div className="absolute inset-0 bg-gradient-to-r from-agronomus-green via-agronomus-highlight to-agronomus-blue opacity-75 blur-sm -z-10"></div>
          
          {/* Content */}
          <div className="bg-agronomus-dark/95 backdrop-blur-md p-6 md:p-8 rounded-xl border border-white/10">
            <div className="mb-5 text-center">
              <h2 className="font-display text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-agronomus-green to-agronomus-blue font-bold mb-1">
                DISCLAIMER
              </h2>
              <p className="text-agronomus-highlight/80 font-display text-sm tracking-wide">
                Before using Agronomus AI
              </p>
            </div>
            
            <div className="mb-6 text-gray-300 text-sm md:text-base space-y-4 max-h-[200px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-agronomus-green/30 scrollbar-track-transparent">
              <p>
                <span className="text-white font-medium">Agronomus AI Farming Expert</span> provides information for general educational and informational purposes only.
              </p>
              
              <p>
                The content is not intended to serve as professional agricultural, financial, or legal advice. While we strive for accuracy, we make no guarantees regarding completeness or reliability of information.
              </p>
              
              <p>
                By clicking "I AGREE" below, you acknowledge that you understand this disclaimer and agree to use this tool at your own risk.
              </p>
            </div>
            
            <div className="flex justify-center">
              <motion.button
                onClick={onAccept}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary group relative overflow-hidden"
              >
                <span className="flex items-center gap-2 relative z-10">
                  <Check className={`w-5 h-5 transition-transform duration-300 ${isHovering ? 'scale-110' : ''}`} />
                  I AGREE
                </span>
                <motion.div 
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  animate={isHovering ? { x: '100%' } : { x: '-100%' }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default DisclaimerPopup;
