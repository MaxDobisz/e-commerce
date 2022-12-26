import styled from "styled-components";
import ImageSlider from "./content/ImageSlider";

const StyledImageSliderFullScreen = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, .5);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
`


const ImageSliderFullScreen = () => {
    return (
        <StyledImageSliderFullScreen>
            <ImageSlider />
        </StyledImageSliderFullScreen>
    )
}

export default ImageSliderFullScreen