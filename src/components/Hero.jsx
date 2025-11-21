import React from 'react';

const Hero = ({ hero }) => {
    return (
        <header className="hero" id="home">
            <div className="hero-content">
                <div className="hero-text">
                    <p className="hero-eyebrow">{hero.eyebrow}</p>
                    <h1>{hero.title}</h1>
                    <p>{hero.description}</p>
                    <div className="hero-actions">
                        <a className="btn primary" href="#projects">
                            {hero.ctaLabel}
                        </a>
                    </div>
                </div>
                <figure className="hero-portrait">
                    <img src="/profile.jpg" alt={hero.portraitAlt} />
                </figure>
            </div>
        </header>
    );
};

export default Hero;
