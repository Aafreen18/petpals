import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { client} from '../lib/sanity';

const DoctorsMeet = () => {
  const [data, setData] = useState(null); // title, paragraph, images
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isSmallDevice, setIsSmallDevice] = useState(false);

  // Fetch data from Sanity
  useEffect(() => {
    client.fetch(`*[_type == "doctorsMeet"][0]{
      title,
      paragraph,
      images[]{
        image{
          asset->{_id, url}
        },
        imageUrl,
        alt
      }
    }`)
    .then(setData);
  }, []);

  const getVisibleCount = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  useEffect(() => {
    const handleResize = () => {
      const newVisibleCount = getVisibleCount();
      setVisibleCount(newVisibleCount);
      setIsSmallDevice(newVisibleCount === 1);
      if (newVisibleCount === 1) setIsAutoPlaying(false);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!data?.images || !isAutoPlaying || isSmallDevice) return;
    const interval = setInterval(() => {
      const maxIndex = data.images.length - visibleCount;
      setCurrentIndex((prevIndex) => prevIndex >= maxIndex ? 0 : prevIndex + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, visibleCount, data?.images?.length, isSmallDevice]);

  const goToPrevious = useCallback(() => {
    const maxIndex = data?.images?.length - visibleCount;
    setCurrentIndex((prevIndex) => prevIndex <= 0 ? maxIndex : prevIndex - 1);
  }, [visibleCount, data?.images?.length]);

  const goToNext = useCallback(() => {
    const maxIndex = data?.images?.length - visibleCount;
    setCurrentIndex((prevIndex) => prevIndex >= maxIndex ? 0 : prevIndex + 1);
  }, [visibleCount, data?.images?.length]);

  const handleMouseEnter = () => !isSmallDevice && setIsAutoPlaying(false);
  const handleMouseLeave = () => !isSmallDevice && setIsAutoPlaying(true);

  if (!data) return null;

  return (
    <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] overflow-hidden p-6" style={{ backgroundColor: '#f7f3ea' }}>
      <div className="text-center mb-8">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ color: '#821b1f' }}
        >
          {data.title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          style={{ color: '#b98a32' }}
        >
          {data.paragraph}
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={goToPrevious}
            className="p-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
            style={{ backgroundColor: '#821b1f' }}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </motion.button>

          <div className="flex-1 overflow-hidden rounded-2xl shadow-2xl">
            <div className={`relative ${isSmallDevice ? 'h-80' : 'h-64 md:h-80 lg:h-96'}`}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 flex gap-2 p-2"
                >
                  {data.images?.slice(currentIndex, currentIndex + visibleCount).map((image, index) => (
                    <motion.div
                      key={image.image?.asset?._id || image.imageUrl || index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex-1 relative overflow-hidden rounded-xl group"
                    >
                     {(image.imageUrl || image.image?.asset?.url) && (
                        <img
                          src={image.imageUrl || image.image.asset.url}
                          alt={image.alt || ''}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-white text-sm font-medium">{image.alt}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={goToNext}
            className="p-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
            style={{ backgroundColor: '#821b1f' }}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </motion.button>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: data.images.length - visibleCount + 1 }).map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'scale-125' : 'hover:scale-110'
              }`}
              style={{ 
                backgroundColor: index === currentIndex ? '#821b1f' : '#b98a32',
                opacity: index === currentIndex ? 1 : 0.6
              }}
            />
          ))}
        </div>

        {!isSmallDevice && (
          <div className="flex justify-center mt-4">
            <div className="flex items-center space-x-2 text-sm" style={{ color: '#b98a32' }}>
              <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'animate-pulse' : ''}`} 
                  style={{ backgroundColor: isAutoPlaying ? '#821b1f' : '#b98a32' }} />
              <span>{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default DoctorsMeet;
