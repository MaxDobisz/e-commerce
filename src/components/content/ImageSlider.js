import { useState } from "react";
import styled from "styled-components";
import imagesData from "../../data/images";
import useClickOutside from "../../hooks/useClickOutside";
const StyledImageSlider = styled.div`
    .image-slider {
       
        position: relative; // potrzebne do strzalek
        &__main-img {
      
        }

        &__arrow-button {
            background-color: white;
            border-radius: 50%;
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
        width: 500px;
        
        .image-slider__main-img {
            border-radius: 5%;
            position: relative;
        }

        .image-slider__arrow-button  {
            display: none;
            /* top: 40%;
            border-radius: 50%;
            z-index: 1;
            padding: 2.5em;

            &--previous {
                left: -50px;
           
            } 

            &--next {
                right: -50px;
            }  */
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
            border-radius: 10%;
            overflow: hidden;

            .thumbnail__image {
                border-radius: 10%;
                z-index: 4;
            }

            .thumbnail__image:hover {
                opacity: 0.4;
            }
            
        }

        .image-slider__thumbnails-list {
            justify-content: space-between;
        }

        .selected {
            border-radius: 10%;
            box-shadow: 0 0 0 3px var(--orange);
        }
    }
`

const ImageSlider = ({ setSliderActive }) => {
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


    const nodeRef = useClickOutside(setSliderActive, 'cart');

    return (
        <StyledImageSlider>
            <div className="image-slider">
                    <button className="image-slider__arrow-button image-slider__arrow-button--previous" onClick={() => arrowButtonClickHandler(-1)}>
                        <img className="arrow-button__img" src='./../../../images/icon-previous.svg' alt="white/brownish trainers" />
                    </button>

                <img className="image-slider__main-img" onClick={setSliderActive} src={imagesData[currentImageIndex].url} alt="white/brownish trainers" />

                    <button className="image-slider__arrow-button image-slider__arrow-button--next" onClick={() => arrowButtonClickHandler(1)}>
                        <img className="arrow-button__img" src='./../../../images/icon-next.svg' alt="white/brownish trainers" />
                </button>

                <ul className="image-slider__thumbnails-list">
                    {thumbnails}
                </ul>
            </div>
        </StyledImageSlider>
    )
}

export default ImageSlider;