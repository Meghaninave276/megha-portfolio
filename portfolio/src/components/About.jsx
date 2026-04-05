const About = () => {
  return (
    <section id="about" className="section about-section" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text" data-aos="fade-up" data-aos-delay="200">
            <p data-aos="fade-right" data-aos-delay="400" data-aos-duration="1000">
              I'm a dedicated MERN Stack Developer fresher with strong foundation in full-stack development. 
              Proficient in creating dynamic, responsive web applications using React, Node.js, Express, and MongoDB.
            </p>
            <p data-aos="fade-right" data-aos-delay="600" data-aos-duration="1000">
              Passionate about clean code, modern UI/UX, and building scalable solutions. 
              Eager to contribute to innovative projects and grow as a developer.
            </p>
          </div>
          <div className="career-objective glass-card" data-aos="fade-up" data-aos-delay="800" data-aos-duration="1200">
            <h3>Career Objective</h3>
            <p>
              Seeking a challenging position as a MERN Stack Developer to utilize 
              my skills in React, Node.js, MongoDB and contribute to organizational 
              goals while enhancing my professional growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

