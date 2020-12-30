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

const OfficePage = props => {
    return <p>Hello! I'm an office page!</p>;
};

export const App = () => (
    <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
            <GlobalStyles />

            <LayoutContainer>
                {({ movies, ...other }) => (
                    <Layout {...other}>
                        <Switch>
                            <Route path="/fake">
                                <FakePage />
                            </Route>

                            <Route path="/" exact>
                                <OfficePage />
                            </Route>

                            <Redirect to="/" />
                        </Switch>

                        <HomePage movies={movies} />
                    </Layout>
                )}
            </LayoutContainer>
        </ThemeProvider>
    </BrowserRouter>
);
