import { SET_CURRENT_PAGE } from '../types';

export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});
