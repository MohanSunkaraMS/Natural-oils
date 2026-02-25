import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer id="contact" style={{
            backgroundColor: 'var(--primary-color)',
            color: 'var(--white)',
            padding: '60px 0 20px'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '40px',
                    marginBottom: '40px'
                }}>
                    <div>
                        <h3 style={{ color: 'var(--white)', marginBottom: '1.5rem' }}>Aditya Natural Oils</h3>
                        <p style={{ opacity: 0.8 }}>
                            Bringing the purest natural products directly to your home.
                            Trust, transparency, and tradition in every pack.
                        </p>
                    </div>
                    <div>
                        <h4 style={{ color: 'var(--white)', marginBottom: '1rem' }}>Our Menu</h4>
                        <ul>
                            <li><a href="#oils" style={{ color: 'var(--white)', opacity: 0.8 }}>Cold Pressed Oils</a></li>
                            <li><a href="#ghee" style={{ color: 'var(--white)', opacity: 0.8 }}>Pure Ghee</a></li>
                            <li><a href="#pickles" style={{ color: 'var(--white)', opacity: 0.8 }}>Authentic Pickles</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ color: 'var(--white)', marginBottom: '1rem' }}>Contact Us</h4>
                        <p style={{ opacity: 0.8, marginBottom: '0.5rem' }}>Phone: +919440404469
                        </p>
                        <p style={{ opacity: 0.8, marginBottom: '1rem' }}>WhatsApp: 9492603481</p>
                        <a href="https://wa.me/9492603481" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                            Message on WhatsApp
                        </a>
                    </div>
                </div>
                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    paddingTop: '20px',
                    textAlign: 'center',
                    fontSize: '0.9rem',
                    opacity: 0.6
                }}>
                    © {new Date().getFullYear()} Aditya Natural Oils. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
