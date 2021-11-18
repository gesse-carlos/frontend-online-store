import { useState, useEffect } from 'react';

function useCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const url = "https://api.mercadolibre.com/sites/MLB/categories";
      const result = await (await fetch(url)).json();

      setCategories(result);
    }

    fetchCategories();
  }, []);

  return { categories };
}

export default useCategories;