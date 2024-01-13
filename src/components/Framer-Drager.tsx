import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { usePropertyContext } from '../context/context.store.js';

function FramerDrag() {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);
  const prop = usePropertyContext();
  const controls = useAnimation();

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }

    const interval = setInterval(() => {
      controls.start({
        x: -width,
        transition: {
          type: 'tween',
          duration: 10,
        },
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [prop.listings, width, controls]);

  return (
    <>
      <motion.div ref={carousel} className="cursor-grab overflow-hidden mt-20">
        <motion.div
          className="flex"
          drag="x"
          whileTap={{ cursor: 'grabbing' }}
          dragConstraints={{ right: 0, left: -width }}
          animate={controls}
        >
          {prop.listings &&
            Array.isArray(prop.listings) &&
            prop.listings.length > 0 &&
            prop.listings.map((item: any) => (
              <motion.div
                className="item min-h-[27rem] min-w-[37rem] p-6"
                key={item.id}
              >
                <img
                  src={item.image}
                  alt="carousel"
                  className="w-full rounded-lg pointer-events-none"
                />
              </motion.div>
            ))}
        </motion.div>
      </motion.div>
    </>
  );
}

export default FramerDrag;
