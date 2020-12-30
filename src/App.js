import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';

import { Layout } from './components';
import { LayoutContainer } from './containers';
import { HomePage } from './pages';
import { GlobalStyles } from './styles';
import { darkTheme } from './themes';

const FakePage = props => {
    return <p>Hello! I'm a fake page!</p>;
};

// const OfficePage = props => {
//     return <p>Hello! I'm an office page!</p>;
// };

export const App = () => (
    <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
            <GlobalStyles />

            <div>
                <Link to="/fake">Fake</Link>
            </div>

            <LayoutContainer>
                {({ movies, ...other }) => (
                    <Layout {...other}>
                        <Switch>
                            <Route path="/fake">
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
