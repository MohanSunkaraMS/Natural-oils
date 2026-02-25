// src/components/CartDrawer.tsx
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { WHATSAPP_NUMBER } from '../data/products';

export default function CartDrawer() {
    const { items, removeFromCart, updateQuantity, totalCount, clearCart } = useCart();
    const [isOpen, setIsOpen] = useState(false);

    const handleWhatsAppOrder = () => {
        if (items.length === 0) return;

        let message = `Hi! I'd like to place an order from *Aditya Natural Oils*:\n\n`;
        items.forEach((item, index) => {
            message += `${index + 1}. ${item.emoji} *${item.name}*\n   Qty: ${item.quantity}\n   Price: ${item.price}\n\n`;
        });

        message += `Interested in these items. Please confirm availability and total price.`;

        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
    };

    if (totalCount === 0 && !isOpen) return null;

    return (
        <>
            {/* Floating Cart Button */}
            <button
                onClick={() => setIsOpen(true)}
                style={{
                    position: 'fixed',
                    bottom: '24px',
                    right: '24px',
                    background: '#c8922a',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '50px',
                    padding: '12px 24px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    cursor: 'pointer',
                    zIndex: 1001,
                    fontWeight: 700,
                    fontFamily: "'Lato', sans-serif"
                }}
            >
                🛒 View Order ({totalCount})
            </button>

            {/* Sidebar/Drawer Overlay */}
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0,0,0,0.5)',
                        zIndex: 1002,
                        backdropFilter: 'blur(2px)'
                    }}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            width: 'min(400px, 100%)',
                            height: '100%',
                            background: '#fff',
                            boxShadow: '-4px 0 20px rgba(0,0,0,0.1)',
                            display: 'flex',
                            flexDirection: 'column',
                            animation: 'slideIn 0.3s ease-out'
                        }}
                    >
                        <style>{`
                            @keyframes slideIn {
                                from { transform: translateX(100%); }
                                to { transform: translateX(0); }
                            }
                        `}</style>

                        <div style={{ padding: '24px', borderBottom: '1px solid #f0e6d6', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h3 style={{ margin: 0, fontFamily: "'Playfair Display', serif" }}>Your Order</h3>
                            <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#9a7a5a' }}>✕</button>
                        </div>

                        <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
                            {items.length === 0 ? (
                                <p style={{ textAlign: 'center', color: '#9a7a5a', marginTop: '40px' }}>Your Cart is Empty</p>
                            ) : (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                    {items.map((item) => (
                                        <div key={item.name} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                            <div style={{ fontSize: '2rem' }}>{item.emoji}</div>
                                            <div style={{ flex: 1 }}>
                                                <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{item.name}</div>
                                                <div style={{ fontSize: '0.8rem', color: '#c8922a' }}>{item.price}</div>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#fdf8f0', padding: '4px', borderRadius: '4px' }}>
                                                <button onClick={() => updateQuantity(item.name, item.quantity - 1)} style={{ border: 'none', background: 'none', cursor: 'pointer', padding: '0 8px' }}>-</button>
                                                <span style={{ fontSize: '0.9rem', width: '20px', textAlign: 'center' }}>{item.quantity}</span>
                                                <button onClick={() => updateQuantity(item.name, item.quantity + 1)} style={{ border: 'none', background: 'none', cursor: 'pointer', padding: '0 8px' }}>+</button>
                                            </div>
                                            <button onClick={() => removeFromCart(item.name)} style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#ef4444', fontSize: '1.1rem' }}>🗑</button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {items.length > 0 && (
                            <div style={{ padding: '24px', borderTop: '1px solid #f0e6d6', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <button
                                    onClick={handleWhatsAppOrder}
                                    style={{
                                        background: '#25D366',
                                        color: '#fff',
                                        border: 'none',
                                        padding: '16px',
                                        borderRadius: '8px',
                                        fontWeight: 700,
                                        fontSize: '1rem',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: '8px'
                                    }}
                                >
                                    Confirm on WhatsApp
                                </button>
                                <button
                                    onClick={clearCart}
                                    style={{ background: 'none', border: 'none', color: '#9a7a5a', fontSize: '0.8rem', cursor: 'pointer' }}
                                >
                                    Clear All
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
