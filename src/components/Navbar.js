import styled from "styled-components";
import ShoppingCart from "./ShoppingCart";
import SliderMenu from "./SliderMenu";
import Button from "./reusable/button"
import Navigation from "./Navigation";

const StyledNavbar = styled.div`

    .navbar {
        align-items: center;
        color: var(--dark-grayish-blue);
        display: flex;
        gap: 1rem;
        padding: 1.5rem;

        &__logo {
             margin-right: auto;
        }

        &__cart-button {
            position: relative;

            .cart-button__items-indiactor {
                background-color: var(--orange);;
                border-radius: 10px;
                color: white;
                font-size: .6rem;
                left: 50%;
                padding: .1em .7em;
                position: absolute;
                top: -20%;
            } 
        }

        &__user-avatar {
            height: 25px;
        }
    }

    @media (min-width: 800px){
        .navbar {
            border-bottom: 2px solid var(--grayish-blue);
            gap: 2rem;

            &__hamburger-button {
                display: none;
            }

            &__user-avatar {
                height: 50px;
            }
        }
    }
`

const Navbar = ({ menuActive, setMenuActive, overlayActive, setOverlayActive, cartActive, setCartActive, shoppingCartItems, setShoppingCartItems, menuItems }) => {
    const hamburgerClickHandler = () => {
        setMenuActive(true);
        setOverlayActive(true);
    }

    const cartClickHandler = () => setCartActive(cartActive => !cartActive);


    return (
        <StyledNavbar>
            <div className="navbar">
                <Button handleClick={hamburgerClickHandler}>
                    <img src="./../../../images/icon-menu.svg" alt="hamburger menu" />
                </Button>
                <img className="navbar__logo" src="./../../../images/logo.svg" alt="logo" />
                <Navigation />
                <Button handleClick={cartClickHandler}>
                    <img className="cart-button__icon" src="./../../../images/icon-cart.svg" alt="cart" />
                    {shoppingCartItems.length !== 0 ? <p className="cart-button__items-indiactor">{shoppingCartItems.length}</p> : null}
                </Button>
                <img className="navbar__user-avatar" src="./../../../images/image-avatar.png" alt="user avatar" />

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
                    shoppingCartItems={shoppingCartItems}
                    setShoppingCartItems={setShoppingCartItems}
                /> : null}
            </div>
        </StyledNavbar>
    )
}

export default Navbar;