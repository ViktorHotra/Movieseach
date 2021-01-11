import styled, { css } from 'styled-components/macro';

const applyActiveStyles = ({ $active, theme }) => {
    const lightClr = theme.lightColors[600];
    const darkClr = theme.lightColors[700];
    const lightClrText = theme.lightColors[500];
    const darkClrText = theme.darkColors[900];

    return css`
        background-color: ${$active ? darkClr : lightClr};
        color: ${$active ? lightClrText : darkClrText};
    `;
};

const applyCursor = ({ $active }) => {
    if ($active) return;

    return css`
        cursor: pointer;
    `;
};

export const StyledTab = styled.div.attrs({ role: 'button', tabIndex: 0 })`
    width: 50%;
    padding: ${props => props.theme.padding.md};
    text-align: center;
    color: #000;
    outline: 0;

    &:first-child {
        border-radius: 0.5rem 0 0 0;
    }

    &:last-child {
        border-radius: 0 0.5rem 0 0;
    }

    ${applyActiveStyles}
    ${applyCursor}
`;
