import { ThemeProvider } from 'styled-components';

import { Layout } from './components';
import { LayoutContainer } from './containers';
import { GlobalStyles } from './styles';
import { darkTheme } from './themes';

export const App = () => (
    <ThemeProvider theme={darkTheme}>
        <GlobalStyles />

        <LayoutContainer>
            {({ movies, ...other }) => (
                <Layout {...other}>
                    <span>Movies list:</span>

                    {movies.map(movie => (
                        <div key={movie.id}>Movie ID: {movie.id}</div>
                    ))}
                </Layout>
            )}
        </LayoutContainer>
    </ThemeProvider>
);

//Switch to another theme
// const [theme, setTheme] = useState(darkTheme);
//
// const handleSwitchTheme = () => {
//     setTheme(lightTheme);
// };
//
// return (
//     <ThemeProvider theme={theme}>
//         <GlobalStyles />
//         <Layout>
//             <span>Content</span>
//             <button type="button" onClick={handleSwitchTheme}>
//                 Switch to Alt Theme
//             </button>
//         </Layout>
//     </ThemeProvider>
// );
