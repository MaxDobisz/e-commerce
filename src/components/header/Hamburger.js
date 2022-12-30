import styled from "styled-components";
import SliderMenu from "./SliderMenu";

const StyledHamburger = styled.div`
    margin-top: auto;
    
    @media(min-width: 769px) {
        display: none;
    }
`

const Hamburger = (props) => {
    const handleHamburgerClick = () => {
        props.setMenuActive(true);
        props.setOverlayActive(true);
    }

    return (
        <StyledHamburger>
            <button onClick={handleHamburgerClick}>
                <img className="hamburger__img" src="./../../../images/icon-menu.svg" alt="hamburger menu" />
            </button>
            <SliderMenu {...props} />
        </StyledHamburger>
    )
}

export default Hamburger;