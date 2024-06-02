import React from 'react';
import { Link } from 'react-router-dom'

const StorePage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(data => {
            setProducts(data.products);
            setLoading(false);
        })
        .catch(error => console.error('Error fetching products', error));
    }, []);

    if (loading) {
        return <div>Loading...</div>
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
                        <Link to={`/product/${product.id}`}>View details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default StorePage;