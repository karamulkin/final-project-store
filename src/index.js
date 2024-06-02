import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './components/App';
import StorePage from './components/StorePage';
import SingleProductPage from './components/SingleProductPage';
import ShoppingCartPage from './components/ShoppingCartPage';
import CheckoutFormPage from './components/CheckoutFormPage';
import NotFoundPage from './components/NotFoundPage';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles.css';

function Main() {
  return (
    <Router>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/product/:id" element={<SingleProductPage />} />
          <Route path="/cart" element={<ShoppingCartPage />} />
          <Route path="/checkout" element={<CheckoutFormPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Main />);