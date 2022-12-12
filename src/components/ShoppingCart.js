import styled from 'styled-components';

const StyledShoppingCart = styled.div`
    margin: .5rem;
    border-radius: 10px;
    box-shadow: 0 10px 50px;
    position: absolute;
    z-index: 2;
    width: calc(100% - 1rem);
    display: ${ props => props.isActive ? 'block' : 'none' };

    .shoppingCart {
        min-height: 200px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        background-color: white;

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

const ShoppingCart = ({ isActive, items }) => {
    const renderCartItems = items => {
        if (items.length === 0) {
            return <li><p>Your cart is empty</p></li>
        }

        return items.map(item => <li>{item}</li>);
    }

    return (
        <StyledShoppingCart isActive={isActive}>
            <div className="shoppingCart">
                <p className="shoppingCart__title">Cart</p>
                <ul className="shoppingCart__list">
                    {renderCartItems(items)}
                </ul>
            </div>
        </StyledShoppingCart>
    )
}

export default ShoppingCart;