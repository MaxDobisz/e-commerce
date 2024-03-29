import styled from "styled-components";
import { useState, useContext } from "react";
import imagesData from "../../data/images";
import DataContext from "../../context/DataContext"

const StyledImageSlider = styled.div`
    .image-slider {
        &__main-img-wrapper{
            position: relative;
        }

        &__arrow {
            background-color: white;
            border-radius: 50%;
            padding: 1em;
            position: absolute;
            top: 50%;

            &--previous {
                left: 0;
                padding-right: 1.2em;
                transform: translate(50%,-50%);
            } 

            &--next {
                padding-left: 1.2em;
                right: 0;
                transform: translate(-50%,-50%);
            } 
        } 

        &__thumbnails-list {
            display: none;
        }
    } 

    @media(min-width: 769px) {
        grid-column: 1/2;
        grid-row: 1/3;
        
        .image-slider {
            &__arrow {
                display: none;
            }

            &__main-img {
                border-radius: 10px;
                cursor: pointer;
            }

            &__thumbnails-list {
                display: flex;
                justify-content: space-between;
                padding: 2rem 0;
            }

            &__thumbnail {
                background-color: white;
                border-radius: 10px;
                overflow: hidden;
                width: 20%;
                
                &--selected {
                    border-radius: 10px;
                    box-shadow: 0 0 0 3px var(--orange);
                    
                    .thumbnail__image {
                        opacity: 0.4;
                    }
                }

                .thumbnail__button {
                    display: block;
                }

                .thumbnail__image {
                    border-radius: 10px;
                    z-index: 4;

                    &:hover {
                        opacity: 0.4;
                    }
                }
            }    
        }
    }
`

const ImageSlider = () => {
    const { setSliderActive } = useContext(DataContext);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleMainImgClick = () => {
        setSliderActive(true);
    }

    const handleArrowClick = nextImage => {
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
            <li key={img.id} className={`image-slider__thumbnail ${imagesData.indexOf(img) === currentImageIndex ? 'image-slider__thumbnail--selected' : null}`}>
                <button className="thumbnail__button" onClick={() => handleThumbnailClick(imagesData.indexOf(img))}>
                    <img className="thumbnail__image" src={img.url} alt="white/brownish trainers" />
                </button>
            </li>
        );
    });

    return (
        <StyledImageSlider>
            <div className="image-slider">
                <div className="image-slider__main-img-wrapper">
                    <button className="image-slider__arrow image-slider__arrow--previous" onClick={() => handleArrowClick(-1)}>
                        <img className="image-slider__arrow--img" src='./../../../images/icon-previous.svg' alt="white/brownish trainers" />
                    </button>
                    <img className="image-slider__main-img" onClick={handleMainImgClick} src={imagesData[currentImageIndex].url} alt="white/brownish trainers" />
                    <button className="image-slider__arrow image-slider__arrow--next" onClick={() => handleArrowClick(1)}>
                        <img className="image-slider__arrow--img" src='./../../../images/icon-next.svg' alt="white/brownish trainers" />
                    </button>
                </div>
                <ul className="image-slider__thumbnails-list">
                    {thumbnails}
                </ul>
            </div>
        </StyledImageSlider>
    );
}

export default ImageSlider;