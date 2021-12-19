import { getFruits, getTitle } from '../../api/api';
import { SET_FRUITS } from '../types';

export const setFruits = (items) => ({
  type: SET_FRUITS,
  payload: items,
});

export const fetchFruits = (currentPages, perPages) => (dispatch) => {
  getFruits(currentPages, perPages).then(({ data }) => {
    dispatch(setFruits(data));
  });
};

export const fetchTitle = (nameFruits) => (dispatch) => {
  getTitle(nameFruits).then(({ data }) => {
    dispatch(setFruits(data));
  });
};
