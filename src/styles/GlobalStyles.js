import { createGlobalStyle } from 'styled-components';

const applyFontFamily = ({ theme }) => theme.defaultFontFamily;

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html {
        font-size: 62.5%; // 10pxx => 1rem
    }
    
    body,
    input,
    textarea,
    button {
        font-size: 1.6rem;
        font-weight: 400;
        font-family: ${applyFontFamily};
    }
    
    button {
        cursor: pointer;
    }
    
`;
