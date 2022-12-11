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

    

    .arrow-button--previous {
        left: 0;
    }

    .arrow-button--next {
        right: 0;
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


    return (
        <StyledImageSlider>
            <div className="picture-wrapper">
                <button className="arrow-button arrow-button--previous">
                    <img className="arrow-image arrow-image--previous" src='./../../../images/icon-previous.svg' alt="white/brownish trainers" />
                </button>
                <img className="zdjecie" src={imagesData[currentImage].url} alt="white/brownish trainers" />
                <button className="arrow-button arrow-button--next">
                    <img className="arrow-image arrow-image--next" src='./../../../images/icon-next.svg' alt="white/brownish trainers" />
                </button>

                {/* <img className="arrow" src='./../../../images/icon-next.svg' alt="white/brownish trainers" /> */}
            </div>

        </StyledImageSlider>
    )
}

export default ImageSlider;