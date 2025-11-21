import React from 'react';

const Footer = ({ footer }) => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <p>
                © {currentYear} {footer.text}
            </p>
        </footer>
    );
};

export default Footer;
