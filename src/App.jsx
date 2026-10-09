import { useState } from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import CartDrawer from './components/CartDrawer';
import Icon from './components/Icon';
import { categories, products } from './data/products';
import { formatPrice } from './data/products';

function ProductModal({ product, onClose }) {
  if (!product) return null;
  return <div className="modal-layer" onClick={onClose}><div className="product-modal" onClick={(event) => event.stopPropagation()}><button className="modal-close icon-button" onClick={onClose} aria-label="Close product details"><Icon name="close" /></button><img src={product.image} alt={product.title} /><div className="modal-content"><p className="eyebrow">{product.category} / {product.color}</p><h2>{product.title}</h2><strong>{formatPrice(product.price)}</strong><p>{product.description}</p><button className="dark-button" onClick={onClose}>Close details</button></div></div></div>;
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const visibleProducts = activeCategory === 'All' ? products : products.filter((product) => product.category === activeCategory);

  return (
    <div id="top">
      <Navbar onCartOpen={() => setCartOpen(true)} />
      <main>
        <section className="hero">
          <div className="hero-copy"><p className="eyebrow">The new everyday</p><h1>Less, but<br /><em>better.</em></h1><p className="hero-description">Thoughtful pieces for a life well lived. Designed with intention, made to stay.</p><a className="dark-button hero-button" href="#shop">Shop the collection <Icon name="arrow" size={17} /></a></div>
          <div className="hero-art"><div className="hero-shape"></div><img src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1100&q=85" alt="Bengali saree from the Luma collection" /><span className="hero-note">01 / 04<br /><small>Bangladesh,<br />beautifully made</small></span></div>
        </section>
        <section className="intro-strip" id="story"><p>We believe the things<br />you use every day<br /><em>should feel special.</em></p><span>Scroll to explore ↓</span></section>
        <section className="catalog" id="shop"><div className="section-heading"><div><p className="eyebrow">The collection</p><h2>Made for every day.</h2></div><p className="section-caption">A considered edit of pieces<br />with room to become your own.</p></div><div className="filter-row" aria-label="Filter products">{categories.map((category) => <button key={category} className={activeCategory === category ? 'filter active' : 'filter'} onClick={() => setActiveCategory(category)}>{category}</button>)}</div><div className="product-grid">{visibleProducts.map((product) => <ProductCard key={product.id} product={product} onDetails={setSelectedProduct} />)}</div></section>
        <section className="promise" id="journal"><div><p className="eyebrow">Our promise</p><h2>Good design<br /><em>should last.</em></h2></div><p>We choose honest materials, timeless forms, and details that reward a closer look. No excess. Just pieces that earn their place.</p></section>
      </main>
      <footer><a className="brand" href="#top">luma<span>.</span></a><p>Everyday, elevated.</p><small>© 2024 Luma Studio</small></footer>
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
}
