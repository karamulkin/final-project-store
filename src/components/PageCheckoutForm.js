import React, { useState } from "react";
import { useStore } from '../hooks/useStore';

export const PageCheckoutForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        phone: '',
        email: '',
        cardNumber: '',
        cardExpiry: '',
        cardCVC: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const { products, cart, calculateCartTotals, cleanCart, navigate } = useStore();
    const deliveryFee = 5;

    const { totalQuantity, totalPriceProducts } = calculateCartTotals(cart, products);
    const totalPrice = totalPriceProducts + deliveryFee;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        cleanCart();
        navigate('/order-accepted');
    };

    return (
        <div>
            <h2>Checkout</h2>
            <h3>Delivery destination:</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                    />
                </div>
                <div>
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        name="address"
                        id="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        autoComplete="address-line1"
                    />
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        autoComplete="tel"
                     />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                    />
                </div>
                <h3>Payment by card:</h3>
                <div>
                    <label htmlFor="cardNumber">Card Number</label>
                    <input
                        type="text"
                        name="cardNumber"
                        id="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        required
                        autoComplete="cc-number"
                    />
                </div>
                <div>
                    <label htmlFor="cardExpiry">Card Expiry</label>
                    <input
                        type="text"
                        name="cardExpiry"
                        id="cardExpiry"
                        value={formData.cardExpiry}
                        onChange={handleChange}
                        required
                        autoComplete="cc-exp"
                    />
                </div>
                <div>
                    <label htmlFor="cardCVC">Card CVC</label>
                    <input
                        type="text"
                        name="cardCVC"
                        id="cardCVC"
                        value={formData.cardCVC}
                        onChange={handleChange}
                        required
                        autoComplete="cc-csc"
                    />
                </div>
                <button type="submit">Place order</button>
            </form>
            <div>
                <h2>Cart Summary</h2>
                <p>Total number of products: {totalQuantity}</p>
                <p>Delivery fee: €{deliveryFee}</p>
                <p>Total price: €{totalPrice}</p>
            </div>
        </div>
    );
};