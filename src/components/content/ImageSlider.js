import { useState } from "react";
import styled from "styled-components";

const imagesData = [
    {
        id: 1,
        url: './../../../images/image-product-1.jpg',
        alt: 'white/brownish trainers',
    },
    {
        id: 2,
        url: './../../../images/image-product-2.jpg',
        alt: 'white/brownish trainers',
    },
    {
        id: 3,
        url: './../../../images/image-product-3.jpg',
        alt: 'white/brownish trainers',
    },
    {
        id: 4,
        url: './../../../images/image-product-4.jpg',
        alt: 'white/brownish trainers',
    },
]

const StyledImageSlider = styled.div`


    .image-slider {
        position: relative;

        &__arrow-button {
            background-color: white;
            border-radius: 25px;
            margin: 0 1em;
            padding: 1em;
            top: calc(50% - 7px - .6em);
            position: absolute;

            &--previous {
                left: 0;
                padding-right: 1.2em;
            } 

            &--next {
                right: 0;
                padding-left: 1.2em;
            } 

            .arrow-button__img {
                height: 1rem ;
            }
        } 
    }

    @media(min-width: 800px) {
        grid-row: 1/3;
        grid-column: 1/2;
    }
`

const ImageSlider = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const arrowButtonClickHandler = nextImage => {
        if (currentImage + nextImage < imagesData.length && currentImage + nextImage >= 0) {
            setCurrentImage(currentImage => currentImage + nextImage)
        }
    }

    return (
        <StyledImageSlider>
            <div className="image-slider">
                <button className="image-slider__arrow-button image-slider__arrow-button--previous" onClick={() => arrowButtonClickHandler(-1)}>
                    <img className="arrow-button__img" src='./../../../images/icon-previous.svg' alt="white/brownish trainers" />
                </button>
                <img src={imagesData[currentImage].url} alt="white/brownish trainers" />
                <button className="image-slider__arrow-button image-slider__arrow-button--next" onClick={() => arrowButtonClickHandler(1)}>
                    <img className="arrow-button__img" src='./../../../images/icon-next.svg' alt="white/brownish trainers" />
                </button>
            </div>
        </StyledImageSlider>
    )
}

export default ImageSlider;