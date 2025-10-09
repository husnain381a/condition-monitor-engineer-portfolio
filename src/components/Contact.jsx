import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'muhammadtalha170219@gmail.com', link: 'mailto:muhammadtalha170219@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+92 (301) 617-4717', link: 'tel:+923016174717' },
    { icon: MapPin, label: 'Location', value: 'Gujranwala, Pakistan', link: null },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/yourprofile', link: 'https://linkedin.com/in/muhammad-talha-23154a217' },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Let's discuss how I can help optimize your plant's reliability and performance
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info-section"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link || '#'}
                className="contact-info-card"
                whileHover={{ scale: 1.05, x: 10 }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
                target={info.link && info.link.startsWith('http') ? '_blank' : undefined}
                rel={info.link && info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <div className="contact-info-icon">
                  <info.icon size={24} />
                </div>
                <div className="contact-info-text">
                  <div className="contact-info-label">{info.label}</div>
                  <div className="contact-info-value">{info.value}</div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="email@example.com"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="How can I help?"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Tell me about your project or inquiry..."
              />
            </div>
            <motion.button
              type="submit"
              className="btn-primary submit-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send size={20} />
              <span>Send Message</span>
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
