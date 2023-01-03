import styled from "styled-components";

const StyledProductDescitpion = styled.div`
    .product-description {
        margin: 1.5rem;

        &__company-name {
            color: var(--orange);
            font-size: .8rem;
            font-weight: 700;
            letter-spacing: 2px;
        }

        &__product {
            font-size: 1.8rem;
            font-weight: 700;
            line-height: 1em;
            padding: 1rem 0;
        }

        &__details {
            color: var(--black);
            line-height: 1.5em;
        }
    }

    @media(min-width: 769px) {
        margin-top: auto;
    }
`

const ProductDescription = () => {
    return (
        <StyledProductDescitpion>
            <div className="product-description">
                <h1 className="product-description__company-name">SNEAKER COMPANY</h1>
                <h2 className="product-description__product">Fall Limited Edition Sneakers</h2>
                <p className="product-description__details">These low-profile sneakers are your perfect casual wear companion. Featuring a
                    durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
            </div>
        </StyledProductDescitpion>
    );
}

export default ProductDescription;