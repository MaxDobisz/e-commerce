import styled from "styled-components";
import useClickOutside from "../../hooks/useClickOutside";
import menuItems from "../../data/navigationItems";
import { useContext } from "react";
import DataContext from "../../context/DataContext";

const StyledSliderMenu = styled.div`
        .menu {
            color: black;
            background-color: white;
            height: 100vh;
            left: -60%;
            padding: 1.8rem 1rem;
            position: fixed;
            top: 0vh;
            transition: 400ms ease;
            width: 60%;
            z-index: 2;
        }

        .menu--active {
            left: 0;
        }

        .menu__items-list {
            margin-top: 2rem;
            display: flex;
            flex-direction: column;
            gap: 1.5em;
        }

        .menu__item {
            font-weight: 800;
            font-size: 1.2rem;
        }

        .overlay {
            background-color: rgba(0,0,0,0);
            height: 100vh;
            left: -120%;
            position: fixed;
            top: 0;
            width: 100vw;
            z-index: 1;
        }

        .overlay--active {
            background-color: rgba(0,0,0,.5);
            transition: background-color 400ms linear;
            left: 0;
        }
    `

const SliderMenu = () => {
    const { setMenuActive, setOverlayActive, menuActive, overlayActive } = useContext(DataContext)
    const renderMenuItems = menuItems.map(item => <li key={item} className="menu__item">{item}</li>);

    const hamburgerClickHandler = () => {
        setMenuActive(false);
        setOverlayActive(false);
    }

    const overlayClickHandler = () => {
        setOverlayActive(false);
    }

    const sliderRef = useClickOutside(setMenuActive);

    return (
        <StyledSliderMenu>
            <nav className={`menu ${menuActive && 'menu--active'}`} ref={sliderRef}>
                <button onClick={hamburgerClickHandler}>
                    <img src="./../../../images/icon-close.svg" alt="hamburger menu" />
                </button>
                <ul className="menu__items-list">
                    {renderMenuItems}
                </ul>
            </nav>
            <div className={`overlay ${overlayActive ? 'overlay--active' : ''}`} onClick={overlayClickHandler}></div>
        </StyledSliderMenu>
    );
}

export default SliderMenu;