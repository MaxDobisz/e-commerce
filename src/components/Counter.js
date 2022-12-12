import styled from "styled-components";
import { useState } from "react";

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

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const clickHandler = (e) => {
        if (e.currentTarget.className.includes('minus') && counter !== 0) {
            setCounter(counter - 1)
        } else if (e.currentTarget.className.includes('plus')) {
            setCounter(counter + 1)
        }
    }

    return (
        <StyledCounter>
            <div className="counter">
                <button className="counter__button counter__button--minus" onClick={clickHandler}>-</button>
                <p className="counter__number">{counter}</p>
                <button className="counter__button counter__button--plus" onClick={clickHandler}>+</button>
            </div>
        </StyledCounter>
    )
}

export default Counter;