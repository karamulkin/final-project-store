import React from 'react';
import { useLoaderData } from 'react-router-dom';

export async function loader({ params }) {
    const response = await fetch(`https://dummyjson.com/products/${params.productId}`);
    const product = await response.json();
    return { product };
}

export const PageSingleProduct = () => {
    const { product } = useLoaderData();

    return (
        <div>
            <h2>{product.title}</h2>
            <img src={product.thumbnail} alt={product.title} />
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button>Add to Cart</button>
        </div>
    );
}