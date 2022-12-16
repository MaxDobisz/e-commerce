import styled from 'styled-components';
import Counter from './Counter';

const StyledAddToCart = styled.div`
        margin: 1.5rem;

        .add-to-cart__price-wrapper {
            display: flex;
            width: 100%;
            gap: 1rem;
            align-items: center;
        }

        .price__main {
            font-weight: 700;
            font-size: 1.7rem;
        }

        .price__discount {
            color: var(--orange);
            font-weight: 700;
            background-color: var(--pale-orange);
            padding: .2em .5em;
            border-radius: 7px;
        }

        .price__previous {
            margin-left: auto;
            text-decoration: line-through;
            color: var(--grayish-blue);
            font-weight: 700;
            text-decoration: underline;
            text-underline-offset: -.3em;
            text-decoration-skip-ink: none;
        }

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

const AddToCart = ({ shoppingCartItems, setShoppingCartItems, counter, setCounter }) => {
    const addToCartClickHandler = () => {
        setCounter(0);
        if (counter !== 0) {
            setShoppingCartItems([...shoppingCartItems, {
                name: 'Fall Limited Edition Sneakers',
                price: 125,
                amount: counter,
                id: shoppingCartItems.length + 1
            }])
        }
    }
    // 1: take the name/price/and amount and send it to cart
    // zrobie state ktory dostaje object
    //jesli object ( cart item sie zmieni zostanie wrenderowany)


    return (
        <StyledAddToCart>
            <div className="add-to-cart__price-wrapper">
                <p className="price__main">$125.00</p>
                <p className="price__discount">50%</p>
                <p className="price__previous">$250.00</p>
            </div>
            <Counter counter={counter}
                setCounter={setCounter} />
            <button className="add-to-cart__button" onClick={addToCartClickHandler}>Add to cart</button>
        </StyledAddToCart>
    )
}

export default AddToCart;