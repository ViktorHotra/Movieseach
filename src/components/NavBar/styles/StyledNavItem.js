import styled from 'styled-components/macro';

import { StyledLink } from '../../Link';

export const StyledNavItem = styled.li`
    &:not(:last-child) {
        margin-right: ${props => props.theme.padding.md};
    }

    ${StyledLink} {
        color: ${props => props.theme.header.color};

        &.active,
        &:hover {
            text-decoration: underline ${props => props.theme.header.color};
        }
    }
`;
