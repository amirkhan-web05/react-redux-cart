import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export const Details = () => {
  const { id } = useParams();
  const items = useSelector(({ fruits }) => fruits.items);
  const [available, setAvaible] = React.useState(0);

  const changeAvaible = React.useCallback((index) => {
    setAvaible(index);
  }, []);

  const details = items.filter((item) => {
    return Number(item.id) === Number(id);
  });

  const colors = [
    {
      color: 'Red:Доступные',
    },
    {
      color: 'Blue',
    },
    {
      color: 'Green',
    },
    {
      color: 'Grey',
    },
  ];

  return (
    <div>
      {details.map((item, index) => (
        <div
          key={item.id}
          style={{
            border: '5px solid grey',
            width: '40%',
            margin: '30px 30px',
          }}
        >
          <h1
            className={available === index ? 'Red' : ''}
            style={{ fontSize: '40px' }}
          >
            {available === index ? item.name : 'Нет в наличий'}
          </h1>
          <p style={{ fontSize: '30px' }}>Price: {item.price}$</p>
          <div>
            {colors.map((item, index) => (
              <div key={index}>
                <h3
                  onClick={() => changeAvaible(index)}
                  className={index === available ? 'available' : 'not'}
                >
                  {index === 0 ? item.color : `${item.color}:Нет в наличий`}
                </h3>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
