import styled from 'styled-components/macro';

export const StyledFooter = styled.footer`
    padding: ${props => `${props.theme.padding.sm} ${props.theme.padding.md}`};
    color: ${props => props.theme.footer.color};
    background: ${props => props.theme.footer.background};
    text-align: center;
`;
