import LandingPage from 'pages/LandingPage';
import AboutPage from 'pages/AboutPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ContactPage from 'pages/ContactPage';
import ProductsPage from 'pages/ProductsPage';
import ProductsDetailPage from 'pages/ProductDetailPage';

function App() {
  return (
    <>
      <Router>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/products">
          <ProductsPage />
        </Route>
        <Route path="/product/:id">
          <ProductsDetailPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
      </Router>
    </>
  );
}

export default App;
