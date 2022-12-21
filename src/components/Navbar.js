import styled from "styled-components";
import ShoppingCart from "./ShoppingCart";
import SliderMenu from "./SliderMenu";

const StyledNavbar = styled.div`
    .navbar {
        align-items: center;
        color: var(--dark-grayish-blue);
        display: flex;
        gap: 1rem;
        padding: 1.5rem;

        &__navigation {
            display: none;

            .navigation__list {
                display: flex;
                gap: 1rem;
            }
        }

        &__cart-button {
            margin-left: auto;
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

            &__navigation {
                display: block;
            }

            &__user-avatar {
                height: 50px;
            }
        }
    }
`

const Navbar = ({ menuItems, menuActive, setMenuActive, overlayActive, setOverlayActive, cartActive, setCartActive, shoppingCartItems, setShoppingCartItems }) => {
    const hamburgerClickHandler = () => {
        setMenuActive(true);
        setOverlayActive(true);
    }
    const renderNavigationItems = menuItems => menuItems.map(item => <li><p>{item}</p></li>);
    const cartClickHandler = () => setCartActive(cartActive => !cartActive);

    return (
        <StyledNavbar>
            <div className="navbar">
                <button className="navbar__hamburger-button" onClick={hamburgerClickHandler}>
                    <img src="./../../../images/icon-menu.svg" alt="hamburger menu" />
                </button>
                <img src="./../../../images/logo.svg" alt="logo" />
                <nav className="navbar__navigation">
                    <ul className="navigation__list">
                        {renderNavigationItems(menuItems)}
                    </ul>
                </nav>
                <button className="navbar__cart-button" onClick={cartClickHandler}>
                    <img className="cart-button__icon" src="./../../../images/icon-cart.svg" alt="cart" />
                    {shoppingCartItems.length !== 0 ? <p className="cart-button__items-indiactor">{shoppingCartItems.length}</p> : null}
                </button>
                <img className="navbar__user-avatar" src="./../../../images/image-avatar.png" alt="user avatar" />
            </div>
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
        </StyledNavbar>
    )
}

export default Navbar;