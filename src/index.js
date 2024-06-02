import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/store" component={StorePage} />
          <Route exact path="/product/:id" component={SingleProductPage} />
          <Route exact path="/cart" component={ShoppingCartPage} />
          <Route exact path="/checkout" component={CheckoutFormPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Main />);