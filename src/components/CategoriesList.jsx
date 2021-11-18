import React from 'react';
import { useDispatch } from 'react-redux';
import { shopActions } from '../redux/reducer/shop';
import useCategories from '../hooks/useCategories';
import { Input } from '.';

function CategoriesList() {
  const dispatch = useDispatch();
  const { categories } = useCategories();
  return (
    <aside className="categories-container">
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
    </aside>
  );
}

export default CategoriesList;