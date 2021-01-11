import * as types from '../types';

const initialState = {
    idToken: null,
    localId: null
};

const authenticateUser = (state, payload) => {
    const { idToken, localId } = payload;

    return {
        ...state,
        idToken,
        localId
    };
};

export const logoutUser = state => ({
    ...state,
    idToken: null,
    localId: null
});

export const authReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case types.AUTHENTICATE_USER:
            return authenticateUser(state, payload);

        case types.LOGOUT_USER:
            return logoutUser(state);

        default:
            return state;
    }
};
