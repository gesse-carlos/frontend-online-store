import { useState, useEffect } from 'react';

function useProduct(id) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const url = `https://api.mercadolibre.com/items?ids=${id}`;
      const result = await (await fetch(url)).json();

      setProduct(result[0].body);
    }
    fetchProduct();
  }, [id])

  return { product };
}

export default useProduct;