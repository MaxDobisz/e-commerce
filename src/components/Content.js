import AddToCart from './content/AddToCart';
import ImageSlider from './content/ImageSlider';
import ProductDescription from './content/ProductDescription';
import styled from 'styled-components';
import ImageSliderFullScreen from './content/ImageSliderFullScreen';
import { useContext } from 'react';
import DataContext from '../context/DataContext';


const StyledContent = styled.main`
    @media (min-width: 769px) {
        margin: 4rem 4rem 0;
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr;
        column-gap: 5%;
    }
`

const Content = () => {
    const { sliderActive } = useContext(DataContext);

    return (
        <StyledContent>
            <ImageSlider />
            {sliderActive && <ImageSliderFullScreen />}
            <ProductDescription />
            <AddToCart />
        </StyledContent>
    )
}

export default Content;