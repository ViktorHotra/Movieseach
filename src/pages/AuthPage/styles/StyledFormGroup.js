import styled from 'styled-components/macro';

import { StyledLabel, StyledFormError } from '../../../styles';

export const StyledFormGroup = styled.div`
    &:not(:last-child) {
        margin-bottom: ${props => props.theme.margin.md};
    }

    ${StyledLabel} {
        margin-bottom: ${props => props.theme.margin.xs};
    }

    ${StyledFormError} {
        margin-top: ${props => props.theme.margin.xs};
    }
`;
