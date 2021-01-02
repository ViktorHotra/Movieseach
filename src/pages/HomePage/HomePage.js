import PT from 'prop-types';

import { Link } from '../../components';
import { StyledWrapper, StyledCard } from './styles';

const { REACT_APP_STORAGE_URL } = process.env;

export const HomePage = ({ movies }) => (
    <StyledWrapper>
        {movies.map(({ id, original_title, poster_path }) => {
            const imageUrl = REACT_APP_STORAGE_URL + poster_path;
            return (
                <StyledCard key={id} $imageUrl={imageUrl}>
                    <Link to="/">{original_title}</Link>
                </StyledCard>
            );
        })}
    </StyledWrapper>
);

// "adult": false,
//     "backdrop_path": "/kwUQFeFXOOpgloMgZaadhzkbTI4.jpg",
//     "genre_ids": [
//     878,
//     28,
//     12
// ],
//     "id": 24428,
//     "original_language": "en",
//     "original_title": "The Avengers",
//     "overview": "When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!",
//     "popularity": 118.316,
//     "poster_path": "/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
//     "release_date": "2012-04-25",
//     "title": "The Avengers",
//     "video": false,
//     "vote_average": 7.7,
//     "vote_count": 23677

HomePage.propTypes = {
    /**
     * A list of movies fetched from the BE
     */
    movies: PT.arrayOf(
        PT.shape({
            id: PT.number.isRequired,
            original_title: PT.string.isRequired,
            poster_path: PT.string
        })
    ).isRequired
};
