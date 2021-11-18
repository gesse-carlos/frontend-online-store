import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosCart } from "react-icons/io";
import { cartActions } from '../redux/reducer/cart';

import { CartButton } from './styled-components';

function AddProductButton({ title, img, price, id }) {
  const dispatch = useDispatch();
  const productsInCart = useSelector((state) => state.cart.products);

  const addToCart = () => dispatch(cartActions.addProduct({
    title,
    img,
    price,
    id,
    quantity: 1,
  }));

  const handleClick = () => (
    productsInCart.some((product) => product.id === id)
      ? dispatch(cartActions.increaseQuantity(id))
      : addToCart()
  );

  return (
    <CartButton
      type="button"
      className="add-cart-button"
      onClick={ handleClick }
    >
      <IoIosCart />
    </CartButton>
  );
}

export default AddProductButton;