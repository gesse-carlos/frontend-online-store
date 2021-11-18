import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { BsFillCartFill, BsSearch } from "react-icons/bs";
import { shopActions } from '../redux/reducer/shop';
import { Input, CategoriesList, ProductsContainer } from '../components';

import { Header, HeaderButton } from './styled-components';

function Home() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [query, setQuery] = useState('');
  const handleChange = ({ target: { value } }) => setQuery(value);
  const handleClick = () => dispatch(shopActions.setQuery(query));
  return (
    <main>
      <Header className="search-container">
        <Input
          type="text"
          name="products-query"
          placeHolder="Search Products"
          className="search-products-input"
          onChange={ handleChange }
        />
        <HeaderButton
          type="button"
          onClick={ handleClick }
        >
          <BsSearch className="icon-svg" />
        </HeaderButton>
        <HeaderButton
          type="button"
          onClick={ () => history.push('/cart') }
        >
          <BsFillCartFill className="icon-svg" />
        </HeaderButton>
      </Header>
      <CategoriesList />
      <ProductsContainer />
    </main>
  );
}

export default Home;