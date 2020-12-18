import { Header } from '../Header';
import { Footer } from '../Footer';
import { StyledLayout } from './styles';

export const Layout = ({ children }) => (
    <StyledLayout>
        <Header />
        {children}
        <Footer />
    </StyledLayout>
);
