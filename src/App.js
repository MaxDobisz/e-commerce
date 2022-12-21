import { useState } from 'react';
import Navbar from './components/Navbar';
import SliderMenu from './components/SliderMenu';
import ShoppingCart from './components/ShoppingCart';
import Content from './components/Content';

function App() {
  const [menuActive, setMenuActive] = useState(false);
  const [overlayActive, setOverlayActive] = useState(false);
  const [cartActive, setCartActive] = useState(false);
  const [shoppingCartItems, setShoppingCartItems] = useState([]);
  const [counter, setCounter] = useState(0);
  const menuItems = ['Collections', 'Men', 'Women', 'About', 'Contact'];

  return (
    <>
      <Navbar
        menuItems={menuItems}
        menuActive={menuActive}
        setMenuActive={setMenuActive}
        overlayActive={overlayActive}
        setOverlayActive={setOverlayActive}
        cartActive={cartActive}
        setCartActive={setCartActive}
        shoppingCartItems={shoppingCartItems}
      />
      <Content
        shoppingCartItems={shoppingCartItems}
        setShoppingCartItems={setShoppingCartItems}
        counter={counter}
        setCounter={setCounter}
      />
    </>
  );
}

export default App;
