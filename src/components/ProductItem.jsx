import { useEffect, useState } from 'react';
import useCart from '../hooks/useCart';

const ProductItem = ({ product }) => {
  const { addToCart, cartItems, removeFromCart } = useCart();
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const item = cartItems.filter((item) => item.id === product.id);
    if (item.length) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [cartItems]);

  return (
    <article key={product.id}>
      <h2>{product.title}</h2>
      <p>{product.price}</p>
      {isInCart ? (
        <button onClick={() => removeFromCart(product.id)}>
          remove from cart
        </button>
      ) : (
        <button onClick={() => addToCart(product)}>add cart</button>
      )}
    </article>
  );
};

export default ProductItem;
