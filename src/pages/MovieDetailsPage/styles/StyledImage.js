import styled from 'styled-components/macro';

const maxWidth = '40rem';
const height = '60rem';
const borderRadius = '0.5rem';

export const StyledImage = styled.img`
    max-width: ${maxWidth};
    height: ${height};
    object-fit: cover;
    border-radius: ${borderRadius};
`;
