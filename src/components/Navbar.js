import styled from "styled-components";
import Navigation from "./header/Navigation";
import Hamburger from "./header/Hamburger";
import Cart from "./header/Cart";

const StyledNavbar = styled.div`
    position: relative;
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

const Navbar = (props) => {
    return (
        <StyledNavbar>
            <div className="navbar">
                <Hamburger {...props} />
                <img className="navbar__logo" src="./../../../images/logo.svg" alt="logo" />
                <Navigation />
                <Cart {...props} />
                <img className="navbar__user-avatar" src="./../../../images/image-avatar.png" alt="user avatar" />
            </div>
        </StyledNavbar>
    )
}

export default Navbar;