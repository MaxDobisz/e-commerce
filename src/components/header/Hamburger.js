import styled from "styled-components";
import Button from "./../reusable/button";
import SliderMenu from "./SliderMenu";

const StyledHamburger = styled.div`
    @media(min-width: 800px) {
        display: none;
    }
`

const Hamburger = (props) => {
    const hamburgerClickHandler = () => {
        props.setMenuActive(true);
        props.setOverlayActive(true);
    }

    return (
        <StyledHamburger>
            <Button handleClick={hamburgerClickHandler}>
                <img src="./../../../images/icon-menu.svg" alt="hamburger menu" />
            </Button>
            <SliderMenu {...props} />
        </StyledHamburger>
    )
}

export default Hamburger;