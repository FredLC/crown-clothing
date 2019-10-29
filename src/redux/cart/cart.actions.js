import CartActionTypes from "./cart.types";

export const toggleCartDropdown = () => ({
  type: CartActionTypes.toggleCartDropdown
});

export const addItem = item => ({
  type: CartActionTypes.addItem,
  payload: item
});
