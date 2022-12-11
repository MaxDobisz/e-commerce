import { useState } from "react";
import styled from "styled-components";

const StyledImageSlider = styled.div`
    width: 100%;
    height: 300px;
    
    .picture-wrapper {
        position: relative;
    }

    .arrow-button {
        background-color: white;
        border-radius: 50%;
        margin: 0 1em;
        padding: 1em;
        top: calc(50% - 7px - .6em);
        position: absolute;
        cursor: pointer;

        &--previous {
            left: 0;
        } 

        &--next {
            right: 0;
        } 
    } 

    .arrow-image {
        height: .7rem ;
        position: relative;

        &--previous {
            left: -.1em;
        }

        &--next {
            left: .1em;
        }
    }
`

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


const ImageSlider = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const clickHandler = (e) => {
        if (e.currentTarget.className.includes('previous') && currentImage !== 0) {
            setCurrentImage(currentImage - 1);
        } else if (e.currentTarget.className.includes('next') && imagesData.length !== currentImage + 1) {
            setCurrentImage(currentImage + 1);
        }
    }

    return (
        <StyledImageSlider>
            <div className="picture-wrapper">
                <button className="arrow-button arrow-button--previous" onClick={clickHandler}>
                    <img className="arrow-image arrow-image--previous" src='./../../../images/icon-previous.svg' alt="white/brownish trainers" />
                </button>
                <img className="zdjecie" src={imagesData[currentImage].url} alt="white/brownish trainers" />
                <button className="arrow-button arrow-button--next" onClick={clickHandler}>
                    <img className="arrow-image arrow-image--next" src='./../../../images/icon-next.svg' alt="white/brownish trainers" />
                </button>
            </div>
        </StyledImageSlider>
    )
}

export default ImageSlider;