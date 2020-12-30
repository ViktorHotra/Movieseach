import { useState } from 'react';
import axios from 'axios';

const { REACT_APP_API_URL, REACT_APP_MOVIE_API_KEY } = process.env;

export const LayoutContainer = ({ children }) => {
    const [search, setSearch] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [movies, setMovies] = useState([]);

    const handleChangeSearch = e => {
        setSearch(e.target.value);
    };

    const handleSearchMovies = async () => {
        setIsSearching(true);

        try {
            const url = `${REACT_APP_API_URL}/search/movie?api_key=${REACT_APP_MOVIE_API_KEY}&query=${search}`;

            const {
                data: { results }
            } = await axios.get(url);

            setMovies(results);
            setIsSearching(false);
        } catch (e) {
            console.log('[e]', e);
        }
    };

    return children({
        search,
        isSearching,
        movies,
        onChangeSearch: handleChangeSearch,
        onSearchMovies: handleSearchMovies
    });
};
