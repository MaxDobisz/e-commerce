import { useState } from "react";
import styled from "styled-components";
import useClickOutside from "../../hooks/useClickOutside";
import ImageSlider from "./ImageSlider";

const StyledImageSliderFullScreen = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,.7);

    .image-slider-fs {
        width: 30%;
    }
    
    .image-slider__thumbnails-list {
        justify-content: space-around;
        margin: 0 2rem;
    }

    .image-slider-full-screen__close {
        display: block;
        margin-left: auto;
        margin-bottom: 1rem;

        .close__img {
            width: 1.5rem;
            filter: invert(100%) sepia(0%) saturate(7496%) hue-rotate(86deg) brightness(115%) contrast(103%);
        }

        .close__img:hover {
            filter: invert(52%) sepia(61%) saturate(1435%) hue-rotate(347deg) brightness(100%) contrast(101%);;
        }
    } 
`
const ImageSliderFullScreen = ({ setSliderActive }) => {
    // const [sliderActive, setSliderActive] = useState(true);

    const nodeRef = useClickOutside(setSliderActive, 'cart');

    return (
        <StyledImageSliderFullScreen>
            <div className="image-slider-fs" ref={nodeRef}>
                <button className="image-slider-full-screen__close" onClick={() => setSliderActive(false)}>
                    <img className="close__img" src='./../../../images/icon-close.svg' alt="close" />
                </button>
                <ImageSlider />
            </div>
        </StyledImageSliderFullScreen>
    )
}

export default ImageSliderFullScreen