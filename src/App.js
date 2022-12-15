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
  const [cartActive, setCartActive] = useState(false);
  const [shoppingCartItems, setShoppingCartItems] = useState([]);
  const menuItems = ['Collections', 'Men', 'Women', 'About', 'Contact'];
  const [counter, setCounter] = useState(0);

  return (
    <>
      <Navbar
        setMenuActive={setMenuActive}
        setOverlayActive={setOverlayActive}
        cartActive={cartActive}
        setCartActive={setCartActive}
      />
      <SliderMenu
        menuActive={menuActive}
        setMenuActive={setMenuActive}
        overlayActive={overlayActive}
        setOverlayActive={setOverlayActive}
        menuItems={menuItems}
      />
      {cartActive ? <ShoppingCart
        cartActive={cartActive}
        setCartActive={setCartActive}
        items={shoppingCartItems}
      /> : null}
      <PhotoSlider />
      <ProductDescription />
      <AddToCart
        shoppingCartItems={shoppingCartItems}
        setShoppingCartItems={setShoppingCartItems}
        counter={counter}
        setCounter={setCounter}
      /> 
    </>
  );
}

export default App;
