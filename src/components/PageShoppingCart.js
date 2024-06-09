import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export const PageShoppingCart = () => {
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);
    }, []);

    const removeItem = (itemId) => {
        const updatedCartItems = cartItems.map(item => {
            if (item.id === itemId) {
                item.quantity -= 1;
            }
            return item;
        }).filter(item => item.quantity > 0);

        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };

    const handleCheckout = () => {
        navigate('/checkout');
    };

    return (
        <div>
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    {cartItems.map(item => (
                        <div key={item.id}>
                            <h3>{item.title}</h3>
                            <p>Quantity: {item.quantity}</p>
                            <button onClick={() => removeItem(item.id)}>Remove</button>
                        </div>
                    ))}
                    <button onClick={handleCheckout}>Proceed to Checkout</button>
                </div>
            )}
        </div>
    );
};