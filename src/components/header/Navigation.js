import styled from "styled-components";
import menuItems from "./../../data/navigationItems"

const StyeledNavigation = styled.div`
    .navigation {
        display: none;

       
    }

      
    @media (min-width: 800px){
        .navigation {
            display: block;
        }

        .navigation__item {
            box-sizing: border-box;
            cursor: pointer;
            height: 6rem;
            display: flex;
            align-items: center;
        }

        .navigation__item:hover {
            box-shadow: inset 0 -4px 0 0 var(--orange);
        }
    }
`

const Navigation = () => {
    const navigationItems = menuItems.map(item => <li className="navigation__item"><p>{item}</p></li>);

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
