import React from 'react';
import { useDispatch } from 'react-redux';
import { shopActions } from '../redux/reducer/shop';
import useCategories from '../hooks/useCategories';
import { Input } from '.';

import { Aside } from './styled-components';

function CategoriesList() {
  const dispatch = useDispatch();
  const { categories } = useCategories();
  return (
    <Aside className="categories-container">
      { categories && categories.map((category) => (
        <Input
          type="radio"
          key={ category.id }
          className="category-input"
          name="category"
          id={ category.id }
          value={ category.name }
          labelText={ category.name }
          onClick={ () => dispatch(shopActions.setCategoryID(category.id)) }
        />
      )) }
    </Aside>
  );
}

export default CategoriesList;