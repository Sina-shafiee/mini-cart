import { createContext, useReducer } from 'react';
import { ADD_TO_CART, REMOVE_FROM_CART } from './cartActions';
import { initialValue, reducer } from './cartReducer';

export const cartContext = createContext();

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const addToCart = (product) => {
    const newItems = [...state.cartItems, product];
    dispatch({ type: ADD_TO_CART, payload: newItems });
  };

  const removeFromCart = (id) => {
    const newItems = state.cartItems.filter((item) => item.id !== id);
    dispatch({ type: REMOVE_FROM_CART, payload: newItems });
  };

  return (
    <cartContext.Provider
      value={{ addToCart, removeFromCart, cartItems: state.cartItems }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
