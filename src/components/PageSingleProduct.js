import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useStore } from '../hooks/useStore';

export const PageSingleProduct = () => {
  const { productId } = useParams();
  const { products } = useStore();
  const product = products.find(p => p.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Link to="/store">Back to Store</Link>
      <h1>{product.title}</h1>
      <img src={product.thumbnail} alt={product.title} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};
