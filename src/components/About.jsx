import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Award, TrendingUp } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Target, label: 'Precision', value: '99.9%' },
    { icon: Award, label: 'Certifications', value: '10+' },
    { icon: TrendingUp, label: 'Uptime Improved', value: '35%' },
  ];

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="about-paragraph">
              I’m Muhammad Talha, a Certified Vibration Analyst (ISO Category II) and Condition Monitoring Engineer with hands-on experience in predictive maintenance, vibration diagnostics, infrared thermography, and reliability engineering. My goal is to help industries achieve maximum equipment uptime by detecting faults early, improving maintenance strategies, and ensuring operational excellence.
            </p>
            <p className="about-paragraph">
             Over the course of my career, I’ve worked on critical assets including motors, pumps, turbines, compressors, and gearboxes — performing advanced vibration analysis, thermal inspections, and dynamic balancing using tools such as Emerson CSI 2140, AMS Machinery Manager, and FLIR thermal cameras.
            </p>
            <p className="about-paragraph">
             Currently, I’m part of the HUBCO Thar Power Plant (via CONEXUS Company), where I lead diagnostics and reliability improvement programs across high-value rotating machinery. My work focuses on reducing unplanned downtime, optimizing maintenance intervals, and supporting decision-making with data-driven insights.
            </p>
            <p className="about-paragraph">
             Previously, I gained foundational experience at Maple Leaf Cement Factory Limited, where I developed strong practical skills in vibration data collection, thermography, and fault detection. Beyond technical expertise, I bring strong leadership, analytical thinking, and collaboration skills, shaped by my background in both engineering and management.
            </p>
          </motion.div>

          <motion.div
            className="about-stats"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="stat-card"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                style={{ transitionDelay: `${0.6 + index * 0.1}s` }}
              >
                <div className="stat-icon">
                  <stat.icon size={32} />
                </div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
