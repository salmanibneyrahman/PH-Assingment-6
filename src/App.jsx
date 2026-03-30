import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Stats from './components/Stats';
import ProductSection from './components/ProductSection';
import Steps from './components/Steps';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      toast.warning(product.name + ' is already in the cart!');
      return;
    }
    setCart([...cart, product]);
    toast.success(product.name + ' added to cart!');
  };

  const removeFromCart = (productId) => {
    const item = cart.find((item) => item.id === productId);
    setCart(cart.filter((item) => item.id !== productId));
    if (item) {
      toast.info(item.name + ' removed from cart!');
    }
  };

  const clearCart = () => {
    setCart([]);
    toast.success('Checkout successful! Cart cleared.');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar cartCount={cart.length} />
      <Banner />
      <Stats />
      <ProductSection
        products={products}
        cart={cart}
        onAddToCart={addToCart}
        onRemoveFromCart={removeFromCart}
        onClearCart={clearCart}
      />
      <Steps />
      <Pricing />
      <Footer />
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default App;