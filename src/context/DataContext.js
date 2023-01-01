import { createContext, useState } from 'react';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [menuActive, setMenuActive] = useState(false);
    const [overlayActive, setOverlayActive] = useState(false);
    const [cartActive, setCartActive] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [counter, setCounter] = useState(0);
    const [sliderActive, setSliderActive] = useState(false);

    return (
        <DataContext.Provider value={{ menuActive, setMenuActive, overlayActive, setOverlayActive, cartActive, setCartActive, cartItems, setCartItems, counter, setCounter, sliderActive, setSliderActive }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;