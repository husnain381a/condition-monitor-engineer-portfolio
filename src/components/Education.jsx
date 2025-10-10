import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      degree: 'Bachelor of Science',
      field: 'Mechanical Engineering',
      institution: 'University of Sialkot',
      year: '2020 - 2024',
      description: 'Specialized in mechanical systems, thermodynamics, and machine design with focus on industrial applications.'
    },
    {
      degree: 'Intermediate',
      field: 'Pre-Engineering',
      institution: 'Punjab Group of Colleges',
      year: '2018 - 2020',
      description: 'Focused on physics, mathematics, and chemistry to build a strong foundation for engineering studies.'
    },
    {
      degree: "O' Levels",
      field: 'Computer Science',
      institution: 'Beaconhouse School System',
      year: '2018',
      description: 'Completed O Levels with a focus on computer science, mathematics, and English literature.'
    },
  ];

  return (
    <section id="education" className="section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Education</h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="education-timeline">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="timeline-marker">
                <GraduationCap size={24} />
              </div>
              <motion.div
                className="timeline-content"
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="timeline-header">
                  <h3 className="timeline-title">{edu.degree}</h3>
                  <div className="timeline-year">
                    <Calendar size={16} />
                    <span>{edu.year}</span>
                  </div>
                </div>
                <h4 className="timeline-subtitle">{edu.field}</h4>
                <p className="timeline-institution">{edu.institution}</p>
                <p className="timeline-description">{edu.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
