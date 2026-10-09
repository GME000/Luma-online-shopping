import { useCart } from '../context/CartContext';
import Icon from './Icon';
import { formatPrice } from '../data/products';

export default function ProductCard({ product, onDetails }) {
  const { addToCart } = useCart();
  return (
    <article className="product-card">
      <button className="product-image-button" onClick={() => onDetails(product)} aria-label={`View details for ${product.title}`}>
        <img src={product.image} alt={product.title} />
        <span className="view-label">Quick view <Icon name="arrow" size={15} /></span>
      </button>
      <div className="product-info">
        <div>
          <p className="eyebrow">{product.category}</p>
          <h3>{product.title}</h3>
          <p className="product-color">{product.color}</p>
        </div>
        <div className="product-buy">
          <strong>{formatPrice(product.price)}</strong>
          <button className="add-button" onClick={() => addToCart(product)}>Add <span>+</span></button>
        </div>
      </div>
    </article>
  );
}
