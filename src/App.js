import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { Layout } from './components';
import { LayoutContainer, MovieDetailsPageContainer } from './containers';
import { HomePage, AuthPage } from './pages';
import { GlobalStyles } from './styles';
import { rootReducer } from './store';
import { darkTheme } from './themes';

const store = createStore(rootReducer);

// console.log(store);
//
// console.log(store.getState());
//
// store.dispatch({
//     type: 'UPDATE_FIRST_NAME_AND_LAST_NAME',
//     payload: {
//         newFirstName: 'Mike',
//         newLastName: 'Smith'
//     }
// });
//
// console.log(store.getState());

const FakePage = props => {
    return <p>Hello! I'm a fake page!</p>;
};

export const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <ThemeProvider theme={darkTheme}>
                <GlobalStyles />

                <LayoutContainer>
                    {({ movies, ...other }) => (
                        <Layout {...other}>
                            <Switch>
                                <Route path="/auth">
                                    <AuthPage />
                                </Route>

                                <Route
                                    path={['/favorite', '/profile', '/logout']}
                                >
                                    <FakePage />
                                </Route>

                                <Route path="/movie/:movieId" exact>
                                    <MovieDetailsPageContainer
                                        movies={movies}
                                    />
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
    </Provider>
);
