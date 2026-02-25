// src/App.tsx
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

export default function App() {
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
