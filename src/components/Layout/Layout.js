import { Header } from '../Header';
import { Footer } from '../Footer';
import { StyledLayout, StyledMain } from './styles';

export const Layout = ({ children }) => (
    <StyledLayout>
        <Header />
        <StyledMain>{children}</StyledMain>
        <Footer />
    </StyledLayout>
);
