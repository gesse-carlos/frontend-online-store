import { useState, useEffect } from 'react';

function useCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
        const result = await response.json();

        setCategories(result);
      } catch (error) {
        setCategories([{ id: 0, name: 'Categories not found' }]);
      }
    }

    fetchCategories();
  }, []);

  return { categories };
}

export default useCategories;
