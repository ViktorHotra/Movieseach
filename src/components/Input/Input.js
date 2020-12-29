import PT from 'prop-types';

import { StyledInput } from './styles';

export const Input = ({ autoComplete = 'off', ...other }) => (
    <StyledInput autoComplete={autoComplete} {...other} />
);

Input.propTypes = {
    /**
     * Indicates if input should have autocomplete
     */
    autoComplete: PT.oneOf(['on', 'off'])
};
