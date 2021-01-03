import styled from 'styled-components/macro';

export const StyledFormError = styled.span.attrs({ role: 'alert' })`
    display: inline-block;
    font-size: ${props => props.theme.fontSize.sm};
    color: ${props => props.theme.commonColors.danger};
`;
