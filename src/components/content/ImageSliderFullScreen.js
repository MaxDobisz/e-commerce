import styled from "styled-components";
import { useContext } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import ImageSlider from "./ImageSlider";
import DataContext from "../../context/DataContext";

const StyledImageSliderFullScreen = styled.div`
    display: none;
    
    @media(min-width: 769px) {
        align-items: center;
        background-color: rgba(0,0,0,.7);
        display: flex;
        height: 100%;
        justify-content: center;
        left: 0;
        overflow: hidden;
        position: fixed;
        top: 0;
        width: 100%;

        .image-slider-fs {
            width: 30%;

            &__close-button {
                display: block;
                margin-bottom: 1rem;
                margin-left: auto;

                .close-button__img {
                    filter: invert(100%) sepia(0%) saturate(7496%) hue-rotate(86deg) brightness(115%) contrast(103%);
                    width: 1.5rem;

                    &:hover {
                        filter: invert(52%) sepia(61%) saturate(1435%) hue-rotate(347deg) brightness(100%) contrast(101%);;
                    }
                }
            } 
        }

        .image-slider {
            &__main-img {
                border-radius: 10px;
                cursor: default;
            }

            &__arrow {
                display: block;

                &--previous {
                    left: 0;
                    transform: translate(-50%, -50%);
                } 

                &--next {
                    right: 0;
                    transform: translate(50%, -50%);
                }

                &:hover .image-slider__arrow--img {
                    filter: invert(52%) sepia(61%) saturate(1435%) hue-rotate(347deg) brightness(100%) contrast(101%);
                }
            }

            &__thumbnails-list {
                justify-content: space-around;
                margin: 0 2rem;
            }
        }
    }
`
const ImageSliderFullScreen = () => {
    const { setSliderActive } = useContext(DataContext);
    const nodeRef = useClickOutside(setSliderActive, 'cart');
    const handleCloseButtonClick = () => setSliderActive(false);

    return (
        <StyledImageSliderFullScreen>
            <div className="image-slider-fs" ref={nodeRef}>
                <button className="image-slider-fs__close-button" onClick={handleCloseButtonClick}>
                    <img className="close-button__img" src='./../../../images/icon-close.svg' alt="close" />
                </button>
                <ImageSlider />
            </div>
        </StyledImageSliderFullScreen>
    );
}

export default ImageSliderFullScreen