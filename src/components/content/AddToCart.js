import styled from 'styled-components';
import Counter from '../reusable/Counter';
import ProductPrice from './ProductPrice';

const StyledAddToCart = styled.div`
        margin: 1.5rem;

        .add-to-cart__button {
            color: var(--white);
            background-color: var(--orange);
            display: flex;
            justify-content: center;
            font-weight: 700;
            padding: 1rem;
            border-radius: 10px;
            box-shadow: 0 10px 10px var(--light-orange);
            width: 100%;
            font-size: 1rem
        }
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
            }])
        }
    }

    return (
        <StyledAddToCart>
            <ProductPrice />
            <Counter counter={counter}
                setCounter={setCounter} />
            <button className="add-to-cart__button" onClick={addToCartClickHandler}>Add to cart</button>
        </StyledAddToCart>
    )
}

export default AddToCart;