import { StyledWidthLimiter } from '../../styles';
import { StyledFooter, StyledCopyright } from './styles';

const year = new Date().getFullYear();

export const Footer = () => (
    <StyledFooter>
        <StyledWidthLimiter>
            <StyledCopyright>All Rights Reserved, {year}</StyledCopyright>
        </StyledWidthLimiter>
    </StyledFooter>
);
