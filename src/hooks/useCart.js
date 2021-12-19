import { useSelector } from 'react-redux';

export const useCart = () => {
  const cartItems = useSelector(({ cart }) => cart.items);
  const totalPrice = cartItems.reduce(
    (sum, obj) => sum + obj.price * obj.count,
    0
  );

  return {
    totalPrice,
  };
};
