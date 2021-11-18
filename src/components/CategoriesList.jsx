import React from 'react';
import useCategories from '../hooks/useCategories';
import { Input } from '.';

function CategoriesList() {
  const { categories } = useCategories();

  return (
    <aside className="categories-container">
      {
        categories.map((category) => (
          <Input
            type="radio"
            key={ category.id }
            value={ category.name }
            className="category-input"
            name={ category.name }
            labelText={ category.name }
          />
        ))
      }
    </aside>
  );
}

export default CategoriesList;
