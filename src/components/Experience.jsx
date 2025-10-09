import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, MapPin } from 'lucide-react';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: 'Condition Monitoring Engineer',
      company: 'HUBCO Thar Power Limited',
      location: 'Thar, Sindh, Pakistan',
      period: '2025 - Present',
      responsibilities: [
        'Performed advanced vibration and thermography diagnostics on critical assets',
        'Led root cause analysis (RCA) and developed reliability-based maintenance strategies',
        'Reduced unplanned downtime by 40% through proactive fault detection',
        'Collaborated with engineering teams to enhance asset uptime and optimize performance'
      ]
    },
    {
      title: 'Condition Monitoring Trainee',
      company: 'Maple Leaf Cement Factory Limited',
      location: 'Mianwali, Pakistan',
      period: '2023 - 2024',
      responsibilities: [
        'Conducted vibration and thermographic assessments for rotating equipment',
        'Gained practical expertise using sensors, accelerometers, and IR cameras',
        'Assisted in condition-based maintenance planning and reporting',
        'Collaborated with maintenance teams to optimize equipment reliability'
      ]
    },
    {
      title: 'Branch Manager',
      company: 'Moments Store (University of Sialkot Collaboration)',
      location: 'Sialkot, Pakistan',
      period: '2020 - 2023',
      responsibilities: [
        'Managed operations and sales teams, ensuring excellent client experience',
        'Strengthened leadership, communication, and data-driven decision-making',
        'Implemented marketing strategies that boosted sales by 25%',
        'Handled inventory, budgeting, and vendor relations to optimize profitability'
      ]
    },
  ];

  return (
    <section id="experience" className="section section-dark" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Professional Experience</h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="experience-list">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-card"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="experience-header">
                <div className="experience-icon">
                  <Briefcase size={32} />
                </div>
                <div className="experience-title-section">
                  <h3 className="experience-title">{exp.title}</h3>
                  <h4 className="experience-company">{exp.company}</h4>
                  <div className="experience-meta">
                    <span className="experience-location">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                    <span className="experience-period">{exp.period}</span>
                  </div>
                </div>
              </div>
              <ul className="experience-responsibilities">
                {exp.responsibilities.map((resp, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.2 + idx * 0.1 }}
                  >
                    {resp}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
