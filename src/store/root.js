const initialState = {
    firstName: '',
    lastName: '',
    age: null
};

export const rootReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'UPDATE_FIRST_NAME_AND_LAST_NAME': {
            const { newFirstName, newLastName } = payload;

            return {
                ...state,
                firstName: newFirstName,
                lastName: newLastName
            };
        }

        default:
            return state;
    }
};
