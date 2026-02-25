// src/components/AnnouncementBar.tsx
// ✏️ Shopkeeper: Edit the `message` below to change the announcement text.
// Set `show` to false to hide the banner entirely.

const show = true;
const message = "🎉 Festive Offer: Buy 2L of any oil & get 10% off! Limited stock.";

export default function AnnouncementBar() {
    if (!show) return null;

    return (
        <div
            style={{
                background: "linear-gradient(90deg, #c8922a 0%, #e6a83a 50%, #c8922a 100%)",
                color: "#fff",
                textAlign: "center",
                padding: "10px 16px",
                fontSize: "0.85rem",
                fontWeight: 600,
                fontFamily: "'Lato', sans-serif",
                letterSpacing: "0.3px",
                lineHeight: 1.4,
                position: "relative",
                zIndex: 1000,
            }}
        >
            {message}
        </div>
    );
}
