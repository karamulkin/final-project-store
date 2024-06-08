import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const PageStore = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(data => {
            setProducts(data.products);
            setLoading(false);
        })
        .catch(error => {
            console.error('Error fetching products', error);
            setError('Failed to fetch products');
            setLoading(false);
        });
}, []);

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>{error}</div>;
    }


    return (
        <div>
            <h2>Store</h2>
            <div className="product-list">
                {products.map(product => (
                    <div key={product.id} className="product-item">
                        <img src={product.thumbnail} alt={product.title} />
                        <h3>{product.title}</h3>
                        <p>{product.price}</p>
                        <p>Rating: {product.rating}</p>
                        <button>Add to Cart</button>
                        <Link to={`/singleproduct/${product.id}`}>View details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}