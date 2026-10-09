export const products = [
  {
    id: 1,
    title: 'Dhakai Cotton Shirt',
    category: 'Shirts',
    price: 1850,
    color: 'Off-white',
    image: 'https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=900&q=85',
    description: 'A comfortable cotton shirt inspired by the easy, everyday style of Dhaka. Made for workdays and weekends.',
  },
  {
    id: 2,
    title: 'Comfort Fit Pant',
    category: 'Pants',
    price: 2450,
    color: 'Stone',
    image: 'https://images.unsplash.com/photo-1721637245920-4073818252b2?auto=format&fit=crop&w=900&q=85',
    description: 'A smart, relaxed-fit pant that moves easily from the office to an evening adda.',
  },
  {
    id: 3,
    title: 'Nakshi Kantha Shawl',
    category: 'Traditional',
    price: 11100,
    color: 'Natural',
    image: 'https://live.staticflickr.com/5048/5292270669_a3ba8d9fde_b.jpg',
    description: 'A soft, textured layer inspired by the hand-crafted warmth of Bengali kantha work.',
  },
  {
    id: 4,
    title: 'Handmade bag',
    category: 'Bag',
    price: 6800,
    color: 'Orange',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=85',
    description: 'A traditional handmade jute bag.',
  },
  {
    id: 5,
    title: ' Panjabi',
    category: 'Panjabi',
    price:1200,
    color: 'Black',
    image: 'https://images.unsplash.com/photo-1711044871601-301f9b0ecf91?auto=format&fit=crop&w=900&q=85',
    description: 'A clean cotton panjabi with a comfortable fit, perfect for Eid, celebrations, and special evenings.',
  },
  {
    id: 6,
    title: 'Muslin Saree',
    category: 'Sarees',
    price: 5200,
    color: 'Cream',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=85',
    description: 'Lightweight and elegant, this soft muslin saree is made for Bangladesh’s warm, festive days.',
  },
  {
    id: 7,
    title: 'Table Lamp',
    category: 'Electronics',
    price: 2400,
    color: 'Orange',
    image: 'https://images.unsplash.com/photo-1616810559347-257669714c79?auto=format&fit=crop&w=900&q=85',
    description: 'A study lamp',
  },
  
];

export const categories = ['All', ...new Set(products.map((product) => product.category))];

export function formatPrice(price) {
  return `৳${price.toLocaleString('en-BD')}`;
}
