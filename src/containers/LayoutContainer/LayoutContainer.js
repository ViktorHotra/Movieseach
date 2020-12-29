import { useState } from 'react';

export const LayoutContainer = ({ children }) => {
    const [search, setSearch] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [movies, setMovies] = useState([]);

    const handleChangeSearch = e => {
        setSearch(e.target.value);
    };

    const handleSearchMovies = () => {
        setIsSearching(true);

        // send request...
        setTimeout(() => {
            setMovies([{ id: 1 }, { id: 2 }]);
            setIsSearching(false);
        }, 3000);
    };

    return children({
        search,
        isSearching,
        movies,
        onChangeSearch: handleChangeSearch,
        onSearchMovies: handleSearchMovies
    });
};
