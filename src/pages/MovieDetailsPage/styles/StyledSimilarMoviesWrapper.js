import styled from 'styled-components/macro';

import { StyledLink } from '../../../components/Link';

export const StyledSimilarMoviesWrapper = styled.div`
    display: flex;
    margin-top: ${props => props.theme.margin.md};
    position: relative;
    z-index: 1;

    ${StyledLink} {
        &:focus,
        &:hover {
            outline: 0.2rem solid ${props => props.theme.secondaryClr};
            outline-offset: 0.3rem;
        }
        &:not(:last-child) {
            margin-right: ${props => props.theme.margin.md};
        }
    }
`;
