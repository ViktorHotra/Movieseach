import styled from 'styled-components/macro';

import { StyledLink } from '../../../components/Link';

const cardMaxWidth = '50rem';
const borderRadius = '0.5rem';
const borderWidth = '0.2rem';

export const StyledCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: ${cardMaxWidth};
    background-image: url(${props => props.$imageUrl});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: ${borderRadius};
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: transparent;
        border-radius: ${borderRadius};
        transition: background-color 300ms ease;
    }

    &:hover {
        &::before {
            background-color: ${props => props.theme.darkColors[800]};
        }
        ${StyledLink} {
            opacity: 1;
        }
    }

    ${StyledLink} {
        border: ${borderWidth} solid ${props => props.theme.lightColors[500]};
        color: ${props => props.theme.lightColors[500]};
        padding: ${props => props.theme.padding.sm};
        text-decoration: none;
        opacity: 0;
        position: relative;
        z-index: 1;
        transition: opacity 300ms ease, color 300ms ease,
            border-color 300ms ease;

        &:hover {
            //color: ${props => props.theme.secondaryClr};
            border-color: ${props => props.theme.secondaryClr};
        }
    }
`;
