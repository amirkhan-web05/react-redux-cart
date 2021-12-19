import { ADD_TO_CART, CLEAR_CART, MINUS_CART_ITEM, PLUS_CART_ITEM, REMOVE_TO_CART } from '../types';

export const addToCart = (fruits) => ({
  type: ADD_TO_CART,
  payload: fruits,
});

export const removeToCart = (id) => ({
  type: REMOVE_TO_CART,
  payload: id,
});

export const plusCartItem = (id) => ({
  type: PLUS_CART_ITEM,
  payload: id,
});

export const minusCartItem = (id) => ({
  type: MINUS_CART_ITEM,
  payload: id,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});
