import React from 'react';

const Navbar = ({ navLinks, locale, setLocale, toggleLabel }) => {
    return (
        <nav className="nav">
            <span className="logo">Simon Velez</span>
            <ul className="nav-list">
                {navLinks.map((link) => (
                    <li key={link.href}>
                        <a href={link.href}>{link.label}</a>
                    </li>
                ))}
            </ul>
            <button
                className="lang-toggle"
                type="button"
                onClick={() => setLocale((prev) => (prev === 'en' ? 'es' : 'en'))}
                aria-label={toggleLabel}
            >
                {locale === 'en' ? 'ESPAÑOL' : 'ENGLISH'}
            </button>
        </nav>
    );
};

export default Navbar;
