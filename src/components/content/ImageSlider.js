import { useState } from "react";
import styled from "styled-components";
import imagesData from "../../data/images";

const StyledImageSlider = styled.div`
    .image-slider {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
        margin: 0 auto;

        &__main-img {
            border-radius: 30px;
            position: relative;
            width:100%;
           
        }

        &__arrow-button {
            background-color: white;
            border-radius: 25px;
            margin: 0 1em;
            padding: 1em;
            top: calc(50% - 1em);
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

    .image-slider__thumbnails-list {
        display: none;
    }


    @media(min-width: 800px) {
        grid-row: 1/3;
        grid-column: 1/2;
        margin: 0 auto;

        .image-slider__main-img {
            
            border-radius: 30px;
            position: relative;
        }

        .thumbnail__button {
            display: block;
        }

        .image-slider__thumbnails-list {
            display: flex;
            justify-content: space-around;
            padding: 1rem 0;
        }

        .image-slider__thumbnail {
            width: 20%;
            border-radius: 10px;
            overflow: hidden;

            .thumbnail__image {
                border-radius: 30px;
                z-index: 4;
            }

            .thumbnail__image:hover {
                opacity: 0.4;
            }
            
        }
        .selected {
            border-radius: 30px;
                box-shadow: 0 0 0 3px var(--orange);
            }
    }
`

const ImageSlider = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const arrowButtonClickHandler = nextImage => {
        setCurrentImageIndex(currentIndex => {
            const newIndex = currentIndex + nextImage;
            if (newIndex < 0 || newIndex === imagesData.length) {
                return currentIndex;
            }
            return newIndex;
        });
    };

    const handleThumbnailClick = index => setCurrentImageIndex(index);

    const thumbnails = imagesData.map(img => {
        return (
            <li className={`image-slider__thumbnail ${imagesData.indexOf(img) === currentImageIndex ? 'selected' : null}`} >
                <button className="thumbnail__button" onClick={() => handleThumbnailClick(imagesData.indexOf(img))}>
                    <img className="thumbnail__image" src={img.url} alt="white/brownish trainers" />
                </button>
            </li>
        )
    })

    const displayFullSCreen = () => {

    }

    return (
        <StyledImageSlider>
            <div className="image-slider">


                <div className="image-slider__main-img">
                    <button className="image-slider__arrow-button image-slider__arrow-button--previous" onClick={() => arrowButtonClickHandler(-1)}>
                        <img className="arrow-button__img" src='./../../../images/icon-previous.svg' alt="white/brownish trainers" />
                    </button>

                    <img clas onClick={displayFullSCreen} src={imagesData[currentImageIndex].url} alt="white/brownish trainers" />

                    <button className="image-slider__arrow-button image-slider__arrow-button--next" onClick={() => arrowButtonClickHandler(1)}>
                        <img className="arrow-button__img" src='./../../../images/icon-next.svg' alt="white/brownish trainers" />
                    </button>
                </div>





                <ul className="image-slider__thumbnails-list">
                    {thumbnails}
                </ul>
            </div>
        </StyledImageSlider>
    )
}

export default ImageSlider;