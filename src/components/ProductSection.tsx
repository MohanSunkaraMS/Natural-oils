import React from 'react';

interface ProductProps {
    id: string;
    title: string;
    items: string[];
    image: string;
    priceRange: string;
}

const ProductSection: React.FC<ProductProps> = ({ id, title, items, image, priceRange }) => {
    return (
        <section id={id} style={{ padding: '80px 0' }}>
            <div className="container">
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '40px',
                    alignItems: 'center',
                    flexDirection: id === 'ghee' ? 'row-reverse' : 'row'
                }}>
                    <div style={{ flex: '1 1 500px' }}>
                        <h2 style={{ fontSize: '2.5rem' }}>{title}</h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                            Our {title.toLowerCase()} are made using traditional methods to ensure maximum nutrition and authentic flavor.
                        </p>
                        <ul style={{ marginBottom: '2rem' }}>
                            {items.map((item, index) => (
                                <li key={index} style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span style={{ color: 'var(--secondary-color)', fontWeight: 'bold' }}>✓</span> {item}
                                </li>
                            ))}
                        </ul>
                        <div style={{
                            padding: '1rem',
                            backgroundColor: 'rgba(212, 175, 55, 0.1)',
                            borderRadius: '8px',
                            borderLeft: '4px solid var(--secondary-color)',
                            marginBottom: '2rem'
                        }}>
                            <strong>General Pricing:</strong> {priceRange}
                            <p style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>* Contact us for specific product prices.</p>
                        </div>
                        <a href="https://wa.me/9492603481" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            Order on WhatsApp
                        </a>
                    </div>
                    <div style={{ flex: '1 1 500px' }}>
                        <div style={{
                            width: '100%',
                            height: '400px',
                            backgroundColor: '#eee',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            boxShadow: 'var(--shadow)'
                        }}>
                            <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductSection;
