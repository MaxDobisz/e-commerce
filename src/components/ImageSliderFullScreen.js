import styled from "styled-components";
import useClickOutside from "../hooks/useClickOutside";
import ImageSlider from "./content/ImageSlider";

const StyledImageSliderFullScreen = styled.div`
display: flex;
justify-content: center;
align-items: center;
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, .7);
    width: 100%;
    height: 100%;
    z-index: 2;
    

    .image-slider-full-screen__close {
        position: absolute;
        color: white;
        z-index: 1;
        top: 7%;
        left: 66%;
        font-size: 2rem;
    }

    .image-slider__thumbnails-list {
            justify-content: space-around;
        }
`
const ImageSliderFullScreen = ({ setSliderActive }) => {
    const nodeRef = useClickOutside(setSliderActive, 'cart');

    return (
        <StyledImageSliderFullScreen>
            <div className="image-slider-fs" ref={nodeRef}>
                <button className="image-slider-full-screen__close" onClick={() => setSliderActive(false)}>x</button>
                <ImageSlider />
            </div>

        </StyledImageSliderFullScreen>
    )
}

export default ImageSliderFullScreen