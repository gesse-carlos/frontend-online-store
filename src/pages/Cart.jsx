import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { BsArrowReturnLeft } from 'react-icons/bs';
import { cartActions } from '../redux/reducer/cart';
import { ProductCard } from '../components';

function Cart() {
  const history = useHistory();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products );

  if (products.length === 0) return (
    <section>
      <button
        type="button"
        onClick={ () => history.goBack() }
        className="goBack-button"
      >
        <BsArrowReturnLeft />
      </button>
      <h1>Empty Cart</h1>
    </section>
  )

  return (
    <main className="cart-container">
      <header className="cart-header">
        <button
          type="button"
          onClick={ () => history.goBack() }
          className="goBack-button"
        >
          <BsArrowReturnLeft />
        </button>
        <h1 className="cart-header-title">Carrinho</h1>
        <button
          type="button"
          onClick={ () => dispatch(cartActions.clearCart()) }
          className="clear-cart-button"
        >
          Clear Cart
        </button>
      </header>
      {
        products.map((product) => (
          <ProductCard
            key={ product.id }
            title={ product.title }
            img={ product.img }
            price={ product.price }
            id={ product.id }
            quantity={ product.quantity }
          />
        ))
      }
    </main>
  );
}

export default Cart;