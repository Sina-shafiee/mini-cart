import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ productList }) => {
  return (
    <section>
      {productList?.map((product) => {
        return <ProductItem key={product.id} product={product} />;
      })}
    </section>
  );
};

export default ProductList;
