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
        background-color: pink;

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

const ShoppingCart = ({ isActive }) => {
    return (
        <StyledShoppingCart isActive={isActive}>
            <div className="shoppingCart">
                <p className="shoppingCart__title">Cart</p>
                <div className="shoppingCart__list">
                    <p className="list__empty">Your cart is empty</p>
                </div>
            </div>
        </StyledShoppingCart>
    )
}

export default ShoppingCart;