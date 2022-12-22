import { useState } from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';
import menuItems from './data/navigationItems';

function App() {
  const [menuActive, setMenuActive] = useState(false);
  const [overlayActive, setOverlayActive] = useState(false);
  const [cartActive, setCartActive] = useState(false);
  const [shoppingCartItems, setShoppingCartItems] = useState([]);
  const [counter, setCounter] = useState(0);


  return (
    <>
      <Navbar
        menuActive={menuActive}
        setMenuActive={setMenuActive}
        overlayActive={overlayActive}
        setOverlayActive={setOverlayActive}
        cartActive={cartActive}
        setCartActive={setCartActive}
        shoppingCartItems={shoppingCartItems}
        setShoppingCartItems={setShoppingCartItems}
        menuItems={menuItems}
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
