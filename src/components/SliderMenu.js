import styled from "styled-components";

const StyledSliderMenu = styled.div`
        .menu {
            background-color: white;
            border: 2px solid red;
            height: 100vh;
            left: -60%;
            padding: 1rem;
            position: fixed;
            top: 0vh;
            transition: 400ms ease;
            width: 60%;
            z-index: 2;
        }

        .menu--active {
            left: 0;
        }

        .overlay {
            background-color: rgba(0,0,0,0);
            height: 100vh;
            left: -100%;
            position: fixed;
            top: 0;
            transition: background-color 400ms linear;
            width: 100vw;
            z-index: 1;
        }

        .overlay--active {
            background-color: rgba(0,0,0,.5);
            left: 0;
        }
    `

const SliderMenu = ({ menuActive, setMenuActive, overlayActive, setOverlayActive, menuItems }) => {
    const renderMenuItems = menuItems.map(item => <ul>{item}</ul>);
    const clickHandler = () => {
        setMenuActive(false);
        setOverlayActive(false);
    }

    return (
        <StyledSliderMenu>
            <nav className={`menu ${menuActive && 'menu--active'}`}>
                <button /* className="hamburger-button hamburger-button--closed"  */ onClick={clickHandler}>
                    <img src="./../../../images/icon-close.svg" alt="hamburger menu" />
                </button>
                <ul>
                    {renderMenuItems}
                </ul>
            </nav>
            <div className={`overlay ${overlayActive ? 'overlay--active' : ''}`}></div>
        </StyledSliderMenu>
    );
}

export default SliderMenu;