import PT from 'prop-types';

import { StyledLink } from './styles';

export const Link = ({ children, ...other }) => (
    <StyledLink {...other}>{children}</StyledLink>
);

Link.propTypes = {
    /**
     * Link's content
     */
    children: PT.node.isRequired
};
