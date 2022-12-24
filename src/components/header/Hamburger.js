import Button from "./../reusable/button";
import SliderMenu from "./SliderMenu";

const Hamburger = (props) => {
    const hamburgerClickHandler = () => {
        props.setMenuActive(true);
        props.setOverlayActive(true);
    }

    // const cartClickHandler = () => props.setCartActive(cartActive => !cartActive);

    return (
        <>
            <Button handleClick={hamburgerClickHandler}>
                <img src="./../../../images/icon-menu.svg" alt="hamburger menu" />
            </Button>
            <SliderMenu {...props} />
        </>
    )
}

export default Hamburger;