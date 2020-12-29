import * as commonVariables from '../variables';

export const theme = {
    ...commonVariables,
    header: {
        background: 'linear-gradient(to right, #021B79, #0575E6)',
        color: '#fff'
    },
    footer: {
        background: 'linear-gradient(to right, #021B79, #0575E6)',
        color: '#fff'
    },
    button: {
        background: commonVariables.lightColors[500],
        color: commonVariables.darkColors[900]
    }
};
