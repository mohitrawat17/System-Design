import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image1 from '../../public/img1.jpg'
import Image2 from '../../public/img2.jpg'
import Image3 from '../../public/img3.jpg'

const images = [
  Image1,
  Image2,
  Image3,
];

const FramerMotion = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [thumbnails, setThumbnails] = useState(images.slice(1));
  
    const handleImageClick = (index) => {
      const clickedImage = thumbnails[index];
      const newThumbnails = [
        ...thumbnails.slice(0, index),
        ...thumbnails.slice(index + 1),
        images[currentIndex]
      ];
  
      setCurrentIndex(images.indexOf(clickedImage)); // Update to clicked image's index
      setThumbnails(newThumbnails);
    };

  const styles = {
    container: {
      position: 'relative',
      height: '100vh',
      width: '100%',
      overflow: 'hidden',
    },
    transitionData: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      zIndex: 10,
    },
    overlay: {
      position: 'absolute',
      inset: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    content: {
      position: 'relative',
      zIndex: 10,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      textAlign: 'center',
    },
    thumbnailContainer: {
      position: 'absolute',
      bottom: '2.5rem',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 20,
      display: 'flex',
      gap: '1rem',
    },
    thumbnail: {
      width: '80px',
      height: '80px',
      borderRadius: '8px',
      overflow: 'hidden',
      cursor: 'pointer',
    },
    thumbnailImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  };

  return (
    <div style={styles.container}>
      <AnimatePresence initial={false}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          style={styles.transitionData}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          layoutId={`image-${currentIndex}`} // Add layoutId here
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>

      <div style={styles.overlay} />

      <div style={styles.content}>
        <h1>SLIDER PARROT</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro maxime odio quae.
          Eos, officia amet.
        </p>
      </div>

      <div style={styles.thumbnailContainer}>
        <AnimatePresence>
          {thumbnails.map((image, index) => (
            <motion.div
              key={image}
              style={styles.thumbnail}
              onClick={() => handleImageClick(index)}
              layoutId={`image-${images.indexOf(image)}`} // Matching layoutId for transition
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
            >
              <motion.img
                src={image}
                alt={`thumbnail image`}
                style={styles.thumbnailImage}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FramerMotion;
