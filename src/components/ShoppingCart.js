import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import useClickOutside from '../hooks/useClickOutside';

const StyledShoppingCart = styled.div`
    margin: .5rem;
    border-radius: 10px;
    box-shadow: 0 10px 50px;
    position: absolute;
    z-index: 2;
    width: calc(100% - 1rem);
    top: 70px;
    left: 0;

    .shoppingCart {
        min-height: 200px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        background-color: white;
        backdrop-filter: blur(1em) brightness(80%);

        &__title {
            border-bottom: 1px solid black;
            padding: 1rem;
            font-weight: 800;
        }

        &__list {
            flex-grow: 2;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-weight: 800;
            padding: 1rem;
        }

        .list__item {
            display: flex;
            margin: 1rem 0;
            justify-content: space-between;
        }

        .item__image {
            width: 15%;
            border-radius: 10px;
        }

        .delete__image {
            height: 1rem;
        }

        .add-to-cart__button {
            color: var(--white);
            background-color: var(--orange);
            display: flex;
            justify-content: center;
            font-weight: 700;
            padding: 1rem;
            margin: 1rem;
            border-radius: 10px;
            box-shadow: 0 10px 10px var(--light-orange);
            font-size: 1rem
        }

        .description-wrapper {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            
        }
        
        .price-wrapper {
            display: flex;
            gap: .5em;
        }

        .total-price {
            font-weight: 800;
        }
    }
`

const ShoppingCart = ({ cartActive, setCartActive, shoppingCartItems, setShoppingCartItems }) => {
    const renderCartItems = shoppingCartItems => {
        if (shoppingCartItems.length === 0) {
            return <li><p>Your cart is empty</p></li>
        }

        return shoppingCartItems.map(item => {
            return <li className='list__item' id={item.id}>
                <img className='item__image' src="./../../../images/image-product-1-thumbnail.jpg" alt="thumbnail" />
                <div className="description-wrapper">
                    <p>{item.name}</p>
                    <div className='price-wrapper'>
                        <p>{` $${item.price} x ${item.amount}`}</p><p className='total-price'>${(item.price * item.amount).toFixed(2)}</p>
                    </div>
                </div>
                <button onClick={() => cartClickHandler(item.id)}>
                    <img className='delete__image' src="./../../../images/icon-delete.svg" alt="thumbnail" />
                </button>
            </li>
        }
        );
    }

    const nodeRef = useClickOutside(setCartActive, 'cart')

    const cartClickHandler = (id) => {
        setShoppingCartItems(shoppingCartItems => {
            return shoppingCartItems.filter(item => item.id !== id);
        })
    }

    return (
        <StyledShoppingCart>
            <div className="shoppingCart" ref={nodeRef} >
                <p className="shoppingCart__title">Cart</p>
                <ul className="shoppingCart__list">
                    {renderCartItems(shoppingCartItems)}
                </ul>
                <button className="add-to-cart__button">Checkout</button>
            </div>
        </StyledShoppingCart>
    )
}

export default ShoppingCart;