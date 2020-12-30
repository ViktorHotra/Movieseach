import * as commonVariables from '../variables';
import * as themeVariables from './variables';

export const theme = {
    ...commonVariables,
    ...themeVariables,
    header: {
        background: `linear-gradient(to right, ${themeVariables.primaryClr}, ${themeVariables.secondaryClr})`,
        color: '#fff'
    },
    footer: {
        background: `linear-gradient(to right, ${themeVariables.primaryClr}, ${themeVariables.secondaryClr})`,
        color: '#fff'
    },
    button: {
        background: commonVariables.lightColors[500],
        color: commonVariables.darkColors[900]
    }
};
