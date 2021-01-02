import { NavLink } from 'react-router-dom';

import { Link } from '../Link';
import { StyledNavItem, StyledNavList } from './styles';

const LINKS = [
    {
        id: 1,
        url: '/',
        exact: true,
        title: 'Home'
    },
    {
        id: 2,
        url: '/favorite',
        title: 'Favorite movies'
    },
    {
        id: 3,
        url: '/profile',
        title: 'Profile'
    },
    {
        id: 4,
        url: '/logout',
        title: 'Logout'
    }
];

export const NavBar = () => (
    <nav>
        <StyledNavList>
            {LINKS.map(({ id, url, exact, title }) => (
                <StyledNavItem key={id}>
                    <Link as={NavLink} to={url} exact={exact}>
                        {title}
                    </Link>
                </StyledNavItem>
            ))}
        </StyledNavList>
    </nav>
);
