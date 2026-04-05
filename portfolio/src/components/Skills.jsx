import { skillsData } from '../data/skills';
import { useEffect, useState, useRef } from 'react';

const Skills = () => {
  const [inView, setInView] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const renderSkillsGroup = (title, skills, groupIndex) => (
    <div className="skills-group" key={title}>
      <h3 className="group-title" data-aos="fade-up" data-aos-delay={`${groupIndex * 200}ms`}>{title}</h3>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div 
            key={`${title}-${index}`}
            className={`skill-item ${inView ? 'animate' : ''}`}
            data-aos="fade-up"
            data-aos-delay={`${(groupIndex * 4 + index) * 200}ms`}
            style={{ 
              '--skill-delay': `${(groupIndex * 4 + index) * 0.2}s`,
              '--skill-duration': '1s'
            }}
          >
            <span className="skill-name">{skill.name}</span>
            <div className="skill-bar">
              <div 
                className="skill-progress"
                style={{ 
                  width: inView ? `${skill.level}%` : '0%',
                  transition: `width 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) var(--skill-delay)`
                }}
              />
            </div>
            <span className="skill-level">{skill.level}%</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" ref={skillsRef} className="section skills-section" data-aos="zoomIn">
      <div className="container">
        <h2 className="section-title" data-aos="fade-down" data-aos-delay="0ms">Skills</h2>
        <div className="skills-grid">
          {renderSkillsGroup('Frontend', skillsData.frontend, 0)}
          {renderSkillsGroup('Backend', skillsData.backend, 1)}
          {renderSkillsGroup('Database', skillsData.database, 2)}
          {renderSkillsGroup('Tools', skillsData.tools, 3)}
          {renderSkillsGroup('Deployment', skillsData.Deployment, 4)}
        </div>
      </div>
    </section>
  );
};

export default Skills;

