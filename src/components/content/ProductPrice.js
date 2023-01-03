import styled from "styled-components";

const StyledProductPrice = styled.div`
    .product-price {
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        margin-bottom: 1rem;
        width: 100%;

        &__main {
            font-size: 1.7rem;
            font-weight: 700;
        }

        &__discount {
            background-color: var(--pale-orange);
            border-radius: 7px;
            color: var(--orange);
            font-weight: 700;
            padding: .2em .5em;
        }

        &__previous {
            color: var(--grayish-blue);
            font-weight: 700;
            margin-left: auto;
            text-decoration-skip-ink: none;
            text-decoration: line-through;
            text-decoration: underline;
            text-underline-offset: -.3em;
        }
    }

    @media (min-width: 769px) {
        .product-price__previous {
            flex-basis: 100%;
        }
    }
`

const ProductPrice = () => {
    return (
        <StyledProductPrice>
            <div className="product-price">
                <p className="product-price__main">$125.00</p>
                <p className="product-price__discount">50%</p>
                <p className="product-price__previous">$250.00</p>
            </div>
        </StyledProductPrice>
    )
}

export default ProductPrice;