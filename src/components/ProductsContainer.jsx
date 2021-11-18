import React from 'react';
import { useSelector } from 'react-redux';
import useProducts from '../hooks/useProducts';
import { ProductCard } from '.';

import { ProductsList } from './styled-components';

function ProductsContainer() {
  const categoryID = useSelector((state) => state.shop.categoryID);
  const query = useSelector((state) => state.shop.query);
  const { products } = useProducts(categoryID, query);

  return (
    <ProductsList className="products-container">
      {
        products.map((product) => (
          <ProductCard
            key={ product.id }
            title={ product.title }
            img={ product.thumbnail }
            price={ `R$ ${product.price}` }
            id={ product.id }
          />
        ))
      }
    </ProductsList>
  );
}

export default ProductsContainer;
