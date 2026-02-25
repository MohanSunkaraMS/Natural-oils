// src/components/sections/Contact.tsx
import { WHATSAPP_NUMBER } from "../../data/products";

const infoItems = [
    { icon: "⏰", title: "Mon – Sat", sub: "9:00 AM – 7:00 PM" },
    { icon: "📦", title: "Delivery", sub: "Local & Courier Available" },
    { icon: "💳", title: "Payment", sub: "UPI, Cash, Online" },
];

export default function Contact() {
    const openWA = (msg = "") => {
        const text = msg || "Hi! I'm interested in your products at Aditya Natural Oils. Please help me.";
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
    };

    return (
        <section
            id="contact"
            style={{
                padding: "80px 24px",
                background: "#fff",
            }}
        >
            {/* Heading */}
            <h2
                style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(2rem, 5vw, 3rem)",
                    color: "#2c1a0e",
                    textAlign: "center",
                    marginBottom: "12px",
                }}
            >
                Get in <em style={{ color: "#c8922a", fontStyle: "italic" }}>Touch</em>
            </h2>
            <div
                style={{
                    width: "56px",
                    height: "3px",
                    background: "#c8922a",
                    margin: "0 auto 12px",
                    borderRadius: "2px",
                }}
            />
            <p
                style={{
                    textAlign: "center",
                    color: "#7a5c3a",
                    maxWidth: "560px",
                    margin: "0 auto 40px",
                    lineHeight: 1.7,
                    fontSize: "0.95rem",
                    fontFamily: "'Lato', sans-serif",
                }}
            >
                Have a question or want to place an order? Reach us directly on WhatsApp — we respond quickly!
            </p>

            <div style={{ maxWidth: "580px", margin: "0 auto" }}>
                {/* WhatsApp card */}
                <div
                    style={{
                        background: "linear-gradient(135deg, #25D366, #128C7E)",
                        borderRadius: "16px",
                        padding: "48px 36px",
                        textAlign: "center",
                        color: "#fff",
                        boxShadow: "0 16px 48px rgba(37,211,102,0.28)",
                    }}
                >
                    <div style={{ fontSize: "3.5rem", marginBottom: "16px" }}>💬</div>
                    <h3
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "1.8rem",
                            marginBottom: "10px",
                        }}
                    >
                        Order via WhatsApp
                    </h3>
                    <p
                        style={{
                            opacity: 0.9,
                            fontSize: "0.92rem",
                            lineHeight: 1.6,
                            marginBottom: "4px",
                            fontFamily: "'Lato', sans-serif",
                        }}
                    >
                        The fastest way to place your order, ask about products or get pricing details.
                    </p>
                    <span
                        style={{
                            display: "block",
                            fontSize: "1.5rem",
                            fontWeight: 700,
                            letterSpacing: "2px",
                            margin: "16px 0",
                            fontFamily: "'Lato', sans-serif",
                        }}
                    >
                        +91 94926 03481
                    </span>
                    <p
                        style={{
                            fontSize: "0.78rem",
                            opacity: 0.82,
                            marginBottom: "20px",
                            fontFamily: "'Lato', sans-serif",
                        }}
                    >
                        Tap below to start a conversation instantly
                    </p>
                    <button
                        onClick={() => openWA()}
                        style={{
                            background: "#fff",
                            color: "#128C7E",
                            border: "none",
                            padding: "14px 36px",
                            borderRadius: "50px",
                            fontWeight: 700,
                            fontSize: "1rem",
                            cursor: "pointer",
                            fontFamily: "'Lato', sans-serif",
                            letterSpacing: "0.3px",
                            transition: "transform 0.2s, box-shadow 0.2s",
                        }}
                        onMouseEnter={(e) => {
                            (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
                            (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.2)";
                        }}
                        onMouseLeave={(e) => {
                            (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                            (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
                        }}
                    >
                        💬 Chat on WhatsApp
                    </button>
                </div>

                {/* Info items */}
                <div
                    style={{
                        marginTop: "36px",
                        display: "flex",
                        justifyContent: "center",
                        gap: "32px",
                        flexWrap: "wrap",
                    }}
                >
                    {infoItems.map((info) => (
                        <div key={info.title} style={{ textAlign: "center", color: "#7a5c3a" }}>
                            <div style={{ fontSize: "1.6rem" }}>{info.icon}</div>
                            <strong
                                style={{
                                    display: "block",
                                    color: "#2c1a0e",
                                    marginTop: "6px",
                                    fontSize: "0.88rem",
                                    fontFamily: "'Lato', sans-serif",
                                }}
                            >
                                {info.title}
                            </strong>
                            <span style={{ fontSize: "0.78rem", fontFamily: "'Lato', sans-serif" }}>
                                {info.sub}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
