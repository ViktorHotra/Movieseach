import styled from 'styled-components/macro';

export const StyledTitle = styled.h1`
    font-size: ${props => props.theme.fontSize.xl};
    font-weight: 700;
    text-align: center;
    margin-bottom: ${props => props.theme.margin.md};
`;
