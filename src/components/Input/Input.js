import { forwardRef } from 'react';

import PT from 'prop-types';

import { StyledInput } from './styles';

export const Input = forwardRef(({ autoComplete = 'off', ...other }, ref) => (
    <StyledInput ref={ref} autoComplete={autoComplete} {...other} />
));

Input.propTypes = {
    /**
     * Indicates if input should have autocomplete
     */
    autoComplete: PT.oneOf(['on', 'off'])
};
