import { useState } from 'react';
// import AddToCart from './components/AddToCart';
// import Navbar from './components/Navbar';
import PhotoSlider from './components/ImageSlider';
// import ProductDescription from './components/ProductDescription';
// import SliderMenu from './components/SliderMenu';


function App() {
  const [menuActive, setMenuActive] = useState(false);
  const [overlayActive, setOverlayActive] = useState(false);

  const menuItems = ['Collections', 'Men', 'Women', 'About', 'Contact'];

  return (
    <>
      <PhotoSlider />
      {/* <Navbar
        setMenuActive={setMenuActive}
        setOverlayActive={setOverlayActive}
      />
      <SliderMenu
        menuActive={menuActive}
        setMenuActive={setMenuActive}
        overlayActive={overlayActive}
        setOverlayActive={setOverlayActive}
        menuItems={menuItems}
      /> */}


      {/* <PhotoSlider />
      <ProductDescription />
      <AddToCart /> */}
    </>
  );
}

export default App;
