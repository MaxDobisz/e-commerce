import styled from "styled-components";

const StyledCounter = styled.div`
        .counter {
            background-color: var(--light-grayish-blue);
            border-radius: 10px;
            display: flex;
            justify-content: space-between;
            margin: 1rem 0;

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
    `

const Counter = ({ counter, setCounter }) => {
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
        </StyledCounter>
    )
}

export default Counter;