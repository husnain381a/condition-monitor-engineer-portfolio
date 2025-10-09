import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cpu, Camera, Gauge, Ruler, Monitor, Database } from 'lucide-react';

export default function Tools() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const tools = [
    { icon: Cpu, name: 'SKF Microlog', category: 'Vibration Analyzer' },
    { icon: Camera, name: 'FLIR ThermaCAM', category: 'Thermal Camera' },
    { icon: Gauge, name: 'CSI 2140', category: 'Machinery Analyzer' },
    { icon: Ruler, name: 'Pruftechnik Rotalign', category: 'Laser Alignment' },
    { icon: Monitor, name: 'Emerson AMS Suite', category: 'Asset Management' },
    { icon: Database, name: 'SAP PM', category: 'CMMS Software' },
    { icon: Cpu, name: 'Bentley Nevada', category: 'Monitoring System' },
    { icon: Camera, name: 'FLUKE Ti400', category: 'Infrared Camera' },
    { icon: Gauge, name: 'IRD Balancing', category: 'Dynamic Balancing' },
  ];

  return (
    <section id="tools" className="section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Tools & Technologies</h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="tools-grid">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              className="tool-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <div className="tool-icon">
                <tool.icon size={32} />
              </div>
              <div className="tool-name">{tool.name}</div>
              <div className="tool-category">{tool.category}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
