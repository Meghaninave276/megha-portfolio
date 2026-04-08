import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
  window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav data-aos="fade-down" className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container  ">
        <div className="nav-logo" onClick={() => scrollToSection('hero')}>
          Megha 
        </div>
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <a href="#hero" onClick={() => scrollToSection('hero')}>Home</a>
          <a href="#about" onClick={() => scrollToSection('about')}>About</a>
          <a href="#skills" onClick={() => scrollToSection('skills')}>Skills</a>
          <a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a>
          <a href="#experience" onClick={() => scrollToSection('experience')}>Experience</a>
          <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
        </div>
        
        <div className="nav-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
