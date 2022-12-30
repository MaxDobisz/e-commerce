import styled from "styled-components";
import menuItems from "./../../data/navigationItems";

const StyeledNavigation = styled.div`
    .navigation {
        display: none;
    }

    @media (min-width: 769px){
        .navigation {
            display: block;

            &__list {
                display: flex;
                gap: 1rem;
            }
            
            &__item {
                box-sizing: border-box;
                cursor: pointer;
                height: 6rem;
                display: flex;
                align-items: center;
            }

            &__item:hover {
                box-shadow: 0 3px 0 0 var(--orange);
                color: black;
            }
        }

        
    }
`

const Navigation = () => {
    const navigationItems = menuItems.map(item => <li key={item} className="navigation__item"><p>{item}</p></li>);

    return (
        <StyeledNavigation>
            <nav className="navigation">
                <ul className="navigation__list">
                    {navigationItems}
                </ul>
            </nav>
        </StyeledNavigation>
    )

};

export default Navigation;
