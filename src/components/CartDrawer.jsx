import Icon from './Icon';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../data/products';

export default function CartDrawer({ open, onClose }) {
  const { items, subtotal, updateQuantity, removeFromCart } = useCart();
  if (!open) return null;
  return (
    <div className="drawer-layer" role="presentation" onClick={onClose}>
      <aside className="cart-drawer" onClick={(event) => event.stopPropagation()} aria-label="Shopping bag">
        <div className="drawer-header"><div><p className="eyebrow">Your selection</p><h2>Shopping bag</h2></div><button className="icon-button" onClick={onClose} aria-label="Close shopping bag"><Icon name="close" /></button></div>
        {items.length === 0 ? (
          <div className="empty-cart"><span className="empty-icon"><Icon name="bag" size={28} /></span><h3>Your bag is empty</h3><p>Beautiful, useful things are waiting for you.</p><button className="dark-button" onClick={onClose}>Explore the collection</button></div>
        ) : (
          <>
            <div className="cart-items">
              {items.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt="" />
                  <div className="cart-item-content"><div className="cart-item-heading"><div><p className="eyebrow">{item.category}</p><h3>{item.title}</h3></div><button className="remove-button" onClick={() => removeFromCart(item.id)} aria-label={`Remove ${item.title}`}><Icon name="trash" size={17} /></button></div><div className="cart-item-footer"><div className="quantity-control"><button onClick={() => updateQuantity(item.id, item.quantity - 1)} aria-label="Decrease quantity"><Icon name="minus" size={14} /></button><span>{item.quantity}</span><button onClick={() => updateQuantity(item.id, item.quantity + 1)} aria-label="Increase quantity"><Icon name="plus" size={14} /></button></div><strong>{formatPrice(item.price * item.quantity)}</strong></div></div>
                </div>
              ))}
            </div>
            <div className="cart-summary"><div><span>Subtotal</span><strong>{formatPrice(subtotal)}</strong></div><p>Delivery charges and taxes calculated at checkout.</p><button className="dark-button checkout-button">Continue to checkout <Icon name="arrow" size={17} /></button></div>
          </>
        )}
      </aside>
    </div>
  );
}
