import { useState } from "react";
import styled from "styled-components";
import imagesData from "../../data/images";

const StyledImageSlider = styled.div`
    .image-slider {
        position: relative; // potrzebne do strzalek

        &__arrow {
            background-color: white;
            border-radius: 50%;
            margin: 0 1em;
            padding: 1em;
            position: absolute;
            top: calc(50% - 1em);

            &--previous {
                left: 0;
                padding-right: 1.2em;
            } 

            &--next {
                right: 0;
                padding-left: 1.2em;
            } 

            /* .imgae-slider__arrow--img {
                height: 1rem ;
            } */
        } 

        &__thumbnails-list {
            display: none;
        }
    } 

    @media(min-width: 800px) {
        grid-row: 1/3;
        grid-column: 1/2;
        
        /* margin: 0 auto; */
        /* width: 500px;  reacze nie potrzebuje tego bo grid mi trzyma rozmiar*/
        
        .image-slider {
            &__arrow {
                display: none;
            }

            &__main-img {
                border-radius: 3%;
            }

            &__thumbnails-list {
                display: flex;
                justify-content: space-between;
                padding: 2rem 0;
            }

            &__thumbnail {
                background-color: white;
                width: 20%;
                border-radius: 10%;
                overflow: hidden;
                
                &--selected {
                    border-radius: 10%;
                    box-shadow: 0 0 0 3px var(--orange);
                    
                    .thumbnail__image {
                        opacity: 0.4;
                    }
                }

                .thumbnail__button {
                    display: block;
                }

                .thumbnail__image {
                    border-radius: 10%;
                    z-index: 4;

                    &:hover {
                        opacity: 0.4;
                    }
                }
            }    
        }
    }
`

const ImageSlider = ({ handleMainImgClick }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
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
            <li className={`image-slider__thumbnail ${imagesData.indexOf(img) === currentImageIndex ? 'image-slider__thumbnail--selected' : null}`}>
                <button className="thumbnail__button" onClick={() => handleThumbnailClick(imagesData.indexOf(img))}>
                    <img className="thumbnail__image" src={img.url} alt="white/brownish trainers" />
                </button>
            </li>
        );
    });

    return (
        <StyledImageSlider>
            <div className="image-slider">
                <button className="image-slider__arrow image-slider__arrow--previous" onClick={() => handleArrowClick(-1)}>
                    <img className="imgae-slider__arrow--img" src='./../../../images/icon-previous.svg' alt="white/brownish trainers" />
                </button>
                <img className="image-slider__main-img" onClick={handleMainImgClick} src={imagesData[currentImageIndex].url} alt="white/brownish trainers" />
                <button className="image-slider__arrow image-slider__arrow--next" onClick={() => handleArrowClick(1)}>
                    <img className="image__arrow--img" src='./../../../images/icon-next.svg' alt="white/brownish trainers" />
                </button>
                <ul className="image-slider__thumbnails-list">
                    {thumbnails}
                </ul>
            </div>
        </StyledImageSlider>
    );
}

export default ImageSlider;