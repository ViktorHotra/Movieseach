import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { ThemeProvider } from 'styled-components';
import thunk from 'redux-thunk';

import { LayoutContainer } from './LayoutContainer';
import { Layout } from '../../components';
import { rootReducer } from '../../store';
import { darkTheme } from '../../themes';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [thunk];

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
);

describe('LayoutContainer />', () => {
    it('should change search input value on type', () => {
        const { getByPlaceholderText } = render(
            <ThemeProvider theme={darkTheme}>
                <ReduxProvider store={store}>
                    <BrowserRouter>
                        <LayoutContainer>
                            {({ movies, ...other }) => (
                                <Layout {...other}>Hello world</Layout>
                            )}
                        </LayoutContainer>
                    </BrowserRouter>
                </ReduxProvider>
            </ThemeProvider>
        );

        const input = getByPlaceholderText(/search movies/i);

        fireEvent.change(input, { target: { value: 'Lego' } });

        expect(input.value).toBe('Lego');
    });
});
