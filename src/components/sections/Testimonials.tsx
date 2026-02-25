// src/components/sections/Testimonials.tsx

const reviews = [
    {
        name: "Vijay Kumar",
        role: "Regular Customer",
        text: "The Groundnut oil is purely traditional. You can feel the aroma and taste difference in the food. Highly recommended!",
        stars: 5
    },
    {
        name: "Laksmi Reddy",
        role: "Health Enthusiast",
        text: "Best A2 Cow Ghee I've found in the city. Packaging is great and the quality is consistently high.",
        stars: 5
    },
    {
        name: "Suresh P.",
        role: "Homemaker",
        text: "Their Mango Pickle reminds me of my grandmother's recipe. Truly natural and no preservatives!",
        stars: 5
    }
];

export default function Testimonials() {
    return (
        <section style={{ padding: '80px 24px', background: '#fff' }}>
            <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 5vw, 2.5rem)",
                color: "#2c1a0e",
                textAlign: "center",
                marginBottom: "48px"
            }}>
                Happy <em style={{ color: "#c8922a", fontStyle: "italic" }}>Customers</em>
            </h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '32px',
                maxWidth: '1100px',
                margin: '0 auto'
            }}>
                {reviews.map((r, i) => (
                    <div key={i} style={{
                        padding: '32px',
                        borderRadius: '16px',
                        background: '#fdf8f0',
                        border: '1px solid #f0e6d6',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px'
                    }}>
                        <div style={{ color: '#c8922a', fontSize: '1.2rem' }}>
                            {"★".repeat(r.stars)}
                        </div>
                        <p style={{
                            color: '#4a3728',
                            fontStyle: 'italic',
                            lineHeight: 1.6,
                            fontSize: '0.95rem',
                            flex: 1
                        }}>
                            "{r.text}"
                        </p>
                        <div>
                            <div style={{ fontWeight: 700, color: '#2c1a0e' }}>{r.name}</div>
                            <div style={{ fontSize: '0.8rem', color: '#9a7a5a' }}>{r.role}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
