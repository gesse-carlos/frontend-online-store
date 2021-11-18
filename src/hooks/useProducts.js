import { useState, useEffect } from 'react';

function useProducts(categoryID, query) {
  const [products, setProducts] = useState([]);
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryID}&q=${query}`;

  useEffect(() => {
    const fetchProducts = async () => {
      const { results } = await (await fetch(url)).json();

      setProducts(results);
    }

    fetchProducts();
  }, [url]);

  return { products };
}

export default useProducts;
