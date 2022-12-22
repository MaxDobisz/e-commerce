import styled from "styled-components";
import menuItems from "../data/navigationItems"

const StyeledNavigation = styled.div`
        .navigation {
            display: none;

            &__list {
                display: flex;
                gap: 1rem;
            }
        }


    @media (min-width: 800px){
        .navigation {
            display: block;
        }
    }
`

const Navigation = () => {
    const navigationItems = menuItems.map(item => <li><p>{item}</p></li>);

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
