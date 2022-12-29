import styled from 'styled-components';
import Counter from '../reusable/Counter';
import ProductPrice from './ProductPrice';

const StyledAddToCart = styled.div`
        margin: 1.5rem;
    `

const AddToCart = ({ cartItems, setCartItems, counter, setCounter }) => {
    const addToCartClickHandler = () => {
        setCounter(0);

        if (counter !== 0) {
            setCartItems([...cartItems, {
                name: 'Fall Limited Edition Sneakers',
                price: 125,
                amount: counter,
                id: cartItems.length + 1
            }]);
        }
    }

    return (
        <StyledAddToCart>
            <ProductPrice />
            <Counter counter={counter} setCounter={setCounter} addToCartClickHandler={addToCartClickHandler} />
        </StyledAddToCart>
    )
}

export default AddToCart;