import React, { useState } from 'react';
import {
  SiHtml5, SiJavascript, SiReact, SiNodedotjs, SiExpress,
  SiMongodb, SiCss3, SiBootstrap, SiTestinglibrary, SiJirasoftware,
  SiPostman, SiGit
} from 'react-icons/si';
import { FaBug, FaCheckCircle, FaUsers, FaBrain, FaCommentDots, FaJava } from 'react-icons/fa';
import { MdPrecisionManufacturing } from 'react-icons/md';
import './Home.css';

const ResumePage = () => {
  const [activeTab, setActiveTab] = useState('about');

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return (
            <div className="resume-section">
            <h2>Based in Hyderabad</h2>
            <p>
              I'm <strong>Anangi Bhanu Sri</strong>, a passionate <strong>Frontend Developer</strong> based in Hyderabad, India. With over <strong>2 years of hands-on experience</strong> in designing and developing responsive, user-centric web interfaces, I specialize in building scalable frontend solutions using modern frameworks like <strong>React.js</strong>.
            </p>
            <p>
              I take pride in crafting beautiful, performant user experiences with clean and reusable code. I'm constantly exploring the latest trends in UI/UX, JavaScript ecosystems, and best practices to ensure my applications are not only functional but delightful to use.
            </p>
            <p>
              Apart from coding, I love collaborating with cross-functional teams, mentoring junior developers, and bringing creative ideas to life through interactive design. Whether it's pixel-perfect design implementation, optimizing web performance, or integrating APIs seamlessly — I enjoy every part of the development journey.
            </p>
          
            <div className="info-grid">
              <div><strong>Name:</strong> Anangi Bhanu Sri</div>
              <div><strong>Nationality:</strong> Indian</div>
              <div><strong>Phone:</strong> 9390623903</div>
              <div><strong>Email:</strong> bhanuannagi1@gmail.com</div>
              <div><strong>Experience:</strong> 2+ years</div>
              <div><strong>Freelance:</strong> Available</div>
              <div><strong>Skype:</strong> live:bhanu</div>
              <div><strong>Languages:</strong> English, Telugu</div>
            </div>
          </div>
          
        );
      case 'experience':
        return (
          <div className="resume-section">
            <h2>Experience</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-header">
                  <h3>Full Stack Developer</h3>
                  <span className="company">Codetek Software Solutions</span>
                  <span className="duration">September 2024 - Present</span>
                </div>
                <p className="job-description">
                  Experienced Full Stack Developer with a strong background in designing, developing, and maintaining high
                  performance web applications using React.js, Node.js, Express.js, and MongoDB. Adept at building scalable
                  frontend UIs, robust backend APIs, and optimizing databases for high efficiency. Passionate about writing
                  clean, maintainable, and efficient code while following best practices.
                </p>
                <div className="skills-section">
                  <h4>Key Skills:</h4>
                  <ul className="skills-list">
                    <li><strong>Frontend:</strong> React.js, JavaScript (ES6+), HTML5, CSS3, Bootstrap</li>
                    <li><strong>Backend:</strong> Node.js, Express.js, RESTful APIs</li>
                    <li><strong>Database:</strong> MongoDB, Mongoose</li>
                    <li><strong>Authentication & Security:</strong> JWT, OAuth, bcrypt</li>
                    <li><strong>Version Control:</strong> Git, GitHub</li>
                    <li><strong>Testing & Debugging:</strong> Postman</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-header">
                  <h3>Frontend Developer</h3>
                  <span className="company">Codetek Software Solutions</span>
                  <span className="duration">June 2024 - September 2024</span>
                </div>
                <p className="job-description">
                  As a Frontend Developer at Codetek Software Solutions, I specialized in building responsive web interfaces using React.js, achieving a 30% improvement in site performance. I implemented modern UI components and CSS practices while maintaining consistent design patterns across applications. Working within Agile sprints, I conducted thorough code reviews and mentored junior developers on frontend best practices. My focus on performance optimization through techniques like lazy loading and image compression significantly enhanced user experience and page load times.
                </p>
                
              </div>
            </div>
          </div>
        );
      case 'education':
        return (
          <div className="resume-section">
            <h2>Education</h2>
            <div className="education-timeline">
              <div className="education-item">
                <div className="education-header">
                  <h3>Bachelor of Technology in Electronics and Communication Engineering</h3>
                  <span className="institution">Siddhartha Institute of Engineering and Technology</span>
                  <span className="duration">2019 - 2023</span>
                </div>
                <div className="education-details">
                  <span className="grade">CGPA: 7.2</span>
                </div>
              </div>

              <div className="education-item">
                <div className="education-header">
                  <h3>Intermediate in MPC</h3>
                  <span className="institution">Narayana Junior College</span>
                  <span className="duration">2017 - 2019</span>
                </div>
                <div className="education-details">
                  <span className="grade">Score: 919</span>
                </div>
              </div>

              <div className="education-item">
                <div className="education-header">
                  <h3>SSC</h3>
                  <span className="institution">Cardinal Gracious High School</span>
                  <span className="duration">2017</span>
                </div>
                <div className="education-details">
                  <span className="grade">GPA: 8.5</span>
                </div>
              </div>
            </div>
          </div>
        );
      case 'skills':
        return (
          <div className="resume-section">
            <h2>Skills</h2>
            <div className="skills-container">
              <div className="skill-category">
                <h3>Frontend Development</h3>
                <div className="skills-list">
                  <div className="skill-item"><SiHtml5 className="skill-icon" /> HTML5</div>
                  <div className="skill-item"><SiCss3 className="skill-icon" /> CSS3</div>
                  <div className="skill-item"><SiBootstrap className="skill-icon" /> Bootstrap</div>
                  <div className="skill-item"><SiReact className="skill-icon" /> React.js</div>
                  <div className="skill-item"><SiJavascript className="skill-icon" /> JavaScript</div>
                </div>
              </div>

              <div className="skill-category">
                <h3>Backend Development</h3>
                <div className="skills-list">
                  <div className="skill-item"><SiNodedotjs className="skill-icon" /> Node.js</div>
                  <div className="skill-item"><SiExpress className="skill-icon" /> Express.js</div>
                  <div className="skill-item"><SiMongodb className="skill-icon" /> MongoDB</div>
                  <div className="skill-item"><FaJava className="skill-icon" /> Java</div>
                </div>
              </div>

              <div className="skill-category">
                <h3>Testing & Quality Assurance</h3>
                <div className="skills-list">
                  <div className="skill-item"><SiTestinglibrary className="skill-icon" /> Manual Testing</div>
                  <div className="skill-item"><FaCheckCircle className="skill-icon" /> Test Case Design</div>
                  <div className="skill-item"><FaBug className="skill-icon" /> Bug Tracking</div>
                  <div className="skill-item"><MdPrecisionManufacturing className="skill-icon" /> Regression Testing</div>
                </div>
              </div>

              <div className="skill-category">
                <h3>Soft Skills</h3>
                <div className="skills-list">
                  <div className="skill-item"><FaBrain className="skill-icon" /> Problem Solving</div>
                  <div className="skill-item"><SiGit className="skill-icon" /> Attention to Detail</div>
                  <div className="skill-item"><FaUsers className="skill-icon" /> Team Collaboration</div>
                  <div className="skill-item"><SiPostman className="skill-icon" /> Adaptability</div>
                  <div className="skill-item"><FaCommentDots className="skill-icon" /> Communication</div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'awards':
        return (
          <div className="resume-section">
            <h2>Awards</h2>
            <ul className="awards-list">
              <li>🏅 Best UI Developer – Codetek 2023</li>
              <li>🎖️ Smart India Hackathon Finalist – 2022</li>
              <li>🏆 Certified JAVA Developer Associate JDAC-24</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="resume-container">
      <div className="resume-left">
        <h4 className="resume-subtitle">Resume</h4>
        <h1 className="resume-title">
          <span className="highlight-circle">A</span>ll over my<br />
          details find<br />here...
        </h1>
        <ul className="resume-nav">
          <li onClick={() => setActiveTab('about')} className={activeTab === 'about' ? 'active' : ''}>About Me</li>
          <li onClick={() => setActiveTab('experience')} className={activeTab === 'experience' ? 'active' : ''}>Experience</li>
          <li onClick={() => setActiveTab('education')} className={activeTab === 'education' ? 'active' : ''}>Education</li>
          <li onClick={() => setActiveTab('skills')} className={activeTab === 'skills' ? 'active' : ''}>Skills</li>
          <li onClick={() => setActiveTab('awards')} className={activeTab === 'awards' ? 'active' : ''}>Awards</li>
        </ul>
      </div>
      <div className="resume-right">
        {renderContent()}
      </div>
    </div>
  );
};

export default ResumePage;
