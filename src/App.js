import { useState } from 'react';
import AddToCart from './components/AddToCart';
import Navbar from './components/Navbar';
import PhotoSlider from './components/ImageSlider';
import ProductDescription from './components/ProductDescription';
import SliderMenu from './components/SliderMenu';
import Counter from './components/Counter';
import ShoppingCart from './components/ShoppingCart';


function App() {
  const [menuActive, setMenuActive] = useState(false);
  const [overlayActive, setOverlayActive] = useState(false);

  const menuItems = ['Collections', 'Men', 'Women', 'About', 'Contact'];

  return (
    <>
      <ShoppingCart />
    </>
  );
}

export default App;
