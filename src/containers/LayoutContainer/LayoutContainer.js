import { useState } from 'react';
import axios from 'axios';

export const LayoutContainer = ({ children }) => {
    const [search, setSearch] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [movies, setMovies] = useState([]);

    const handleChangeSearch = e => {
        setSearch(e.target.value);
    };

    const handleSearchMovies = async () => {
        setIsSearching(true);

        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/users'
        );

        // try {
        //     const response = await fetch(
        //         'https://jsonplaceholder.typicode.com/users'
        //     );
        //     const users = await response.json();
        //
        //     setMovies(users);
        //     setIsSearching(false);
        // } catch (e) {
        //     console.log('[e]', e);
        // }

        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(response => response.json())
        //     .then(users => {
        //         setMovies(users);
        //         setIsSearching(false);
        //     });
    };

    return children({
        search,
        isSearching,
        movies,
        onChangeSearch: handleChangeSearch,
        onSearchMovies: handleSearchMovies
    });
};
