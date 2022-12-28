import { useState } from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';

function App() {
  const [menuActive, setMenuActive] = useState(false);
  const [overlayActive, setOverlayActive] = useState(false);
  const [cartActive, setCartActive] = useState(false);
  const [cartItems, setCartItems] = useState([]);
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
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
      <Content
        cartItems={cartItems}
        setCartItems={setCartItems}
        counter={counter}
        setCounter={setCounter}

      />
    </>
  );
}

export default App;
