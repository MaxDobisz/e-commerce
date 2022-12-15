import styled from "styled-components";
import { useState } from 'react';
import ShoppingCart from './ShoppingCart';

const StyledNavbar = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1.5rem;
    
    .wrapper {
        display: flex;
        gap: 1rem;
    }

    .hamburger-button {
        margin: auto;
    }

    .hamburger-button--open {
        position: absolute;
        margin-left: 2px;
        margin-top: 3px;
        opacity: 0;
    }

    .navigation {
        position: absolute;
        padding: 3rem 1.3rem;
        top: 0;
        left: 0;
        background-color: white;
        height: 100%;
    }

    .navigation__list {
        padding: 0;
        margin: 0;
        list-style-type: none;
    }
`
const Navbar = ({ setMenuActive, setOverlayActive, cartActive, setCartActive }) => {
    const hamburgerClickHandler = (e) => {
        setMenuActive(true);
        setOverlayActive(true);
    }

    const cartClickHandler = () => {
        setCartActive(cartActive => !cartActive)
        // cartActive ? setCartActive(false) : setCartActive(true);
    }

    const renderNavElements = (itemsArr) => {
        return itemsArr.map(item => <li>{item}</li>);
    }

    return (
        <StyledNavbar className="navbar">
            <div className="wrapper">
                <button className="hamburger-button hamburger-button--closed" onClick={hamburgerClickHandler}>
                    <img src="./../../../images/icon-menu.svg" alt="hamburger menu" />
                </button>
                <img src="./../../../images/logo.svg" alt="logo" width="138" height="20" />
            </div>
            {/* {menuVisibility && (<nav className="navigation">
                <ul className="navigation__list">
                    {renderNavElements(menuElements)}
                </ul>
            </nav>
            )} */}




            <div className="wrapper">
                <button onClick={cartClickHandler}>
                    <img src="./../../../images/icon-cart.svg" alt="cart" width="22" height="20" className="cart" />
                </button>
                <img src="./../../../images/image-avatar.png" alt="user avatar" width="22" height="22" />
            </div>

        </StyledNavbar>
    )
}

export default Navbar;