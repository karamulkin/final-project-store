import React, { useEffect, useState } from 'react';

const SingleProductPage = ({ match }) => {
    const productId = match.params.id;
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${productId}`)
        .then(response => response.json())
        .then(data => {
            setProduct(data);
            setLoading(false);
        })
        .catch(error => console.error('Error fetching product:', error));
    }, [productId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{product.title}</h2>
            <img src={product.thumbnail} alt={product.title} />
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button>Add to Cart</button>
        </div>
    );
}

export default SingleProductPage;