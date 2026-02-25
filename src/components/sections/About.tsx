// src/components/sections/About.tsx

const stats = [
    { num: "15+", label: "Products" },
    { num: "100%", label: "Natural" },
    { num: "0", label: "Chemicals" },
    { num: "∞", label: "Trust" },
];

const badges = ["No Additives", "Traditional Method", "Farm Sourced", "Lab Tested", "Natural Aroma"];

export default function About() {
    return (
        <section
            id="about"
            style={{
                padding: "80px 24px",
                background: "linear-gradient(135deg, #2c1a0e 0%, #4a2c0e 100%)",
            }}
        >
            <div
                style={{
                    maxWidth: "900px",
                    margin: "0 auto",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "60px",
                    alignItems: "center",
                }}
            >
                {/* Left: text */}
                <div>
                    <h2
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                            color: "#fff",
                            marginBottom: "20px",
                            lineHeight: 1.2,
                        }}
                    >
                        Why Choose
                        <br />
                        <em style={{ color: "#c8922a", fontStyle: "italic" }}>Aditya Natural Oils?</em>
                    </h2>
                    <p
                        style={{
                            color: "#c4a882",
                            lineHeight: 1.9,
                            fontSize: "0.94rem",
                            marginBottom: "16px",
                            fontFamily: "'Lato', sans-serif",
                        }}
                    >
                        At Aditya Natural Oils, we believe what goes into your food matters. We source the
                        finest raw materials directly from trusted farmers and process them using traditional
                        cold-pressing methods — preserving natural nutrients, aroma, and flavor.
                    </p>
                    <p
                        style={{
                            color: "#c4a882",
                            lineHeight: 1.9,
                            fontSize: "0.94rem",
                            marginBottom: "24px",
                            fontFamily: "'Lato', sans-serif",
                        }}
                    >
                        No additives, no preservatives, no shortcuts. Just pure, honest goodness in every
                        drop and jar.
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                        {badges.map((b) => (
                            <span
                                key={b}
                                style={{
                                    background: "rgba(200,146,42,0.15)",
                                    border: "1px solid rgba(200,146,42,0.3)",
                                    color: "#c8922a",
                                    padding: "6px 14px",
                                    borderRadius: "100px",
                                    fontSize: "0.75rem",
                                    letterSpacing: "0.5px",
                                    fontFamily: "'Lato', sans-serif",
                                }}
                            >
                                {b}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Right: stat boxes */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "20px",
                    }}
                >
                    {stats.map((s) => (
                        <div
                            key={s.label}
                            style={{
                                background: "rgba(255,255,255,0.05)",
                                border: "1px solid rgba(200,146,42,0.2)",
                                borderRadius: "12px",
                                padding: "28px 20px",
                                textAlign: "center",
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: "2.4rem",
                                    fontWeight: 700,
                                    color: "#c8922a",
                                    display: "block",
                                }}
                            >
                                {s.num}
                            </span>
                            <span
                                style={{
                                    fontSize: "0.72rem",
                                    color: "#9a7a5a",
                                    letterSpacing: "1.5px",
                                    textTransform: "uppercase",
                                    fontFamily: "'Lato', sans-serif",
                                }}
                            >
                                {s.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
