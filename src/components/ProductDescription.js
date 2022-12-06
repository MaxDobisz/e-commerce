import styled from "styled-components";

const ProductDescription = () => {
    const StyledProductDescitpion = styled.div`
        padding: 1.5rem;
        .product-description__company-name {
            font-size: .7rem;
            font-weight: 700;
            color: var(--orange);
            letter-spacing: 1px;
        }
        .product-description__product {
            font-size: 1.7rem;
            font-weight: 700;
            padding: 1rem 0;
            line-height: 2rem;
        }

        .product-description__details {
            
            color: var(--black);
            font-weight: 400;
        }

    `

    return (
        <StyledProductDescitpion className="product-description">
            <h1 className="product-description__company-name">SNEAKER COMPANY</h1>
            <h2 className="product-description__product">Fall Limited Edition Sneakers</h2>
            <p className="product-description__details">These low-profile sneakers are your perfect casual wear companion. Featuring a
                durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
        </StyledProductDescitpion>
    )
}

export default ProductDescription;