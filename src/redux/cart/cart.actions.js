import CartActionTypes from "./cart.types";

export const toggleCartDropdown = () => ({
  type: CartActionTypes.toggleCartDropdown
});

export const addItem = item => ({
  type: CartActionTypes.addItem,
  payload: item
});

export const removeItem = item => ({
  type: CartActionTypes.removeItem,
  payload: item
});

export const clearItemFromCart = item => ({
  type: CartActionTypes.clearItemFromCart,
  payload: item
});
