import React from "react";
import { Link } from 'react-router-dom';
import { useStore } from '../hooks/useStore';

export const PageShoppingCart = () => {
    const { products, cart, removeFromCart, cleanCart } = useStore();

    return (
        <div>
            <div>
                <Link to="/store">
                    <button>Go back to Store</button>
                </Link>
                <Link to="/checkout">
                    <button>Proceed to Checkout</button>
                </Link>
            </div>
            <h1>ShoppingCart</h1>
            <ul>
                {products.length &&
                cart.map(({ id, amount }) => {
                    const productData = products.find(product => id === product.id);

                    return (
                        <li key={id}>
                            {productData.title} price: {productData.price} amount: {amount}{" "}
                            <img src={productData.thumbnail} alt={productData.title} />
                            <Link to={`/singleproduct/${productData.id}`}>
                                <button>View more</button>
                            </Link>
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