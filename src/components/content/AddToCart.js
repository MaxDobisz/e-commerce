import styled from 'styled-components';
import Counter from '../reusable/Counter';
import ProductPrice from './ProductPrice';
import { useContext } from "react";
import DataContext from "../../context/DataContext"
import uuid from 'react-uuid';

const StyledAddToCart = styled.div`
        margin: 1.5rem;
    `

const AddToCart = () => {
    const { cartItems, setCartItems, counter, setCounter } = useContext(DataContext);

    const addToCartClickHandler = () => {
        setCounter(0);

        if (counter !== 0) {
            setCartItems([...cartItems, {
                name: 'Fall Limited Edition Sneakers',
                price: 125,
                amount: counter,
                id: uuid()
            }]);
        }
    }

    return (
        <StyledAddToCart>
            <ProductPrice />
            <Counter addToCartClickHandler={addToCartClickHandler} />
        </StyledAddToCart>
    )
}

export default AddToCart;