// src/components/layout/Footer.tsx
import { WHATSAPP_NUMBER } from "../../data/products";

export default function Footer() {
    return (
        <footer
            style={{
                background: "#1a0f07",
                color: "#9a7a5a",
                textAlign: "center",
                padding: "36px 24px",
                fontSize: "0.82rem",
                fontFamily: "'Lato', sans-serif",
            }}
        >
            <p>
                © {new Date().getFullYear()}{" "}
                <strong style={{ color: "#c8922a" }}>Aditya Natural Oils</strong> — Pure • Natural • Trusted
            </p>
            <p style={{ marginTop: "8px" }}>
                📞{" "}
                <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#c8922a", textDecoration: "none" }}
                >
                    +91 94404 04469
                </a>
                {" "}| Crafted with ❤️ for your health
            </p>
        </footer>
    );
}
