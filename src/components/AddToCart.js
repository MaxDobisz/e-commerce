import styled from "styled-components";

const AddToCart = () => {
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
        }

        /* counter start */
        .add-to-cart__counter {
            background-color: var(--light-grayish-blue);
            border-radius: 10px;
            display: flex;
            justify-content: space-between;
            margin: 1rem 0;
        }

        .counter__button {
            
            color: var(--orange);
            font-weight: 700;
            font-size: 1.3rem;
            padding: 1rem;
            align-items: center;
        }

        .counter__number {
            font-weight: 700;
            align-self: center;
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
        }









    `
    return (
        <StyledAddToCart>
            <div className="add-to-cart__price-wrapper">
                <p className="price__main">$125.00</p>
                <p className="price__discount">50%</p>
                <p className="price__previous">$250.00</p>
            </div>
            <div className="add-to-cart__counter">
                <button className="counter__button">-</button>
                <p className="counter__number">0</p>
                <button className="counter__button">+</button>
            </div>
            <button className="add-to-cart__button">Add to cart</button>
        </StyledAddToCart>
    )
}

export default AddToCart;