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
            
        }

        &__price-wrapper {
            display: flex;
        }

        &__total-price {
            font-weight: 800;
        } 
    }  
`

const CartItem = ({ item, cartClickHandler }) => {
    return (
        <StyledCartItem>
            <li className='cart-item' id={item.id}>
                <img className='cart-item__image' src="./../../../images/image-product-1-thumbnail.jpg" alt="thumbnail" />
                <div className="cart-item__description-wrapper">
                    <p>{item.name}</p>
                    <div className='cart-item__price-wrapper'>
                        <p>{` $${item.price} x ${item.amount}`}</p>
                        <p className='cart-item__total-price'>${(item.price * item.amount).toFixed(2)}</p>
                    </div>
                </div>
                <button className="cart-item__checkout " onClick={() => cartClickHandler(item.id)}>
                    <img className='cart-item__delete' src="./../../../images/icon-delete.svg" alt="thumbnail" />
                </button>
            </li>
        </StyledCartItem>
    )
}

export default CartItem