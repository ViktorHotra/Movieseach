import PT from 'prop-types';

import { Input } from '../Input';
import { Button } from '../Button';
import { NavBar } from '../NavBar';
import {
    StyledHeader,
    StyledInputWrapper,
    StyledSearch,
    StyledHeaderWidthLimiter
} from './styles';

export const Header = ({
    search,
    isSearching,
    onChangeSearch,
    onSearchMovies
}) => (
    <StyledHeader>
        <StyledHeaderWidthLimiter>
            <form onSubmit={onSearchMovies}>
                <StyledSearch>
                    <StyledInputWrapper>
                        <Input
                            type="text"
                            name="search"
                            placeholder="Search movies"
                            value={search}
                            onChange={onChangeSearch}
                        />
                    </StyledInputWrapper>

                    <Button disabled={isSearching} type="submit">
                        {isSearching ? 'Searching' : 'Search'}
                    </Button>
                </StyledSearch>
            </form>

            <NavBar />
        </StyledHeaderWidthLimiter>
    </StyledHeader>
);

Header.propTypes = {
    /**
     * Search input value
     */
    search: PT.string.isRequired,
    /**
     * Indicates if we are searching movies
     */
    isSearching: PT.bool.isRequired,
    /**
     * Handler for changing search input value
     */
    onChangeSearch: PT.func.isRequired,
    /**
     * Handler for searching movies
     */
    onSearchMovies: PT.func.isRequired
};
