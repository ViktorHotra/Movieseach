import * as types from '../types';

export const updateFirstNameAndLastName = (newFirstName, newLastName) => ({
    type: types.UPDATE_FIRST_NAME_AND_LAST_NAME,
    payload: {
        newFirstName,
        newLastName
    }
});
