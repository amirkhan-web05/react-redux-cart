import { SET_CURRENT_PAGE } from '../types';

const initialState = {
  currentPages: 1,
  perPages: 3,
};

export const paginate = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPages: action.payload,
      };
    }

    default:
      return state;
  }
};
