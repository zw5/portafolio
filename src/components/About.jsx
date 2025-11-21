import React from 'react';
import { skills } from '../data/content';

const About = ({ about }) => {
    return (
        <section className="section" id="about">
            <div className="section-heading">
                <span>{about.sectionLabel}</span>
                <h2>{about.title}</h2>
            </div>
            <div className="section-content two-col">
                <p>{about.body}</p>
                <div>
                    <h3>{about.skillsTitle}</h3>
                    <ul className="pill-list">
                        {skills.map((skill) => (
                            <li key={skill}>{skill}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;
