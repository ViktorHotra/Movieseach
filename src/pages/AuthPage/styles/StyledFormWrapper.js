import styled from 'styled-components/macro';

import { StyledForm, StyledLegend } from '../../../styles';
import { StyledButton } from '../../../components/Button/styles';

const maxWidth = '50rem';

export const StyledFormWrapper = styled.div`
    max-width: ${maxWidth};
    width: 100%;
    border-radius: 0.5rem;
    box-shadow: 0 0.6rem 1rem ${props => props.theme.darkColors[800]};

    ${StyledForm} {
        background-color: ${props => props.theme.lightColors[600]};
        padding: ${props => props.theme.padding.lg};
    }

    ${StyledLegend} {
        margin-bottom: ${props => props.theme.padding.md};
    }

    ${StyledButton} {
        margin: 0 auto;
    }
`;
