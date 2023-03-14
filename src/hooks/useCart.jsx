import { useContext } from 'react';
import { cartContext } from '../context/cartContext';

const useCart = () => {
  const cartData = useContext(cartContext);

  return cartData;
};

export default useCart;
