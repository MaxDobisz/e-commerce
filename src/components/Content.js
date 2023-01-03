import { useContext } from 'react';
import styled from 'styled-components';
import AddToCart from './content/AddToCart';
import ImageSlider from './content/ImageSlider';
import ProductDescription from './content/ProductDescription';
import ImageSliderFullScreen from './content/ImageSliderFullScreen';
import DataContext from '../context/DataContext';

const StyledContent = styled.div`
    @media (min-width: 769px) {
        .content {
            column-gap: 5%;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            margin: 4rem 4rem 0;
        }
    }
`

const Content = () => {
    const { sliderActive } = useContext(DataContext);

    return (
        <StyledContent>
            <main className='content'>
                <ImageSlider />
                {sliderActive && <ImageSliderFullScreen />}
                <ProductDescription />
                <AddToCart />
            </main>
        </StyledContent>
    );
}

export default Content;