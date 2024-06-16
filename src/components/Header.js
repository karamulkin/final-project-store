import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from './StoreLogic';

export const Header  = () => {
    const { cart } = useContext(StoreContext);

    const totalQuantity = cart.reduce((sum, item) => sum + item.amount, 0);

    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/store">Store</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <span>{totalQuantity}</span>
                </ul>
            </nav>
        </header>
    );
};