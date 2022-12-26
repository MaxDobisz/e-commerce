import styled from 'styled-components';
import CartList from './CartList';

const StyledCart = styled.div`
    margin-left: auto;

    .cart__button {
        position: relative;
    }

    .cart__items-indiactor {
        background-color: var(--orange);
        border-radius: 20px;
        color: white;
        font-size: .7rem;
        padding: 1px 6px;
        position: absolute;
        right: -5px;
        top: -5px;
    }   
`

const Cart = (props) => {
    const cartClickHandler = () => {
        props.setCartActive(cartActive => !cartActive)
    }

    return (
        <StyledCart>
            <div className="cart">
                <button className='cart__button' onClick={cartClickHandler}>
                    <img className='cart__icon' src="./../../../images/icon-cart.svg" alt="cart" />
                    {props.cartItems.length !== 0 ? <p className="cart__items-indiactor">{props.cartItems.length}</p> : null}
                </button>
                {props.cartActive ? <CartList {...props} /> : null}
            </div>
        </StyledCart>
    )
}

export default Cart;