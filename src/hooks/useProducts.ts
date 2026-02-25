// src/hooks/useProducts.ts
import { useState, useEffect } from 'react';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '../lib/firebase';
import type { Product } from '../data/products';

export function useProducts() {
    const [products, setProducts] = useState<Record<string, Product[]>>({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        // In Firestore, we can store products in a 'products' collection
        // with a 'category' field (oils, ghees, pickles)
        const q = query(collection(db, 'products'));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const groupedProducts: Record<string, Product[]> = {
                oils: [],
                ghees: [],
                pickles: []
            };

            snapshot.forEach((doc) => {
                const data = doc.data();
                const category = data.category || 'oils';
                if (!groupedProducts[category]) {
                    groupedProducts[category] = [];
                }
                groupedProducts[category].push({
                    name: data.name,
                    desc: data.desc,
                    price: data.price,
                    emoji: data.emoji,
                    inStock: data.inStock,
                    // docId is useful for editing/deleting
                    id: doc.id
                } as any);
            });

            setProducts(groupedProducts);
            setLoading(false);
        }, (err) => {
            console.error("Error fetching products:", err);
            setError(err);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return { products, loading, error };
}
