import styled from "styled-components";
import Navigation from "./header/Navigation";
import Hamburger from "./header/Hamburger";
import Cart from "./header/Cart";

const StyledNavbar = styled.div`
    position: relative;
    padding: 1.5rem 1rem;

    .navbar {
        align-items: center;
        color: var(--dark-grayish-blue);
        display: flex;
        gap: 1rem;
    
        &__cart-button {
            position: relative;
        }

        &__user-avatar {
            height: 25px;
            cursor: pointer;
        }
    }

    @media (min-width: 800px){
        margin-bottom: 4rem;
        border-bottom: 2px solid var(--grayish-blue);
        margin: 0 1rem;
        padding: 0;

        .navbar {
            gap: 2rem;

            &__user-avatar {
                height: 35px;

                &:hover {
                    border: 3px solid var(--orange);
                    border-radius: 25px;
                }
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