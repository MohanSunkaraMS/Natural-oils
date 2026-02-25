// src/data/products.ts

export interface Product {
    name: string;
    desc: string;
    price: string;
    emoji: string;
    inStock: boolean;
}

export const products: Record<string, Product[]> = {
    oils: [
        { name: "Groundnut Oil", desc: "Cold-pressed, pure & unrefined", price: "₹180/L", emoji: "🥜", inStock: true },
        { name: "Coconut Oil", desc: "Wood-pressed virgin coconut oil", price: "₹220/L", emoji: "🥥", inStock: true },
        { name: "Sesame Oil", desc: "Traditional chekku-pressed gingelly oil", price: "₹260/L", emoji: "🌿", inStock: true },
        { name: "Mustard Oil", desc: "Kachi ghani cold-pressed", price: "₹160/L", emoji: "🌼", inStock: true },
        { name: "Sunflower Oil", desc: "Light, refined & pure", price: "₹150/L", emoji: "🌻", inStock: false },
        { name: "Castor Oil", desc: "Pure cold-pressed castor oil", price: "₹200/L", emoji: "🍃", inStock: true },
    ],
    ghees: [
        { name: "Cow Ghee", desc: "Traditional bilona method, A2 milk", price: "₹650/500g", emoji: "🐄", inStock: true },
        { name: "Buffalo Ghee", desc: "Rich, creamy, full-bodied aroma", price: "₹550/500g", emoji: "🥛", inStock: true },
        { name: "Desi Ghee", desc: "Farm fresh, pure & aromatic", price: "₹600/500g", emoji: "✨", inStock: false },
    ],
    pickles: [
        { name: "Mango Pickle", desc: "Spicy raw mango, sun-dried", price: "₹120/250g", emoji: "🥭", inStock: true },
        { name: "Lemon Pickle", desc: "Tangy & zesty, aged to perfection", price: "₹110/250g", emoji: "🍋", inStock: true },
        { name: "Mixed Veg Pickle", desc: "Seasonal veggies in mustard oil", price: "₹130/250g", emoji: "🥗", inStock: true },
        { name: "Gongura Pickle", desc: "Traditional Andhra sorrel leaf pickle", price: "₹140/250g", emoji: "🌱", inStock: false },
        { name: "Garlic Pickle", desc: "Fiery garlic in sesame oil", price: "₹150/250g", emoji: "🧄", inStock: true },
    ],
};

export const WHATSAPP_NUMBER = "919492603481";

export const NAV_ITEMS = ["Home", "Products", "About", "Contact"];
