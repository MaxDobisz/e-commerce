import styled from "styled-components"

const StyledCartItem = styled.div`
    .cart-item {
        display: flex;
        justify-content: space-between;
        
        &__image {
            height: 3.5rem;
            border-radius: 5px;
        }

        &__description-wrapper {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            margin-right: auto;
            margin-left: 1rem;
        }

        &__price-wrapper {
            display: flex;
            gap: .5rem;
        }

        &__total-price {
            font-weight: 800;
            color: black;
        }

        &__delete {
            width: 1rem;
            margin-left: .5rem;
        }
    }  


    @media (min-width: 769px) {
        .cart-item__description-wrapper {
            margin-left: .3rem;
        }
    }
`

const CartItem = (props) => {
    const handleDeleteClick = (id) => {
        props.setCartItems(items => items.filter(item => item.id !== id));
    }

    return (
        <StyledCartItem>
            <li className='cart-item' id={props.item.id}>
                <img className='cart-item__image' src="./../../../images/image-product-1-thumbnail.jpg" alt="thumbnail" />
                <div className="cart-item__description-wrapper">
                    <p>{props.item.name}</p>
                    <div className='cart-item__price-wrapper'>
                        <p>{` $${(props.item.price).toFixed(2)} x ${props.item.amount}`}</p>
                        <p className='cart-item__total-price'> ${(props.item.price * props.item.amount).toFixed(2)}</p>
                    </div>
                </div>
                <button className="cart-item__checkout" onClick={() => handleDeleteClick(props.item.id)}>
                    <img className='cart-item__delete' src="./../../../images/icon-delete.svg" alt="thumbnail" />
                </button>
            </li>
        </StyledCartItem>
    )
}

export default CartItem