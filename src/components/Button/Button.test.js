import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { Button } from './Button';
import { darkTheme } from '../../themes';

describe('<Button />', () => {
    it('should contain text "Submit"', () => {
        const { getByText } = render(
            <ThemeProvider theme={darkTheme}>
                <Button>Submit</Button>
            </ThemeProvider>
        );

        getByText(/submit/i);
    });
});
