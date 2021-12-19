import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:3001/',
});

export const getFruits = async (currentPages = 1, perPages = 3) => {
  return await instance.get(`fruits?page=${perPages}&_limit=${currentPages}`);
};

export const getTitle = async (nameFruits) => {
  return await instance.get(`fruits/?name=${nameFruits}`);
};
