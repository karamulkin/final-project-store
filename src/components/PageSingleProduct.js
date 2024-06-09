import React from 'react';
import { useLoaderData } from 'react-router-dom';

export async function loader({ params }) {
    const response = await fetch(`https://dummyjson.com/products/${params.productId}`);
    const product = await response.json();
    return { product };
}

export const PageSingleProduct = () => {
    const { product } = useLoaderData();

    const addToCart = () => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const existingItem = cartItems.find(item => item.id === product.id);

        if (existingItem) {
            existingItem.quantity +=1;
        } else {
            cartItems.push({...product, quantity: 1});
        }

        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        alert(`${product.title} added to cart`);
    };

    return (
        <div>
            <h2>{product.title}</h2>
            <img src={product.thumbnail} alt={product.title} />
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    );
}