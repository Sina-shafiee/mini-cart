import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';

const Home = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch('https://fakestoreapi.com/products?limit=10');

      const data = await res.json();

      setProductList(data);
    }

    fetchProducts();
  }, []);

  return (
    <main>
      <ProductList productList={productList} />
    </main>
  );
};

export default Home;
