import React, { useState, useEffect } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import { usePropertyContext } from '../context/context.store.js';
import { ReactComponent as Left } from '../common/left.svg';
import { ReactComponent as Right } from '../common/right.svg';
function Carousel() {
  const prop = usePropertyContext();
  const [current, setCurrent] = useState(0);
  const [isFocus, setIsFocus] = useState(false);

  const onPrevClick = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };
  const onNextClick = () => {
    if (current < prop.length - 1) {
      setCurrent(current + 1);
    }
  };
  useEffect(() => {
    if (
      prop.listings &&
      Array.isArray(prop.listings) &&
      prop.listings.length > 0
    ) {
      // Set initial values or perform other actions if needed
      setCurrent(1);
    }
  }, [prop.listings]);
  return (
    <main className="flex flex-col items-center justify-between mt-28">
      <div className="px-6 py-4 mb-4 text-center">
        <h1 className="text-[#1DAEFF] text-4xl font-semibold">
          Other Projects
        </h1>
        <span style={{ color: 'rgba(255, 255, 255, 0.50)' }} className='text-lg mt-4'>
          Other projects by us in different locations
        </span>
      </div>
      <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
        <div className="relative w-full max-w-[1500px] flex items-center">
          {/* Left/right controls */}
          <AnimatePresence>
            {isFocus && (
              <motion.div
                className="absolute left-2 right-2 flex justify-between z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onHoverStart={() => setIsFocus(true)}
                onHoverEnd={() => setIsFocus(false)}
              >
                <button onClick={onPrevClick}>
                  <Left className="h-8 w-8" />
                </button>
                <button onClick={onNextClick}>
                  <Right className="h-8 w-8" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
          {/* List of images */}
          <motion.div
            className="flex gap-4 flex-nowrap"
            animate={{ x: `calc(-${current * 100}% - ${current}rem)` }}
            onHoverStart={() => setIsFocus(true)}
            onHoverEnd={() => setIsFocus(false)}
          >
            {prop.listings &&
              Array.isArray(prop.listings) &&
              prop.listings.length > 0 &&
              prop.listings.map((item, idx) => (
                <motion.img
                  key={idx}
                  src={item.image}
                  alt={item}
                  animate={{ opacity: idx === current ? 1 : 0.3 }}
                  className="aspect-[16/9] object-cover"
                />
              ))}
          </motion.div>
          {/* Controll pill */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
            <div className="flex gap-3 px-3 py-2 bg-gray-400 rounded-full opacity-80">
              {prop.listings &&
                Array.isArray(prop.listings) &&
                prop.listings.length > 0 &&
                prop.listings.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    className={`w-3 h-3 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 ${
                      idx === current && 'bg-gray-400'
                    }`}
                  />
                ))}
            </div>
          </div>
        </div>
      </MotionConfig>
    </main>
  );
}

export default Carousel;
