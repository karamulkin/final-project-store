import React, { useState, useEffect } from "react";

export const PageShoppingCart = () => {
    const [cartItems, setCartItems] = useState([]);

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

    if (cartItems.length === 0) {
        return <div>Your cart is empty. Please have a look on our products.</div>;
    }


    return (
        <div>
            <h2>Shopping Cart</h2>
            <ul>
                {cartItems.map(item => (
                    <li key={item.id}>
                        <img src={item.thumbnail} alt={item.title} />
                        <h3>{item.title}</h3>
                        <p>Price: {item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                        <button onClick={() => removeItem(item.id)}>Remove one</button>
                    </li>
                ))}
            </ul>
        </div>
    ) 
}