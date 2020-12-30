import { ThemeProvider } from 'styled-components';

import { Layout } from './components';
import { LayoutContainer } from './containers';
import { HomePage } from './pages';
import { GlobalStyles } from './styles';
import { darkTheme } from './themes';

export const App = () => (
    <ThemeProvider theme={darkTheme}>
        <GlobalStyles />

        <LayoutContainer>
            {({ movies, ...other }) => (
                <Layout {...other}>
                    <HomePage movies={movies} />
                </Layout>
            )}
        </LayoutContainer>
    </ThemeProvider>
);
