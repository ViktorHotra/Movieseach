import styled from 'styled-components/macro';

export const StyledDetails = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    background-image: url(${props => props.$imageUrl});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 0.5rem;
    padding: ${props => props.theme.padding.md};
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 0.5rem;
        background-color: ${props => props.theme.darkColors[800]};
    }
`;
