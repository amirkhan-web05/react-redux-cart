import {
  ADD_TO_CART,
  CLEAR_CART,
  MINUS_CART_ITEM,
  PLUS_CART_ITEM,
  REMOVE_TO_CART,
} from '../types';

const initialState = {
  items: [],
};

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { count } = action.payload;

      const foundCart = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (foundCart) {
        foundCart.count = count;
      } else {
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      }

      return state;
    }

    case REMOVE_TO_CART: {
      debugger;
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    }

    case PLUS_CART_ITEM: {
      return {
        ...state.items,
        plus: state.items.forEach((item) => {
          if (item.id === action.payload) {
            item.count += 1;
          }
        }),
        items: [...state.items],
      };
    }

    case MINUS_CART_ITEM: {
      return {
        ...state.items,
        minus: state.items.forEach((item) => {
          if (item.id === action.payload) {
            item.count === 1 ? (item.count = 1) : (item.count -= 1);
          }
        }),
        items: [...state.items],
      };
    }

    case CLEAR_CART: {
      return {
        ...state.items,
        items: [],
      };
    }

    default:
      return state;
  }
};
