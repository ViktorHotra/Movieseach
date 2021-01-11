import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { Layout } from './components';
import { LayoutContainer, MovieDetailsPageContainer } from './containers';
import { HomePage, AuthPage } from './pages';
import { GlobalStyles } from './styles';
import { rootReducer } from './store';
import { darkTheme } from './themes';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [thunk];

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
);

const FakePage = props => {
    return <p>Hello! I'm a fake page!</p>;
};

// const LogoutPage = () => {
//     const dispatch = useDispatch();
//
//     useEffect(() => {
//         dispatch(logoutUser());
//     }, []);
//
//     return <Redirect to="/auth" />;
// };

export const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <ThemeProvider theme={darkTheme}>
                <GlobalStyles />

                <LayoutContainer>
                    {({ movies, ...other }) => (
                        <Layout {...other}>
                            <Switch>
                                <Route path={['/favorite', '/profile']}>
                                    <FakePage />
                                </Route>

                                {/*<Route path="/logout">*/}
                                {/*    <LogoutPage />*/}
                                {/*</Route>*/}

                                <Route path="/auth">
                                    <AuthPage />
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
