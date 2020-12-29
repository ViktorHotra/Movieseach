import styled from 'styled-components/macro';

export const StyledHeader = styled.header`
    padding: ${props => props.theme.padding.md};
    color: ${props => props.theme.header.color};
    background: ${props => props.theme.header.background};
`;
