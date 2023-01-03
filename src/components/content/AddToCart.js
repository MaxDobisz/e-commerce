import styled from 'styled-components';
import { useContext } from "react";
import uuid from 'react-uuid';
import Counter from '../reusable/Counter';
import ProductPrice from './ProductPrice';
import DataContext from "../../context/DataContext"

const StyledAddToCart = styled.div`
    .add-to-cart {
        margin: 1.5rem;
    }
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
            <div className="add-to-cart">
                <ProductPrice />
                <Counter addToCartClickHandler={addToCartClickHandler} />
            </div>
        </StyledAddToCart>
    )
}

export default AddToCart;