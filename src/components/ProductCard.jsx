import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoIosRemoveCircle, IoIosAddCircle, IoMdTrash } from "react-icons/io";
import PropTypes from 'prop-types';
import { cartActions } from '../redux/reducer/cart';
import { AddProductButton } from '.';

import { Product } from './styled-components';

function ProductCard({ title, img, price, id, quantity }) {
  const dispatch = useDispatch();

  const handleQuantity = () => {
    if (quantity > 1) return dispatch(cartActions.decreaseQuantity(id))
    return dispatch(cartActions.removeProduct(id));
  }

  const cartElements = (
    <section>
      <button
        type="button"
        className="quantity-button"
        onClick={ handleQuantity }
      >
        <IoIosRemoveCircle />
      </button>
      <p className="quantity-label">{ quantity }</p>
      <button
        type="button"
        className="quantity-button"
        onClick={ () => dispatch(cartActions.increaseQuantity(id)) }
      >
        <IoIosAddCircle />
      </button>
      <button
        type="button"
        className="remove-button"
        onClick={ () => dispatch(cartActions.removeProduct(id)) }
      >
        <IoMdTrash />
      </button>
    </section>
  );

  return (
    <Product className="product-card">
      <Link to={ `product=${id}` }>
        <img className="product-logo" src={ img } alt={ `${title}-logo` } />
      </Link>
      <h3 className="product-title">{ title }</h3>
      <p className="price-label">{ price }</p>
      {
        !quantity &&
        <AddProductButton
          title={ title }
          img={ img }
          price={ price }
          id={ id }
        />
      }
      { quantity && cartElements }
    </Product>
  );
}

const { string, number } = PropTypes;

ProductCard.propTypes = {
  title: string,
  img: string,
  price: string,
  id: string,
  quantity: number,
};

export default ProductCard;