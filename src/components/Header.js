import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from './StoreLogic';
import styles from './Header.module.css';
import logo from './logo.jpg';

export const Header  = () => {
    const { cart, products, calculateCartTotals } = useContext(StoreContext);

    const { totalQuantity } = calculateCartTotals(cart, products);

    return (
        <header className={styles.header}>
            <img src={logo} alt ="Logo" className={styles.logo} />
            <nav className={styles.nav}>
                <ul className={styles.navUl}>
                    <li className={styles.navLi}><Link to="/" className="home">Home</Link></li>
                    <li className={styles.navLi}><Link to="/store" className="store">Store</Link></li>
                    <li className={styles.navLi}><Link to="/cart" className="cart">Cart</Link></li>
                    <span>{totalQuantity}</span>
                </ul>
            </nav>
        </header>
    );
};