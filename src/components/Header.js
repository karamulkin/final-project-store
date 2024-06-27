import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from './StoreLogic';
import styles from './Header.module.css';

export const Header  = () => {
    const { cart, products, calculateCartTotals } = useContext(StoreContext);

    const { totalQuantity } = calculateCartTotals(cart, products);

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul className={styles.navUl}>
                    <li className={styles.navLi}><Link to="/">Home</Link></li>
                    <li className={styles.navLi}><Link to="/store">Store</Link></li>
                    <li className={styles.navLi}><Link to="/cart">Cart</Link></li>
                    <span>{totalQuantity}</span>
                </ul>
            </nav>
        </header>
    );
};