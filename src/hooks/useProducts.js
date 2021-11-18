import { useState, useEffect } from 'react';

function useProducts(categoryId, query) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
      const { results } = await (await fetch(url)).json();

      setProducts(results);
    }

    fetchProducts();
  }, [categoryId, query]);

  return { products };
}

export default useProducts;