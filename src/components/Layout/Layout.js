import PT from 'prop-types';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { StyledLayout, StyledMain, StyledMainWidthLimiter } from './styles';

export const Layout = ({ children, ...other }) => (
    <StyledLayout>
        <Header {...other} />

        <StyledMain>
            <StyledMainWidthLimiter>{children}</StyledMainWidthLimiter>
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
