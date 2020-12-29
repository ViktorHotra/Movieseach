import PT from 'prop-types';

import { StyledButton } from './styles';

export const Button = ({ type = 'button', children, ...other }) => (
    <StyledButton type={type} {...other}>
        {children}
    </StyledButton>
);

Button.propTypes = {
    /**
     * Type of button
     */
    type: PT.oneOf(['button', 'submit', 'reset']),
    /**
     * Button's content
     */
    children: PT.node.isRequired
};
