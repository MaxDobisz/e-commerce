import styled from 'styled-components';
import Button from '../reusable/button';
import CartList from './CartList';


const StyledShoppingCart = styled.div`
    margin: .5rem;
    border-radius: 10px;
    z-index: 2;
`

const Cart = (props) => {
    const cartClickHandler = () => {
        props.setCartActive(() => !props.cartActive)
    }

    return (
        <StyledShoppingCart>
            <Button handleClick={cartClickHandler}>
                <img className="cart-button__icon" src="./../../../images/icon-cart.svg" alt="cart" />
                {props.shoppingCartItems.length !== 0 ? <p className="cart-button__items-indiactor">{props.shoppingCartItems.length}</p> : null}
            </Button>
            {props.cartActive ? <CartList {...props} /> : null}
        </StyledShoppingCart>
    )

}
export default Cart;