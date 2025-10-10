import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, CheckCircle, BookOpen } from 'lucide-react';

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certifications = [
    {
      type: 'certification',
      title: 'Vibration Analyst Category II',
      issuer: 'MOBIUS Institute',
      year: '2025',
      description: 'Completed advanced training in vibration analysis, fault diagnosis, and condition monitoring techniques for rotating machinery.',
      image: 'https://res.cloudinary.com/dlkyywyml/image/upload/v1760105584/vcat-ii-certificate_uv1lg4.jpg'
    },
    {
      type: 'certification',
      title: 'Certified CAT-II Vibration Analyst',
      issuer: 'MOBIUS Institute',
      year: '2025',
      description: 'Internationally recognized certification demonstrating proficiency in vibration analysis, data interpretation, and predictive maintenance practices.',
      image: 'https://res.cloudinary.com/dlkyywyml/image/upload/v1760105584/cat-ii-certificate_pwxnt9.jpg'
    },
  ];

  return (
    <section id="certifications" className="section section-dark" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Certifications & Training</h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="certification-card"
              initial={{ opacity: 0, y: 50, rotateY: -90 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="certification-image-wrapper">
                <img src={cert.image} alt={cert.title} className="certification-image" />
                <div className="certification-type-badge">
                  {cert.type === 'certification' ? <Award size={20} /> : <BookOpen size={20} />}
                  <span>{cert.type === 'certification' ? 'Certified' : 'Training'}</span>
                </div>
              </div>
              <div className="certification-content">
                <h3 className="certification-title">{cert.title}</h3>
                <div className="certification-issuer">
                  <CheckCircle size={16} />
                  <span>{cert.issuer}</span>
                </div>
                <p className="certification-year">{cert.year}</p>
                <p className="certification-description">{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
