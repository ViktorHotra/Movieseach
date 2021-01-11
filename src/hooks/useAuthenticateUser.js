import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { authenticateUser } from '../store/actions';

export const useAuthenticateUser = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const idToken = localStorage.getItem('idToken');
        const localId = localStorage.getItem('localId');

        if (!idToken || !localId) return;

        dispatch(authenticateUser(idToken, localId));
    }, []);
};
