import React from "react";
import { Link } from 'react-router-dom';
import { useStore } from '../hooks/useStore';

export const PageShoppingCart = () => {
    const { products, cart, removeFromCart, cleanCart, calculateCartTotals } = useStore();
    const deliveryFee = 5;

    const { totalQuantity, totalPriceProducts } = calculateCartTotals(cart, products);
    const totalPrice = totalPriceProducts + deliveryFee;

    return (
        <div>
            <div>
                <Link to="/store">
                    <button>Go back to Store</button>
                </Link>
                <button onClick={cleanCart}>clean cart</button>
            </div>
            <h1>ShoppingCart</h1>
            <ul>
                {products.length > 0 &&
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
                <h2>Cart Summary</h2>
                <p>Total number of products: {totalQuantity}</p>
                <p>Delivery fee: €{deliveryFee}</p>
                <p>Total price: €{totalPrice}</p>
            </div>
            <div>
                {totalQuantity > 0? (
                    <Link to="/checkout">
                        <button>Proceed to Checkout</button>
                    </Link>
                ) : (
                    <button disabled>Proceed to Checkout</button>
                )}
            </div>
        </div>
    );
};