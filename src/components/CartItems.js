import React from 'react';
import { Link } from 'react-router-dom';

export const CartItems = ({ id, name, price, count, onAddToFruits }) => {
  const addToCartHandler = () => {
    const obj = {
      id,
      name,
      price,
      count,
    };

    onAddToFruits(obj);
  };

  return (
    <div
      style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 15px' }}
    >
      <Link to={`/details/${id}`}>
        <h1>{name}</h1>
      </Link>
      <p>{price}</p>
      <button onClick={addToCartHandler}>Add to Cart</button>
    </div>
  );
};
