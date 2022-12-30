import AddToCart from './content/AddToCart';
import ImageSlider from './content/ImageSlider';
import ProductDescription from './content/ProductDescription';
import styled from 'styled-components';
import ImageSliderFullScreen from './content/ImageSliderFullScreen';

const StyledContent = styled.main`
    @media (min-width: 769px) {
        margin: 4rem 4rem 0;
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr;
        column-gap: 5%;
    }
`

const Content = (props) => {
    return (
        <StyledContent>
            <ImageSlider {...props} />
            {props.sliderActive && <ImageSliderFullScreen {...props} />}
            <ProductDescription />
            <AddToCart {...props} />
        </StyledContent>
    )
}

export default Content;