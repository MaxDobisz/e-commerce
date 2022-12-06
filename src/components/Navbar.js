import styled from "styled-components";
import { useState } from 'react';

const menuElements = ['Collections', 'Men', 'Women', 'About', 'Contact'];

const renderNavElements = (itemsArr) => {
    return itemsArr.map(item => <li>{item}</li>);
}

const StyledNavbar = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1.5rem;
    
    .shadow-layer {
        background-color: black;
        opacity: 0.5;
        position: absolute;
        z-index: 3;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        display: none;
    }

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
        z-index: 3;
    }

    .navigation__list {
        padding: 0;
        margin: 0;
        list-style-type: none;
    }
`
const Navbar = () => {
    const [menuVisibility, setMenuVisibility] = useState(false);
    const clickHandler = (e) => {
        setMenuVisibility(true)
    }

    return (
        <StyledNavbar className="navbar">
            <div className="shadow-layer"></div>
            <div className="wrapper">
                <button className="hamburger-button hamburger-button--closed" onClick={clickHandler}>
                    <img src="./../../../images/icon-menu.svg" alt="hamburger menu" />
                </button>
                {/* <button className="hamburger-button hamburger-button--open">
                    <img src="./../../../images/icon-close.svg" alt="hamburger menu" />
                </button> */}
                <img src="./../../../images/logo.svg" alt="logo" width="138" height="20" />
            </div>
            <div className="wrapper">
                <img src="./../../../images/icon-cart.svg" alt="cart" width="22" height="20" />
                <img src="./../../../images/image-avatar.png" alt="user avatar" width="22" height="22" />
            </div>
            {menuVisibility && (<nav className="navigation">
                <ul className="navigation__list">
                    {renderNavElements(menuElements)}
                </ul>
            </nav>)}
        </StyledNavbar>
    )
}

export default Navbar;