import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BsArrowReturnLeft, BsFillCartFill } from 'react-icons/bs';
import { IoIosCart } from "react-icons/io";
import { cartActions } from '../redux/reducer/cart';
import useProduct from '../hooks/useProduct';

function ProductDetails() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { product } = useProduct(id);
  const productsInCart = useSelector((state) => state.cart.products);

  const addToCart = () => dispatch(cartActions.addProduct({
    title: product.title,
    img: product.thumbnail,
    price: product.price,
    id: product.id,
    quantity: 1,
  }));

  const handleClick = () => (
    productsInCart.some((product) => product.id === id)
      ? dispatch(cartActions.increaseQuantity(id))
      : addToCart()
  );

  if (product.length === 0) return <h1>Loading...</h1>;

  return (
    <div className="product-details-container">
      <header className="product-details-header">
        <button
          type="button"
          onClick={ () => history.goBack() }
          className="goBack-button"
        >
          <BsArrowReturnLeft />
        </button>
        <button
          type="button"
          onClick={ () => history.push('/cart') }
        >
          <BsFillCartFill />
        </button>
      </header>

      <main className="product-card">
        <h1 className="product-title">{ `${ product.title } - ${ product.price }` }</h1>
        <img src={ product.thumbnail } alt={ `${ product.title}-logo` } />
        <button
          type="button"
          className="add-cart-button"
          onClick={ handleClick }
        >
          <IoIosCart />
        </button>
        <section className="product-especifications">
          {
            product.attributes.map((attribute) => (
              <div className="product-attribute" key={ attribute.id }>
                <p className="attribute-name">
                  { `${attribute.name}: ${attribute.value_name}` }
                </p>
              </div>
            ))
          }
        </section>
      </main>
    </div>
  );
}

export default ProductDetails;