// src/components/sections/TrustBar.tsx

const trustItems = [
    { icon: "🧪", stat: "Zero Chemicals", label: "All Natural" },
    { icon: "🏺", stat: "Cold Pressed", label: "Traditional Process" },
    { icon: "🚚", stat: "Direct Delivery", label: "Farm to Home" },
    { icon: "⭐", stat: "100% Pure", label: "Quality Assured" },
];

export default function TrustBar() {
    return (
        <div
            style={{
                background: "#2c1a0e",
                padding: "28px 24px",
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "40px",
            }}
        >
            {trustItems.map((t) => (
                <div key={t.stat} style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "1.8rem", marginBottom: "6px" }}>{t.icon}</div>
                    <strong
                        style={{
                            display: "block",
                            color: "#c8922a",
                            fontSize: "1rem",
                            fontFamily: "'Lato', sans-serif",
                        }}
                    >
                        {t.stat}
                    </strong>
                    <span
                        style={{
                            fontSize: "0.72rem",
                            letterSpacing: "1px",
                            textTransform: "uppercase",
                            color: "#9a7a5a",
                            fontFamily: "'Lato', sans-serif",
                        }}
                    >
                        {t.label}
                    </span>
                </div>
            ))}
        </div>
    );
}
