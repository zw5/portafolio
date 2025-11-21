import React from 'react';

const Contact = ({ contact }) => {
    return (
        <section className="section" id="contact">
            <div className="section-heading">
                <span>{contact.sectionLabel}</span>
                <h2>{contact.title}</h2>
            </div>
            <div className="section-content contact-links">
                <a href={`mailto:${contact.email}`} className="contact-item">
                    <span className="label">Email</span>
                    <span className="value">{contact.email}</span>
                </a>
                <a href={contact.github} target="_blank" rel="noopener noreferrer" className="contact-item">
                    <span className="label">GitHub</span>
                    <span className="value">{contact.githubLabel}</span>
                </a>
            </div>
        </section>
    );
};

export default Contact;
