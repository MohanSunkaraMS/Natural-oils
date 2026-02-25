import React from 'react';

const Hero: React.FC = () => {
    return (
        <section id="home" style={{
            padding: '80px 0',
            background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/hero-fallback.jpg")', // Fallback if image fails
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'var(--white)',
            textAlign: 'center',
            minHeight: '600px',
            display: 'flex',
            alignItems: 'center'
        }}>
            <div className="container animate-fade-in">
                <h1 style={{ fontSize: '3.5rem', color: 'var(--white)', marginBottom: '1.5rem' }}>
                    Pure Nature In Every Drop
                </h1>
                <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 2rem', opacity: 0.9 }}>
                    Traditional cold-pressed oils, pure mountain ghee, and authentic homemade pickles.
                    Experience the taste of purity and tradition with Aditya Natural Oils.
                </p>
                <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                    <a href="#oils" className="btn btn-secondary">Explore Products</a>
                    <a href="https://wa.me/919440404469" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        WhatsApp Us
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
