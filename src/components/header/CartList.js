import styled from 'styled-components';
import useClickOutside from '../../hooks/useClickOutside';
import CartItem from './CarItem';

const StyledCartList = styled.div`
    .cart-list {
        background-color: white;
        border-radius: 10px;
        box-shadow: 0 15px 30px 0px rgb(0,0,0,.5);
        right: 0;
        margin: .5rem;
        position: absolute;
        top: 100%;
        width: calc(100% - 1rem);
        z-index: 3;

        &__content-wrapper {
            display: flex;
            flex-direction: column;
            justify-content: center;
            min-height: 200px;
            padding: 1rem;
        }

        &__empty {
            font-weight: 800;
            text-align: center;
        }

        &__items {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        &__title {
            border-bottom: 1px solid var(--grayish-blue);
            color: black;
            font-weight: 800;
            padding: 1rem 1rem 1.5rem;
        }

        &__checkout {
            background-color: var(--orange);
            border-radius: 10px;
            color: var(--white);
            display: block;
            font-size: 1rem;
            font-weight: 700;
            margin: 1.5rem 0 .5rem;
            padding: 1.2em 0;
            width: 100%;
        }
    }

    @media (min-width: 800px) {
        .cart-list {
            width: 30%;
        }
    }
`

const CartList = (props) => {
    const nodeRef = useClickOutside(props.setCartActive, 'cart');

    const renderCartItems = () => {
        if (props.cartItems.length === 0) {
            return <p className='cart-list__empty'>Your cart is empty</p>;
        } else {
            return (
                <>
                    <ul className='cart-list__items'>
                        {props.cartItems.map(item => <CartItem item={item}  {...props} />)}
                    </ul>
                    <button className='cart-list__checkout'>Checkout</button>
                </>
            );
        }
    }

    return (
        <StyledCartList>
            <div className="cart-list" ref={nodeRef}>
                <h3 className="cart-list__title">Cart</h3>
                <div className='cart-list__content-wrapper'>
                    {renderCartItems()}
                </div>
            </div>
        </StyledCartList>
    )
}

export default CartList;