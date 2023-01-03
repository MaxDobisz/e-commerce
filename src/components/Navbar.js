import styled from "styled-components";
import Navigation from "./navbar/Navigation";
import Hamburger from "./navbar/Hamburger";
import Cart from "./navbar/Cart";

const StyledNavbar = styled.div`
    padding: 1.5rem 1rem;
    position: relative;

    .navbar {
        align-items: center;
        color: var(--dark-grayish-blue);
        display: flex;
        gap: 1rem;
    
        &__cart-button {
            position: relative;
        }

        &__user-avatar {
            cursor: pointer;
            height: 25px;
        }
    }

    @media (min-width: 769px){
        border-bottom: 2px solid var(--grayish-blue);
        margin-bottom: 4rem;
        margin: 0 1rem;
        padding: 0;

        .navbar {
            gap: 2rem;

            &__user-avatar {
                height: 35px;

                &:hover {
                    border-radius: 25px;
                    border: 3px solid var(--orange);
                }
            }
        }
    }
`

const Navbar = () => {
    return (
        <StyledNavbar>
            <header className="navbar">
                <Hamburger />
                <img className="navbar__logo" src="./../../../images/logo.svg" alt="logo" />
                <Navigation />
                <Cart />
                <img className="navbar__user-avatar" src="./../../../images/image-avatar.png" alt="user avatar" />
            </header>
        </StyledNavbar>
    );
}

export default Navbar;