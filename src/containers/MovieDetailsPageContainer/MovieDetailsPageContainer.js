import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import PT from 'prop-types';
import axios from 'axios';

import { MovieDetailsPage } from '../../pages';

const { REACT_APP_API_URL, REACT_APP_MOVIE_API_KEY } = process.env;

export const MovieDetailsPageContainer = ({
    as: Component = MovieDetailsPage,
    movies,
    ...other
}) => {
    const [movie, setMovie] = useState(null);
    const [similarMovies, setSimilarMovies] = useState([]);
    const { movieId } = useParams();
    const history = useHistory();

    useEffect(() => {
        const similarMoviesUrl = `${REACT_APP_API_URL}/movie/${movieId}/similar?api_key=${REACT_APP_MOVIE_API_KEY}`;
        const foundMovie = movies.find(({ id }) => id === +movieId);

        if (foundMovie) {
            (async () => {
                try {
                    const {
                        data: { results }
                    } = await axios.get(similarMoviesUrl);

                    setMovie(foundMovie);
                    setSimilarMovies(results.slice(0, 5));
                } catch (e) {
                    console.error(e);
                    history.push('/');
                }
            })();
            return;
        }

        const movieUrl = `${REACT_APP_API_URL}/movie/${movieId}?api_key=${REACT_APP_MOVIE_API_KEY}`;
        (async () => {
            try {
                const [
                    movieResponse,
                    similarMoviesResponse
                ] = await Promise.all([
                    axios.get(movieUrl),
                    axios.get(similarMoviesUrl)
                ]);

                const { data: movieDetails } = movieResponse;
                const {
                    data: { results }
                } = similarMoviesResponse;

                setMovie(movieDetails);
                setSimilarMovies(results.slice(0, 5));
            } catch (e) {
                console.error(e);
                history.push('/');
            }
        })();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [movieId]);

    // TODO Add loader
    if (!movie || !similarMovies.length) return null;

    return <Component movie={movie} similarMovies={similarMovies} {...other} />;
};

MovieDetailsPageContainer.propTypes = {
    /**
     * Component representation
     */
    as: PT.elementType,
    /**
     * A list of movies fetched from the BE
     */
    movies: PT.arrayOf(
        PT.shape({
            id: PT.number.isRequired
        })
    ).isRequired
};
