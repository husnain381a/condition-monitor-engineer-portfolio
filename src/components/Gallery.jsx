import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { X } from 'lucide-react';

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      url: 'https://res.cloudinary.com/dlkyywyml/image/upload/v1761493834/WhatsApp_Image_2025-10-26_at_8.47.51_PM_xidd97.jpg',
      
    },
    {
      url: 'https://res.cloudinary.com/dlkyywyml/image/upload/v1761493834/WhatsApp_Image_2025-10-26_at_8.47.52_PM_dojqdd.jpg',
    },
    {
      url: 'https://res.cloudinary.com/dlkyywyml/image/upload/v1761493832/WhatsApp_Image_2025-10-26_at_8.47.53_PM_gpkil2.jpg',
      
    },
    {
      url: 'https://res.cloudinary.com/dlkyywyml/image/upload/v1761494161/WhatsApp_Image_2025-10-26_at_8.47.52_PM_2_insbxr.jpg',
      
    },
    {
      url: 'https://res.cloudinary.com/dlkyywyml/image/upload/v1761493832/WhatsApp_Image_2025-10-26_at_8.47.52_PM_1_p8r3ei.jpg',
     
    },
    {
      url: 'https://res.cloudinary.com/dlkyywyml/image/upload/v1761493832/WhatsApp_Image_2025-10-26_at_8.47.52_PM_3_uuy2tc.jpg',
    
    },
  ];

  return (
    <>
      <section id="gallery" className="section" ref={ref}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Gallery</h2>
            <div className="title-underline"></div>
          </motion.div>

          <div className="gallery-grid">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="gallery-item"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedImage(image)}
              >
                <img src={image.url} alt={image.title} className="gallery-image" />
                <div className="gallery-overlay">
                  <h3 className="gallery-title">{image.title}</h3>
                  <p className="gallery-description">{image.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <motion.div
          className="image-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="modal-content"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.5 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={() => setSelectedImage(null)}>
              <X size={24} />
            </button>
            <img src={selectedImage.url} alt={selectedImage.title} className="modal-image" />
            <div className="modal-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
