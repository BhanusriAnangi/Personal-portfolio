import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';
import './Home.css';

const About = () => {
  const services = [
    {
      icon: "🚀",
      title: "Full Stack Development",
      description: "Expertise in end-to-end web development using MongoDB, Express.js, React.js, and Node.js (MERN) stack."
    },
    {
      icon: "⚡",
      title: "API Integration",
      description: "Building robust RESTful APIs and seamless third-party integrations for scalable applications."
    },
    {
      icon: "🛠️",
      title: "Modern Tech Stack",
      description: "Implementing modern development practices with Redux, TypeScript, and cloud deployment solutions."
    }
  ];

  return (
    <Box className="about-modern-section">
      {/* Services Section */}
      <Box className="services-section">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="service-icon">{service.icon}</div>
            <Typography variant="h6" className="service-title">
              {service.title}
            </Typography>
            <Typography variant="body2" className="service-description">
              {service.description}
            </Typography>
          </motion.div>
        ))}
      </Box>

      {/* About Content Section */}
      <Box className="about-content-section">
        {/* Left Section with Image and Floating Stats */}
        <motion.div
          className="image-section"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Box className="image-container">
            <motion.img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800"
              alt="Profile"
              className="about-image"
            />
            <motion.div
              className="floating-box years-box"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <Typography variant="h4" color="success.main">18</Typography>
              <Typography variant="body2">Projects Delivered</Typography>
            </motion.div>
            <motion.div
              className="floating-box projects-box"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <Typography variant="h4" color="primary.main">1+</Typography>
              <Typography variant="body2">Years Experience</Typography>
            </motion.div>
          </Box>
        </motion.div>

        {/* Right Section with Text Content */}
        <motion.div
          className="about-content-modern"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography variant="overline" color="error" fontWeight="bold">
            Full Stack Developer
          </Typography>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Transforming Ideas into Powerful Web Applications
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Hi! I'm a passionate Full Stack Developer specializing in MERN stack development. Here's what I bring to the table:
          </Typography>
          <Typography component="ul" variant="body1" color="text.secondary">
            <li> Expertise in MongoDB, Express.js, React.js, and Node.js</li>
            <li> Building responsive and dynamic user interfaces with React & Redux</li>
            <li> RESTful API development and database architecture</li>
            <li> Cloud deployment with AWS, Heroku, and Vercel</li>
            <li> Performance optimization and security best practices</li>
          </Typography>
          <Button 
            variant="contained" 
            color="error" 
            className="hire-me-btn"
            component="a"
            href={process.env.PUBLIC_URL + "/files/BHANUSRI.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            Download my resume
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
};

export default About;
