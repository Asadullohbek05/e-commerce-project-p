import { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Layout from './components/Layout';
import { HomePage } from './pages/HomePage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import ElectronicsPage from './pages/ElectronicsPage';
import JeweleryPage from './pages/JeweleryPage';
import MensClothingPage from './pages/MensClothingPage';
import WomansClothing from './pages/WomansClothing';
import CartPage from './pages/CartPage';
import { toast } from 'react-toastify';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: JSON.parse(localStorage.getItem('cart')) || [],
    };
  }

  addToCart = async (id) => {
    try {
      const { cart } = this.state;
      const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
      this.setState({ cart: [...cart, data] }, () => {
        localStorage.setItem('cart', JSON.stringify(this.state.cart));
      });
      toast.success('Product added to Cart', {
        position: "top-center"
      })
      console.log('Cart:', this.state.cart);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
    localStorage.setItem('cart', JSON.stringify(this.state.cart))
  };

  render() {

    const removeFromCart = (id) => {
      const { cart } = this.state
      const filteredCart = cart.filter((item) => item.id !== id)
      this.setState({ cart: filteredCart })
      localStorage.setItem('cart', JSON.stringify(filteredCart))
      toast.error('Product Removed', {
        position: 'top-center',
      })
    }

    const { cart } = this.state
    return (
      <div className='min-h-screen flex flex-col justify-between'>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout cart={cart} />}>
              <Route index element={<HomePage addToCart={this.addToCart} />} />
              <Route path='/electronics' element={<ElectronicsPage />} />
              <Route path='/jewelery' element={<JeweleryPage />} />
              <Route path='/mens-clothing' element={<MensClothingPage />} />
              <Route path='/womens-clothing' element={<WomansClothing />} />
              <Route path='/product-page/:id' element={<ProductDetailPage />} />
              <Route path='/cart' element={<CartPage cart={cart} removeFromCart={removeFromCart} />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
