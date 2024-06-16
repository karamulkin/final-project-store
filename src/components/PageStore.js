import React from "react";
import { useStore } from "../hooks/useStore";
import { Link } from "react-router-dom";

export const PageStore = () => {
    const { products, addToCart } = useStore();

    return (
        <div>
            <div>
                <Link to="/cart">Go to Cart</Link>
            </div>
            <h1>Our products</h1>
            <ul>
                {products.map(product => {
                    return (
                        <div key={product.id}>
                            <img src={product.thumbnail} alt={product.title} />
                            {product.title}{" "}
                            <button onClick={() => addToCart(product.id)}>Add to cart</button>
                            <Link to={`/singleproduct/${product.id}`}>
                                <button>View more</button>
                            </Link>
                        </div>
                    );
                })}
            </ul>
        </div>
    );
};