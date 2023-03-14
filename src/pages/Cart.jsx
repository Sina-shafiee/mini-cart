import React from 'react';
import ProductList from '../components/ProductList';
import useCart from '../hooks/useCart';

const Cart = () => {
  const { cartItems } = useCart();
  return (
    <main>
      {cartItems?.length ? (
        <ProductList productList={cartItems} />
      ) : (
        <p>cart is empty</p>
      )}
    </main>
  );
};

export default Cart;
