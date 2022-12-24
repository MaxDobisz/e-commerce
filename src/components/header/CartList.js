import styled from 'styled-components';
import useClickOutside from '../../hooks/useClickOutside';
import CartItem from './CarItem';

//refactor done / change props only

const StyledCartList = styled.div`
    .cart-list {
        background-color: white;
        border-radius: 10px;
        left: 0;
        margin: 1rem;
        position: absolute;
        top: 100%;
        width: calc(100% - 2rem);
        

        &__content-wrapper {
            padding: 1rem;
        }

        &__title {
            color: black;
            border-bottom: 1px solid var(--grayish-blue);
            font-weight: 800;
            padding: 1rem;
        }

        &__checkout {
            background-color: var(--orange);
            border-radius: 10px;
            color: var(--white);
            display: block;
            font-size: 1rem;
            font-weight: 700;
            padding: 1em 0;
            width: 100%;
        }
    }
`

const CartList = (props) => {
    const nodeRef = useClickOutside(props.setCartActive, 'cart')

    const cartItems = () => {
        if (props.shoppingCartItems.length === 0) {
            return <p>Your cart is empty</p>;
        } else {
            return (
                <div className='cart-list__content-wrapper'>
                    <ul /*className="cart-list__items" */>{props.shoppingCartItems.map(item => <CartItem item={item} />)}</ul>
                    <button className='cart-list__checkout'>Checkout</button>
                </div>
            );
        }
    }

    return (
        <StyledCartList>
            <div className="cart-list" ref={nodeRef} >
                <h3 className="cart-list__title">Cart</h3>
                {cartItems()}
            </div>
        </StyledCartList>
    )
}

export default CartList;