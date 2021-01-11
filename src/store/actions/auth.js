import * as types from '../types';

export const authenticateUser = (idToken, localId) => {
    localStorage.setItem('idToken', idToken);
    localStorage.setItem('localId', localId);

    return {
        type: types.AUTHENTICATE_USER,
        payload: {
            idToken,
            localId
        }
    };
};

export const logoutUser = () => {
    localStorage.removeItem('idToken');
    localStorage.removeItem('localId');

    return {
        type: types.LOGOUT_USER
    };
};
