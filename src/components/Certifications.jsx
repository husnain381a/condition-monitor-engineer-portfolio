import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, CheckCircle } from 'lucide-react';

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certifications = [
    {
      title: 'Vibration Analyst Category III',
      issuer: 'Vibration Institute',
      year: '2022',
      description: 'Advanced certification for complex vibration analysis and diagnostics'
    },
    {
      title: 'Thermography Level II',
      issuer: 'Infraspection Institute',
      year: '2021',
      description: 'Certified thermographer for electrical and mechanical systems'
    },
    {
      title: 'ISO 18436-2 Category II',
      issuer: 'ISO Accredited Body',
      year: '2021',
      description: 'International certification for condition monitoring and diagnostics'
    },
    {
      title: 'Precision Shaft Alignment',
      issuer: 'Pruftechnik',
      year: '2020',
      description: 'Advanced laser alignment certification for rotating machinery'
    },
    {
      title: 'Dynamic Balancing Specialist',
      issuer: 'IRD Balancing',
      year: '2020',
      description: 'Certified in field balancing techniques and procedures'
    },
    {
      title: 'Reliability Engineer Certification',
      issuer: 'Society for Maintenance & Reliability',
      year: '2019',
      description: 'CMRP certification for maintenance and reliability professionals'
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
          <h2 className="section-title">Certifications</h2>
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
              <div className="certification-badge">
                <Award size={48} />
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
