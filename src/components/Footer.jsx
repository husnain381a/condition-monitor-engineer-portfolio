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
              <Activity size={28} />
              <span>Muhammad Talha</span>
            </div>
            <p className="footer-tagline">
              Precision monitoring for industrial excellence.
            </p>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="footer-social">
              <a href="mailto:muhammadtalha170219@gmail.com" className="social-link" title="Email">
                <Mail size={20} />
              </a>
              <a href="tel:+923016174717" className="social-link" title="Phone">
                <Phone size={20} />
              </a>
              <a href="https://linkedin.com/in/muhammad-talha-23154a217" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
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
