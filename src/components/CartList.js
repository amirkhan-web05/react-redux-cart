import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/actions/cart';
import { fetchFruits, fetchTitle } from '../redux/actions/fruits';
import { setCurrentPage } from '../redux/actions/paginate';
import { CartItems } from './CartItems';

export const CartList = React.memo(() => {
  const dispatch = useDispatch();

  const handelCartFruits = (fruits) => {
    dispatch(addToCart(fruits));
  };

  const items = useSelector(({ fruits }) => fruits.items);
  const currentPages = useSelector(({ paginate }) => paginate.currentPages);
  const perPages = useSelector(({ paginate }) => paginate.perPages);
  const [searchValue, setSearchValue] = React.useState('');
  const pages = [1, 2, 3];

  React.useEffect(() => {
    dispatch(fetchFruits(currentPages, perPages, searchValue));
  }, [currentPages]);

  function searchHandler() {
    dispatch(fetchTitle(searchValue, currentPages, perPages));
  }

  return (
    <>
      <input onChange={(e) => setSearchValue(e.target.value)} type="text" />
      <button onClick={searchHandler}>Search</button>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {items
          ? items.map((item) => (
              <CartItems
                onAddToFruits={handelCartFruits}
                key={item.id}
                {...item}
              />
            ))
          : ''}
      </div>
      <h1>hekkoo</h1>
      {pages.map((page, index) => (
        <span
          style={{ margin: '0 10px', cursor: 'pointer' }}
          key={index}
          className={page === currentPages ? 'white' : ''}
          onClick={() => dispatch(setCurrentPage(page))}
        >
          {page}
        </span>
      ))}
    </>
  );
});
