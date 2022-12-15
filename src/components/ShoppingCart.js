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
        }
    }
`

const ShoppingCart = ({ cartActive, setCartActive, items }) => {
    const renderCartItems = items => {
        if (items.length === 0) {
            return <li><p>Your cart is empty</p></li>
        }
        return items.map(item => <li>{item}</li>);
    }

    const nodeRef = useClickOutside(setCartActive, 'cart')

    // useEffect(() => {
    //     const handler = (e) => {
    //         if (!cartRef.current.contains(e.target) && !e.target.className.includes('cart')) {
    //             setCartActive(false)
    //         }
    //     }

    //     document.addEventListener('mousedown', handler);

    //     return () => {
    //         document.removeEventListener('mousedown', handler)
    //     }
    // })


    return (
        <StyledShoppingCart>
            <div className="shoppingCart" ref={nodeRef}>
                <p className="shoppingCart__title">Cart</p>
                <ul className="shoppingCart__list">
                    {renderCartItems(items)}
                </ul>
            </div>
        </StyledShoppingCart>
    )
}

export default ShoppingCart;