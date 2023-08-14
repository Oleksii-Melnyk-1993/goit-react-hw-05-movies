import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  const defaultPosterImg =
    'https://www.reelviews.net/resources/img/default_poster.jpg';
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : defaultPosterImg
              }
              alt={movie.title}
            />
            <p>{movie.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ),
};
