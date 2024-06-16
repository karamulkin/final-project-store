import React from "react";
import { Link } from 'react-router-dom';
import { useStore } from '../hooks/useStore';

export const PageShoppingCart = () => {
    const { products, cart, removeFromCart, cleanCart } = useStore();

    return (
        <div>
            <div>
                <Link to="/store">Go back to Store</Link>
                <Link to="/checkout">Proceed to Checkout</Link>
            </div>
            <h1>ShoppingCart</h1>
            <ul>
                {products.length &&
                cart.map(({ id, amount }) => {
                    const productData = products.find(product => id === product.id);

                    return (
                        <li key={id}>
                            {productData.title} amount {amount}{" "}
                            <button onClick={() => removeFromCart(id, amount)}>
                                remove 1 item
                            </button>
                        </li>
                    );
                })}
            </ul>
            <div>
                <button onClick={cleanCart}>clean cart</button>
            </div>
        </div>
    );
};