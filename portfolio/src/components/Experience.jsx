const Experience = () => {
  return (
    <section id="experience" className="section experience-section" data-aos="fadeUp">
      <div className="container">
        <h2 className="section-title">Experience & Education</h2>
        <div className="timeline">
          <div className="timeline-item" data-aos="fade-right" data-aos-delay="200">
            <div className="timeline-icon">
              <span>🎓</span>
            </div>
            <div className="timeline-content">
              <h3>Bachelor of Computer Science</h3>
              <p>University Name, 2020 - 2024</p>
              <p>CGPA: 8.5/10</p>
            </div>
          </div>
          <div className="timeline-item" data-aos="fade-left" data-aos-delay="400">
            <div className="timeline-icon">
              <span>🚀</span>
            </div>
            <div className="timeline-content">
              <h3>MERN Stack Fresher</h3>
              <p>Actively seeking opportunities</p>
              <p>Ready to contribute to innovative projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

