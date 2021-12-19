import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useCart } from '../hooks/useCart'
import { clearCart, minusCartItem, plusCartItem, removeToCart } from '../redux/actions/cart'

export const Cart = () => {
  const items = useSelector(({cart}) => cart.items)
  const {totalPrice} = useCart()
  const dispatch = useDispatch()
  
  const removeCart = (id) => {
    dispatch(removeToCart(id))
  }

  const plusCart = (id) => {
    dispatch(plusCartItem(id))
  }

  const minusCart = (id) => {
    dispatch(minusCartItem(id))
  }

  const clearCartHandler = () => {
    dispatch(clearCart())
  }

  return (
    <>
      <h1>Cart</h1>
      {items ? items.map(item => (
        <div
          key={item.id}
          style={{ border: '1px solid red', padding: '10px', margin: '10px 15px' }}
        >
          <h1>{item.name}</h1>
          <span onClick={() => removeCart(item.id)}>&times;</span>
          <button onClick={() => plusCart(item.id)}>+</button>
          <span>{item.count}</span>
          <button onClick={() => minusCart(item.id)}>-</button>
          <p>{item.price}</p>
        </div>
      )) : ''}
      {items.length ? (
        <>
          <button onClick={clearCartHandler}>Clear Cart</button>
          <h2>Total:{totalPrice}</h2>
        </>
      ) : <h2>Total:{totalPrice}</h2>}
    </>
  )
}