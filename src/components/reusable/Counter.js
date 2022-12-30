import styled from "styled-components";

const StyledCounter = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .counter {
        background-color: var(--light-grayish-blue);
        border-radius: 10px;
        display: flex;
        justify-content: space-between;
      
        &__button {
            color: var(--orange);
            font-weight: 700;
            font-size: 1.3rem;
            padding: 1rem;
            align-items: center;
        }

        &__number {
            font-weight: 700;
            align-self: center;
        }
    }

    .add-to-cart__button {
            color: var(--white);
            background-color: var(--orange);
            font-weight: 700;
            padding: 1rem;
            border-radius: 10px;
            box-shadow: 0 12px 11px var(--pale-orange);
            font-size: 1rem;
        }

    @media (min-width: 769px) {
        flex-direction: row;
        .counter {
            flex-basis: 35%;
        }
        .add-to-cart__button {
            flex-grow: 1;
        }
    }
`

const Counter = ({ counter, setCounter, addToCartClickHandler }) => {
    const clickHandler = amount => {
        if (counter + amount >= 0) {
            setCounter(c => c + amount);
        }
    }

    return (
        <StyledCounter>
            <div className="counter">
                <button className="counter__button" onClick={() => clickHandler(-1)}>-</button>
                <p className="counter__number">{counter}</p>
                <button className="counter__button" onClick={() => clickHandler(+1)}>+</button>
            </div>
            <button className="add-to-cart__button" onClick={addToCartClickHandler}>Add to cart</button>
        </StyledCounter>
    )
}

export default Counter;