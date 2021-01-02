import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { Layout } from './components';
import { LayoutContainer } from './containers';
import { HomePage } from './pages';
import { GlobalStyles } from './styles';
import { darkTheme } from './themes';

const FakePage = props => {
    return <p>Hello! I'm a fake page!</p>;
};

export const App = () => (
    <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
            <GlobalStyles />

            <LayoutContainer>
                {({ movies, ...other }) => (
                    <Layout {...other}>
                        <Switch>
                            <Route path={['/favorite', '/profile', '/logout']}>
                                <FakePage />
                            </Route>

                            <Route path="/" exact>
                                <HomePage movies={movies} />
                            </Route>

                            <Redirect to="/" />
                        </Switch>
                    </Layout>
                )}
            </LayoutContainer>
        </ThemeProvider>
    </BrowserRouter>
);
