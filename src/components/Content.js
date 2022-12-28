import AddToCart from './content/AddToCart';
import PhotoSlider from './content/ImageSlider';
import ProductDescription from './content/ProductDescription';
import styled from 'styled-components';
import ImageSliderFullScreen from './content/ImageSliderFullScreen';
import { useState } from 'react';


const StyledContent = styled.main`
    @media (min-width: 800px) {
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr;
        column-gap: 10%;
    }
`

const Content = (props) => {
    const [sliderActive, setSliderActive] = useState(true);

    return (
        <StyledContent>
            {/* <PhotoSlider {...props} /> */}
            {sliderActive && <ImageSliderFullScreen {...props} />}
            {/* <ProductDescription />
            <AddToCart {...props} /> */}
        </StyledContent>
    )
}

export default Content;