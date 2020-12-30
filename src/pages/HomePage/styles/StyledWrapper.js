import styled from 'styled-components/macro';

const cardHeight = '75rem';

export const StyledWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: ${cardHeight};
    gap: ${props => props.theme.padding.md};
    padding: ${props => props.theme.padding.md};
`;
