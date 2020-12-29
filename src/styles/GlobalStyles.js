import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html {
        font-size: 62.5%; // 10pxx => 1rem
        height: 100%;
    }
    
    body {
        height: 100%;
        color: ${props => props.theme.defaultColor};
    }
    
    body,
    input,
    textarea,
    button {
        font-size: ${props => props.theme.defaultFontSize};
        font-weight: 400;
        font-family: ${props => props.theme.defaultFontFamily};
    }
    
    button {
        cursor: pointer;
    }
    
    button, input {
        outline: 0;
    }
    
    #root {
        height: 100%;
    }
`;
