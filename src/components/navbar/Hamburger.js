import styled from "styled-components";
import SliderMenu from "./SliderMenu";
import { useContext } from "react";
import DataContext from "../../context/DataContext";

const StyledHamburger = styled.div`
    margin-top: auto;
    
    @media(min-width: 769px) {
        display: none;
    }
`

const Hamburger = () => {
    const { setMenuActive, setOverlayActive } = useContext(DataContext)
    const handleHamburgerClick = () => {
        setMenuActive(true);
        setOverlayActive(true);
    }

    return (
        <StyledHamburger>
            <button onClick={handleHamburgerClick}>
                <img className="hamburger__img" src="./../../../images/icon-menu.svg" alt="hamburger menu" />
            </button>
            <SliderMenu />
        </StyledHamburger>
    )
}

export default Hamburger;