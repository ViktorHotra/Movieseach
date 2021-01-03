import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const TITLES = {
    '/': 'Movies Search | Home',
    '/favorite': 'Movies Search | Favorite movies',
    '/profile': 'Movies Search | Profile'
};

export const useDocumentTitle = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        document.title = TITLES[pathname] || 'Movies Search';
    }, [pathname]);
};
