// src/components/layout/Navbar.tsx
import { useState } from "react";
import { NAV_ITEMS, WHATSAPP_NUMBER } from "../../data/products";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollTo = (id: string) => {
        document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
    };

    return (
        <>
            <nav
                style={{
                    position: "fixed",
                    top: 0,
                    width: "100%",
                    zIndex: 100,
                    background: "rgba(44,26,14,0.96)",
                    backdropFilter: "blur(12px)",
                    height: "64px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 24px",
                    boxShadow: "0 2px 20px rgba(0,0,0,0.35)",
                }}
            >
                {/* Logo */}
                <div
                    style={{
                        fontFamily: "'Playfair Display', serif",
                        color: "#c8922a",
                        fontSize: "1.25rem",
                        fontWeight: 700,
                        lineHeight: 1.1,
                    }}
                >
                    Aditya Natural Oils
                    <span
                        style={{
                            display: "block",
                            color: "#fff",
                            fontSize: "0.7rem",
                            fontWeight: 300,
                            letterSpacing: "2px",
                            fontFamily: "'Lato', sans-serif",
                        }}
                    >
                        Pure • Natural • Trusted
                    </span>
                </div>

                {/* Desktop links */}
                <ul
                    style={{
                        display: "flex",
                        gap: "28px",
                        listStyle: "none",
                    }}
                    className="hidden-mobile"
                >
                    {NAV_ITEMS.map((item) => (
                        <li key={item}>
                            <button
                                onClick={() => scrollTo(item)}
                                style={{
                                    background: "none",
                                    border: "none",
                                    color: "#e8d5b7",
                                    fontSize: "0.78rem",
                                    letterSpacing: "1.5px",
                                    textTransform: "uppercase",
                                    cursor: "pointer",
                                    fontFamily: "'Lato', sans-serif",
                                    fontWeight: 700,
                                    transition: "color 0.2s",
                                }}
                                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#c8922a")}
                                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#e8d5b7")}
                            >
                                {item}
                            </button>
                        </li>
                    ))}
                    <li>
                        <a
                            href={`https://wa.me/${WHATSAPP_NUMBER}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                background: "#25D366",
                                color: "#fff",
                                padding: "8px 18px",
                                borderRadius: "20px",
                                fontSize: "0.78rem",
                                fontWeight: 700,
                                fontFamily: "'Lato', sans-serif",
                                letterSpacing: "0.5px",
                                textDecoration: "none",
                                transition: "background 0.2s",
                            }}
                        >
                            📱 WhatsApp
                        </a>
                    </li>
                </ul>

                {/* Hamburger */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="show-mobile"
                    style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        display: "none",
                        flexDirection: "column",
                        gap: "5px",
                        padding: "4px",
                    }}
                    aria-label="Toggle menu"
                >
                    <span style={{ display: "block", width: "24px", height: "2px", background: "#c8922a" }} />
                    <span style={{ display: "block", width: "24px", height: "2px", background: "#c8922a" }} />
                    <span style={{ display: "block", width: "24px", height: "2px", background: "#c8922a" }} />
                </button>
            </nav>

            {/* Mobile menu */}
            {menuOpen && (
                <div
                    style={{
                        position: "fixed",
                        top: "64px",
                        left: 0,
                        right: 0,
                        background: "rgba(44,26,14,0.98)",
                        zIndex: 99,
                        padding: "20px 24px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "4px",
                    }}
                >
                    {NAV_ITEMS.map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollTo(item)}
                            style={{
                                background: "none",
                                border: "none",
                                borderBottom: "1px solid rgba(200,146,42,0.2)",
                                color: "#e8d5b7",
                                fontSize: "0.95rem",
                                textAlign: "left",
                                padding: "12px 0",
                                cursor: "pointer",
                                fontFamily: "'Lato', sans-serif",
                                letterSpacing: "1px",
                            }}
                        >
                            {item}
                        </button>
                    ))}
                    <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            background: "#25D366",
                            color: "#fff",
                            padding: "12px",
                            borderRadius: "6px",
                            textAlign: "center",
                            fontWeight: 700,
                            textDecoration: "none",
                            marginTop: "8px",
                            fontFamily: "'Lato', sans-serif",
                        }}
                    >
                        📱 Chat on WhatsApp
                    </a>
                </div>
            )}

            <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
        </>
    );
}
