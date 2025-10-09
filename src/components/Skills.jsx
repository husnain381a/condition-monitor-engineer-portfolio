import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Activity, Thermometer, Wrench, TrendingUp, Settings, Shield } from 'lucide-react';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    {
      icon: Activity,
      title: 'Vibration Analysis',
      description: 'Expert in detecting bearing faults, unbalance, misalignment, and mechanical looseness in rotating equipment.',
      level: 90,
    },
    {
      icon: Thermometer,
      title: 'IRT Thermography',
      description: 'Skilled in identifying electrical and mechanical hotspots through advanced thermal imaging inspections.',
      level: 85,
    },
    {
      icon: TrendingUp,
      title: 'Dynamic Balancing & Laser Alignment',
      description: 'Proficient in performing on-site dynamic balancing and precision laser alignment of rotating machinery.',
      level: 80,
    },
    {
      icon: Settings,
      title: 'Reliability-Centered Maintenance (RCM)',
      description: 'Experienced in developing reliability-based maintenance strategies to enhance equipment uptime and efficiency.',
      level: 85,
    },
    {
      icon: Wrench,
      title: 'Root Cause Failure Analysis (RCFA)',
      description: 'Specialized in diagnosing underlying failure causes using vibration and thermographic data analytics.',
      level: 90,
    },
    {
      icon: Shield,
      title: 'Predictive Maintenance Program Design',
      description: 'Adept at implementing condition-based monitoring programs to predict faults and reduce unplanned downtime.',
      level: 88,
    },
  ];

  return (
    <section id="skills" className="section section-dark" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Core Competencies</h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              className="skill-card"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="skill-icon">
                <skill.icon size={40} />
              </div>
              <h3 className="skill-title">{skill.title}</h3>
              <p className="skill-description">{skill.description}</p>
              <div className="skill-bar-container">
                <motion.div
                  className="skill-bar"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                >
                 
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
