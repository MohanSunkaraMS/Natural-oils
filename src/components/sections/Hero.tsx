// src/components/sections/Hero.tsx
import { WHATSAPP_NUMBER } from "../../data/products";

export default function Hero() {
    const scrollTo = (id: string) =>
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

    const openWA = () => {
        const msg = "Hi! I'm interested in your products at Aditya Natural Oils. Please help me.";
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
    };

    return (
        <section
            id="home"
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "100px 24px 60px",
                background: "linear-gradient(135deg, #2c1a0e 0%, #4a2c0e 50%, #6b3a1a 100%)",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Radial glow overlays */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background:
                        "radial-gradient(ellipse at 60% 40%, rgba(200,146,42,0.15) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(74,124,89,0.1) 0%, transparent 50%)",
                    pointerEvents: "none",
                }}
            />

            <div style={{ position: "relative", zIndex: 1, maxWidth: "700px" }}>
                {/* Badge */}
                <span
                    style={{
                        display: "inline-block",
                        background: "rgba(200,146,42,0.2)",
                        border: "1px solid rgba(200,146,42,0.5)",
                        color: "#c8922a",
                        padding: "6px 20px",
                        borderRadius: "100px",
                        fontSize: "0.72rem",
                        letterSpacing: "3px",
                        textTransform: "uppercase",
                        marginBottom: "28px",
                        fontFamily: "'Lato', sans-serif",
                    }}
                >
                    100% Natural &amp; Pure
                </span>

                {/* Headline */}
                <h1
                    style={{
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: 900,
                        color: "#fff",
                        lineHeight: 1.05,
                        marginBottom: "12px",
                        fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
                    }}
                >
                    Aditya
                    <br />
                    <em style={{ color: "#c8922a", fontStyle: "italic" }}>Natural Oils</em>
                </h1>

                <p
                    style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "clamp(1rem, 3vw, 1.4rem)",
                        color: "#e8d5b7",
                        fontStyle: "italic",
                        fontWeight: 300,
                        marginBottom: "20px",
                    }}
                >
                    From Earth to Your Kitchen
                </p>

                <p
                    style={{
                        color: "#c4a882",
                        lineHeight: 1.8,
                        fontSize: "1rem",
                        marginBottom: "40px",
                        fontFamily: "'Lato', sans-serif",
                    }}
                >
                    Bringing you the finest cold-pressed oils, farm-fresh ghee and traditional pickles —
                    crafted with age-old wisdom, no chemicals, no compromises.
                </p>

                {/* CTA Buttons */}
                <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
                    <button
                        onClick={() => scrollTo("products")}
                        style={{
                            background: "#c8922a",
                            color: "#fff",
                            border: "none",
                            padding: "14px 32px",
                            borderRadius: "4px",
                            fontWeight: 700,
                            fontSize: "0.95rem",
                            cursor: "pointer",
                            fontFamily: "'Lato', sans-serif",
                            letterSpacing: "0.5px",
                            transition: "background 0.2s, transform 0.2s",
                        }}
                        onMouseEnter={(e) => {
                            (e.currentTarget as HTMLButtonElement).style.background = "#b07820";
                            (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
                        }}
                        onMouseLeave={(e) => {
                            (e.currentTarget as HTMLButtonElement).style.background = "#c8922a";
                            (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                        }}
                    >
                        Shop Our Products
                    </button>
                    <button
                        onClick={openWA}
                        style={{
                            background: "transparent",
                            color: "#e8d5b7",
                            border: "1px solid rgba(232,213,183,0.4)",
                            padding: "14px 32px",
                            borderRadius: "4px",
                            fontWeight: 600,
                            fontSize: "0.95rem",
                            cursor: "pointer",
                            fontFamily: "'Lato', sans-serif",
                            transition: "border-color 0.2s, color 0.2s",
                        }}
                        onMouseEnter={(e) => {
                            (e.currentTarget as HTMLButtonElement).style.borderColor = "#c8922a";
                            (e.currentTarget as HTMLButtonElement).style.color = "#c8922a";
                        }}
                        onMouseLeave={(e) => {
                            (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(232,213,183,0.4)";
                            (e.currentTarget as HTMLButtonElement).style.color = "#e8d5b7";
                        }}
                    >
                        📱 WhatsApp Us
                    </button>
                </div>
            </div>
        </section>
    );
}
