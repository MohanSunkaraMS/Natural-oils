import React from 'react';

const Navbar: React.FC = () => {

    return (
        <nav style={{
            position: 'sticky',
            top: 0,
            backgroundColor: 'var(--white)',
            boxShadow: 'var(--shadow)',
            zIndex: 1000,
            padding: '1rem 0'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary-color)', fontFamily: "'Playfair Display', serif" }}>
                    Aditya Natural Oils
                </div>

                {/* Desktop Menu */}
                <ul style={{
                    display: 'flex',
                    gap: '2rem',
                    alignItems: 'center'
                }} className="desktop-menu">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#oils">Oils</a></li>
                    <li><a href="#ghee">Ghee</a></li>
                    <li><a href="#pickles">Pickles</a></li>
                    <li><a href="#contact" className="btn btn-primary" style={{ padding: '8px 16px' }}>Contact Us</a></li>
                </ul>

                {/* Mobile menu toggle would go here */}
            </div>
        </nav>
    );
};

export default Navbar;
