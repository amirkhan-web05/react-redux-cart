import { SET_FRUITS } from '../types';

const initialState = {
  items: [],
};

export const fruits = (state = initialState, action) => {
  switch (action.type) {
    case SET_FRUITS: {
      return {
        ...state,
        items: action.payload,
      };
    }

    default:
      return state;
  }
};
