import { useState } from "react";
import { useProducts } from "../../hooks/useProducts";
import { useCart } from "../../context/CartContext";

const tabs = [
    { id: "oils", label: "🫙 Oils" },
    { id: "ghees", label: "🥛 Ghees" },
    { id: "pickles", label: "🌶 Pickles" },
];

export default function ProductsMenu() {
    const { products, loading, error } = useProducts();
    const [activeTab, setActiveTab] = useState("oils");
    const { addToCart, items, updateQuantity } = useCart();

    const getItemQuantity = (name: string) => {
        return items.find(i => i.name === name)?.quantity || 0;
    };

    return (
        <section
            id="products"
            style={{
                padding: "80px 24px",
                background: "#fdf8f0",
            }}
        >
            {/* Section heading */}
            <h2
                style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(2rem, 5vw, 3rem)",
                    color: "#2c1a0e",
                    textAlign: "center",
                    marginBottom: "12px",
                }}
            >
                Our <em style={{ color: "#c8922a", fontStyle: "italic" }}>Products</em>
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
                    maxWidth: "580px",
                    margin: "0 auto 48px",
                    lineHeight: 1.7,
                    fontSize: "0.95rem",
                    fontFamily: "'Lato', sans-serif",
                }}
            >
                Carefully sourced, traditionally processed, and packed with nutrition. Choose from our
                range of oils, ghees, and pickles.
            </p>

            {/* Tab row */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "48px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        gap: "4px",
                        background: "#f0e6d6",
                        padding: "6px",
                        borderRadius: "10px",
                    }}
                >
                    {tabs.map((t) => (
                        <button
                            key={t.id}
                            onClick={() => setActiveTab(t.id)}
                            style={{
                                padding: "10px 26px",
                                borderRadius: "6px",
                                border: "none",
                                cursor: "pointer",
                                fontSize: "0.82rem",
                                letterSpacing: "1px",
                                textTransform: "uppercase",
                                fontWeight: 700,
                                fontFamily: "'Lato', sans-serif",
                                transition: "all 0.2s",
                                background: activeTab === t.id ? "#c8922a" : "transparent",
                                color: activeTab === t.id ? "#fff" : "#9a7a5a",
                            }}
                        >
                            {t.label}
                        </button>
                    ))}
                </div>
            </div>

            {loading && <div style={{ textAlign: 'center', padding: '40px', color: '#7a5c3a' }}>Loading our products...</div>}
            {error && <div style={{ textAlign: 'center', padding: '40px', color: '#ef4444' }}>Error loading products. Please try again.</div>}

            {/* Products grid */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                    gap: "24px",
                    maxWidth: "1100px",
                    margin: "0 auto",
                }}
            >
                {!loading && !error && products[activeTab]?.map((p) => (
                    <div
                        key={p.name}
                        style={{
                            background: "#fff",
                            borderRadius: "12px",
                            padding: "28px 24px",
                            boxShadow: "0 2px 16px rgba(44,26,14,0.07)",
                            border: "1px solid #f0e6d6",
                            display: "flex",
                            flexDirection: "column",
                            transition: "all 0.25s",
                            cursor: "default",
                        }}
                        onMouseEnter={(e) => {
                            (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                            (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 32px rgba(44,26,14,0.14)";
                            (e.currentTarget as HTMLDivElement).style.borderColor = "#c8922a";
                        }}
                        onMouseLeave={(e) => {
                            (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                            (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 16px rgba(44,26,14,0.07)";
                            (e.currentTarget as HTMLDivElement).style.borderColor = "#f0e6d6";
                        }}
                    >
                        <div style={{ fontSize: "2.2rem", marginBottom: "14px", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                            <span>{p.emoji}</span>
                            {!p.inStock && (
                                <span style={{
                                    fontSize: '0.65rem',
                                    background: '#fee2e2',
                                    color: '#991b1b',
                                    padding: '4px 8px',
                                    borderRadius: '4px',
                                    fontWeight: 700,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px'
                                }}>
                                    Out of Stock
                                </span>
                            )}
                        </div>
                        <div
                            style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: "1.12rem",
                                fontWeight: 700,
                                color: "#2c1a0e",
                                marginBottom: "6px",
                            }}
                        >
                            {p.name}
                        </div>
                        <div
                            style={{
                                fontSize: "0.82rem",
                                color: "#9a7a5a",
                                lineHeight: 1.55,
                                flex: 1,
                                marginBottom: "16px",
                                fontFamily: "'Lato', sans-serif",
                            }}
                        >
                            {p.desc}
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: 'column',
                                gap: '12px'
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span
                                    style={{
                                        fontSize: "1.1rem",
                                        fontWeight: 700,
                                        color: "#c8922a",
                                        fontFamily: "'Lato', sans-serif",
                                    }}
                                >
                                    {p.price}
                                </span>
                                {p.inStock && (
                                    <span style={{ fontSize: '0.7rem', color: '#4a7c59', fontWeight: 600 }}>✓ In Stock</span>
                                )}
                            </div>

                            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                {getItemQuantity(p.name) > 0 ? (
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#fdf8f0', padding: '6px', borderRadius: '6px', flex: 1, justifyContent: 'space-between', border: '1px solid #c8922a' }}>
                                        <button
                                            onClick={() => updateQuantity(p.name, getItemQuantity(p.name) - 1)}
                                            style={{ border: 'none', background: 'none', cursor: 'pointer', fontWeight: 900, color: '#c8922a', padding: '0 8px' }}
                                        >
                                            -
                                        </button>
                                        <span style={{ fontWeight: 700, color: '#2c1a0e' }}>{getItemQuantity(p.name)}</span>
                                        <button
                                            onClick={() => updateQuantity(p.name, getItemQuantity(p.name) + 1)}
                                            style={{ border: 'none', background: 'none', cursor: 'pointer', fontWeight: 900, color: '#c8922a', padding: '0 8px' }}
                                        >
                                            +
                                        </button>
                                    </div>
                                ) : (
                                    <button
                                        onClick={() => p.inStock && addToCart({ name: p.name, price: p.price, emoji: p.emoji })}
                                        disabled={!p.inStock}
                                        style={{
                                            background: p.inStock ? "#4a7c59" : "#d1d5db",
                                            color: "#fff",
                                            border: "none",
                                            padding: "10px 16px",
                                            borderRadius: "6px",
                                            fontSize: "0.85rem",
                                            fontWeight: 700,
                                            cursor: p.inStock ? "pointer" : "not-allowed",
                                            letterSpacing: "0.5px",
                                            fontFamily: "'Lato', sans-serif",
                                            transition: "all 0.2s",
                                            width: '100%'
                                        }}
                                        onMouseEnter={(e) => {
                                            if (p.inStock) (e.currentTarget as HTMLButtonElement).style.background = "#3a6348";
                                        }}
                                        onMouseLeave={(e) => {
                                            if (p.inStock) (e.currentTarget as HTMLButtonElement).style.background = "#4a7c59";
                                        }}
                                    >
                                        {p.inStock ? "Add to Order" : "Currently Unavailable"}
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <p
                style={{
                    textAlign: "center",
                    marginTop: "32px",
                    color: "#9a7a5a",
                    fontSize: "0.8rem",
                    fontStyle: "italic",
                    fontFamily: "'Lato', sans-serif",
                }}
            >
                * Prices shown are indicative. Contact us for bulk pricing &amp; current offers.
            </p>
        </section>
    );
}
