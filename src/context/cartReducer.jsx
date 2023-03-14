import { ADD_TO_CART, REMOVE_FROM_CART } from './cartActions';

export const initialValue = {
  cartItems: [],
  total: 0
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: action.payload
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: action.payload
      };
    default:
      return state;
  }
};
