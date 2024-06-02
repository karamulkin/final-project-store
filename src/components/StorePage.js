import React from 'react';
import { Link } from 'react-router-dom'

const StorePage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
        .then
    })

    return (
        <div>
            <h2>Store</h2>
            <div className="product-list">
                {products.map(product => (
                    <div key={product.id} className="product-item"></div>
                ))}
            </div>
        </div>
    )
}