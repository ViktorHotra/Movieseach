import styled from 'styled-components/macro';

const padding = `1.55rem`;

export const StyledInput = styled.input`
    display: block;
    width: 100%;
    padding: ${props => `${padding} ${props.theme.padding.sm}`};
    border-radius: 0.3rem;
    border: none;
`;
