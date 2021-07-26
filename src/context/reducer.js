export const initialState = {
  basket: [],
  user: null,
};
export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0);
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };
    case "REMOVE_FROM_CART":
      const index = state.basket.findIndex(
        (basketitem) => basketitem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Item cant be removed id: ${action.id}`);
      }
      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
};
