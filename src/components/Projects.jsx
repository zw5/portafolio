import React from 'react';

const Projects = ({ projects }) => {
    return (
        <section className="section accent" id="projects">
            <div className="section-heading">
                <span>{projects.sectionLabel}</span>
                <h2>{projects.title}</h2>
            </div>
            <div className="card-grid">
                {projects.items.map((project) => (
                    <article className="card" key={project.title}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <ul className="pill-list">
                            {project.tags.map((tag) => (
                                <li key={tag}>{tag}</li>
                            ))}
                        </ul>
                        <a className="card-link" href={project.link} target="_blank" rel="noopener noreferrer">
                            {projects.ctaLabel}
                        </a>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Projects;
