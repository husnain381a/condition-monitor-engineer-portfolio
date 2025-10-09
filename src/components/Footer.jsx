import { motion } from 'framer-motion';
import { Activity, Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="footer-logo">
              <Activity size={32} />
              <span>Muhammad Talha</span>
            </div>
            <p className="footer-tagline">
              Precision monitoring for industrial excellence
            </p>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#experience">Experience</a></li>
            </ul>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              <li>Vibration Analysis</li>
              <li>Thermography</li>
              <li>Plant Reliability</li>
              <li>Predictive Maintenance</li>
            </ul>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="footer-title">Connect</h4>
            <div className="footer-social">
              <a href="mailto:your.email@example.com" className="social-link">
                <Mail size={20} />
              </a>
              <a href="tel:+15551234567" className="social-link">
                <Phone size={20} />
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="social-link">
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Muhammad Talha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
