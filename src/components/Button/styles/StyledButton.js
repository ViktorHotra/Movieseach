import styled from 'styled-components/macro';

const padding = `1.55rem`;

export const StyledButton = styled.button`
    display: block;
    padding: ${props => `${padding} ${props.theme.padding.xl}`};
    border: none;
    border-radius: 0.3rem;
    background: ${props => props.theme.button.background};
    color: ${props => props.theme.button.color};

    &:disabled {
        background: ${props => props.theme.lightColors[600]};
        color: ${props => props.theme.lightColors[700]};
        cursor: not-allowed;
    }
`;
