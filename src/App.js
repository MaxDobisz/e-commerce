import { useState } from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';
import ImageSlider from './components/content/ImageSlider';
import ImageSliderFullScreen from './components/ImageSliderFullScreen'

function App() {
  const [menuActive, setMenuActive] = useState(false);
  const [overlayActive, setOverlayActive] = useState(false);
  const [cartActive, setCartActive] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [counter, setCounter] = useState(0);
  const [sliderActive, setSliderActive] = useState(true);



  return (
    <>
      {/* <Navbar
        menuActive={menuActive}
        setMenuActive={setMenuActive}
        overlayActive={overlayActive}
        setOverlayActive={setOverlayActive}
        cartActive={cartActive}
        setCartActive={setCartActive}
        cartItems={cartItems}
        setCartItems={setCartItems}
      /> */}
      {sliderActive && <ImageSliderFullScreen />}
      {/* <Content
        cartItems={cartItems}
        setCartItems={setCartItems}
        counter={counter}
        setCounter={setCounter}
      /> */}
    </>
  );
}

export default App;
