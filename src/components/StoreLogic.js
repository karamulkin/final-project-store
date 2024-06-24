import React, { useMemo, createContext, useEffect, useState } from 'react';

const LOCAL_STORAGE_CART = "cart-content";

export const StoreProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState(
        JSON.parse(localStorage.getItem(LOCAL_STORAGE_CART)) ?? [],
    );

    const addToCart = itemId => {
        setCart(cart => {
            const isItemInCart = cart.some(({ id }) => {
                return id === itemId;
            });

            let newCart = [];

            if (isItemInCart) {
                newCart = cart.map(cartItem => {
                    if (cartItem.id === itemId) {
                        return {...cartItem, amount: cartItem.amount + 1};
                    }
                    return cartItem;
                });
            } else {
                newCart = [...cart, { id: itemId, amount: 1}];
            }
            localStorage.setItem(LOCAL_STORAGE_CART, JSON.stringify(newCart));

            return newCart;
        });
    };

    const removeFromCart = (itemId, amount) => {
        setCart(cart => {
            let newCart = [];

            if (amount > 1) {
                newCart = cart.map(item => {
                    if (itemId === item.id) return { id: itemId, amount: amount - 1 };

                    return item;
                });
            } else {
                newCart = cart.filter(item => itemId !== item.id);
            }
            
            localStorage.setItem(LOCAL_STORAGE_CART, JSON.stringify(newCart));

            return newCart;
        });
    };

    const cleanCart = () => {
        localStorage.setItem(LOCAL_STORAGE_CART, JSON.stringify([]));

        setCart([]);
    };

    const fetchProducts = async () => {
        const url = `https://dummyjson.com/products`;

        const response = await fetch(url);
        const data = await response.json();

        setProducts(data.products);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const calculateCartTotals = (cart, products) => {
        const totalQuantity = cart.reduce((sum, item) => sum + item.amount, 0);
        const totalPriceProducts = cart.reduce((sum, item) => {
            const product = products.find(product => product.id === item.id);
            const price = product?.price || 0;
            return sum + (price * item.amount);
        }, 0);
        return { totalQuantity, totalPriceProducts };
    }

    const storeContext = useMemo(() => {
        return {
            cart,
            products,
            setProducts,
            addToCart,
            removeFromCart,
            cleanCart,
            fetchProducts,
            calculateCartTotals,
        };
    }, [cart, products]);

    return (
        <StoreContext.Provider value={storeContext}>
            {children}
        </StoreContext.Provider>
    );
};

export const StoreContext = createContext(null);