import PT from 'prop-types';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { StyledWidthLimiter } from '../../styles';
import { StyledLayout, StyledMain } from './styles';

export const Layout = ({ children, ...other }) => (
    <StyledLayout>
        <Header {...other} />

        <StyledMain>
            <StyledWidthLimiter>{children}</StyledWidthLimiter>
        </StyledMain>

        <Footer />
    </StyledLayout>
);

Layout.propTypes = {
    /**
     * Page representation
     */
    children: PT.node.isRequired
};
