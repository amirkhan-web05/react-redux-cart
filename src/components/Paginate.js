import React from 'react';

export const Paginate = ({ number, onClickPages }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {number.map((num) => (
        <h3 onClick={() => onClickPages(num)} key={num}>{num}</h3>
      ))}
    </div>
  );
};
