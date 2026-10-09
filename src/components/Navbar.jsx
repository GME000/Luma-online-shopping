import { useCart } from '../context/CartContext';
import Icon from './Icon';

export default function Navbar({ onCartOpen }) {
  const { itemCount } = useCart();
  return (
    <header className="navbar">
      <a className="brand" href="#top" aria-label="Luma home">luma<span>.</span></a>
      <nav className="nav-links" aria-label="Main navigation">
        <a href="#shop">Shop</a>
        <a href="#story">Our story</a>
        <a href="#journal">Journal</a>
      </nav>
      <div className="nav-actions">
        <button className="icon-button" aria-label="Search"><Icon name="search" /></button>
        <button className="cart-button" onClick={onCartOpen} aria-label={`Shopping bag with ${itemCount} items`}>
          <Icon name="bag" /><span>Bag</span><b>{itemCount}</b>
        </button>
      </div>
    </header>
  );
}
