import heroImg from '../assets/hero.png';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import Resumepdf from '../assets/megha_ninave_resume.pdf'

const Hero = () => {
  const downloadResume = () => {
    // Placeholder - replace with real resume URL
    window.open(Resumepdf, '_blank');
  };

  return (
    <section id="hero" className="hero-section" data-aos="fadeInDown">
      <div className="hero-container">
        <div className="hero-profile">
          <img src={heroImg} alt="Megha Ninave" className="profile-img" />
        </div>
        <h1 className="hero-title">Megha Ninave</h1>
        <p className="hero-subtitle">MERN Stack Developer</p>
        <p className="hero-intro">
          Passionate fresher developer skilled in modern web technologies. 
          Creating responsive and scalable applications with React, Node.js, and MongoDB.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={downloadResume}>
            <FiDownload /> Download Resume
          </button>
        </div>
        <div className="hero-social">
          <a href="https://github.com/Meghaninave276" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/megha-ninave-41637b34b/?locale=%20" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

