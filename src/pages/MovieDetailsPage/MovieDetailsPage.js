import PT from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { Button, Link } from '../../components';
import {
    StyledWrapper,
    StyledDetails,
    StyledImage,
    StyledImageWrapper,
    StyledInfoWrapper,
    StyledInfo,
    StyledTitle,
    StyledReleaseDate,
    StyledDetailsTop,
    StyledSimilarMoviesWrapper
} from './styles';
import { updateFirstNameAndLastName } from '../../store';

const { REACT_APP_STORAGE_URL } = process.env;

const authSelector = state => ({
    firstName: state.auth.firstName,
    lastName: state.auth.lastName,
    age: state.auth.age
});

export const MovieDetailsPage = ({ movie, similarMovies }) => {
    const {
        backdrop_path,
        original_title,
        poster_path,
        release_date,
        overview
    } = movie;

    const { firstName, lastName, age } = useSelector(authSelector);
    const dispatch = useDispatch();

    const onUpdateFirstNameAndLastName = (newFirstname, newLastName) => {
        dispatch(updateFirstNameAndLastName(newFirstname, newLastName));
    };

    console.log(
        `Hello my name is ${firstName} ${lastName} and my age is ${age}`
    );

    const backdropUrl = REACT_APP_STORAGE_URL + backdrop_path;
    const posterUrl = REACT_APP_STORAGE_URL + poster_path;

    return (
        <StyledWrapper>
            <StyledDetails $imageUrl={backdropUrl}>
                <StyledDetailsTop>
                    <StyledImageWrapper>
                        <StyledImage src={posterUrl} alt={original_title} />
                    </StyledImageWrapper>

                    <StyledInfoWrapper>
                        <StyledInfo>
                            <StyledTitle>{original_title}</StyledTitle>
                            <StyledReleaseDate>
                                {release_date}
                            </StyledReleaseDate>
                            <p>{overview}</p>
                        </StyledInfo>

                        <Button
                            onClick={() =>
                                onUpdateFirstNameAndLastName('Bob', 'Brown')
                            }
                        >
                            Update firstname and last name
                        </Button>
                    </StyledInfoWrapper>
                </StyledDetailsTop>

                <StyledSimilarMoviesWrapper>
                    {similarMovies.map(
                        ({ id, poster_path, original_title }) => {
                            const posterUrl =
                                REACT_APP_STORAGE_URL + poster_path;

                            return (
                                <Link
                                    to={`/movie/${id}`}
                                    key={id}
                                    title={original_title}
                                >
                                    <img src={posterUrl} alt={original_title} />
                                </Link>
                            );
                        }
                    )}
                </StyledSimilarMoviesWrapper>
            </StyledDetails>
        </StyledWrapper>
    );
};

MovieDetailsPage.propTypes = {
    /**
     * A particular movie details
     */
    movie: PT.shape({
        id: PT.number.isRequired,
        original_title: PT.string.isRequired,
        poster_path: PT.string,
        backdrop_path: PT.string,
        overview: PT.string.isRequired,
        release_date: PT.string.isRequired
    }).isRequired
};
