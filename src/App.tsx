import { useState, useEffect } from "react";
import "./index.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import TrustBar from "./components/sections/TrustBar";
import ProductsMenu from "./components/sections/ProductsMenu";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";

import AnnouncementBar from "./components/AnnouncementBar";
import Testimonials from "./components/sections/Testimonials";
import { CartProvider } from "./context/CartContext";
import CartDrawer from "./components/CartDrawer";

// Admin imports
import AdminLogin from "./components/admin/AdminLogin";
import AdminDashboard from "./components/admin/AdminDashboard";
import { onAuthStateChanged } from "firebase/auth";
import type { User } from "firebase/auth";
import { auth } from "./lib/firebase";

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(window.location.hash === "#admin");

  useEffect(() => {
    const handleHashChange = () => {
      setIsAdmin(window.location.hash === "#admin");
    };
    window.addEventListener("hashchange", handleHashChange);

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      unsubscribe();
    };
  }, []);

  if (isAdmin) {
    return (
      <div className="admin-root">
        {!user ? <AdminLogin /> : <AdminDashboard />}
      </div>
    );
  }

  return (
    <CartProvider>
      <AnnouncementBar />
      <Navbar />

      <main>
        <Hero />
        <TrustBar />
        <ProductsMenu />
        <Testimonials />
        <About />
        <Contact />
      </main>

      <Footer />
      <CartDrawer />
    </CartProvider>
  );
}
