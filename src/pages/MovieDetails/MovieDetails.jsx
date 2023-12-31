import { useEffect, useRef, useState } from 'react';
import { fetchMovie } from 'services/MovieAPI';
import { Outlet, useParams, useLocation, Link } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { PropagateLoader } from 'react-spinners';
import { css } from '@emotion/react';
import style from './MovieDetails.module.css';
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const MoviesDetails = () => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchMovie(movieId);
        setMovie(data);
      } catch (error) {
        console.log('Error', error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  const defaultPosterImg =
    'https://www.reelviews.net/resources/img/default_poster.jpg';

  return (
    <>
      {isLoading && (
        <Loader>
          <PropagateLoader
            color={'#36D7B7'}
            css={override}
            loading={isLoading}
          />
        </Loader>
      )}
      <Link className={style.backLink} to={backLinkRef.current}>
        Go Back
      </Link>
      <div className={style.containerDetails}>
        <div className={style.imageWrap}>
          <img
            className={style.imagePoster}
            alt={movie.title}
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : defaultPosterImg
            }
          />
        </div>
        <div className={style.infoWrap}>
          <h1 className="h1">{movie.title}</h1>
          <p>
            User scores: <b>{Math.round(movie.vote_average * 10)}%</b>
          </p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h2>Genres</h2>
          <p>{movie.genres?.map(({ name }) => name).join(', ')}</p>
        </div>
      </div>
      <div className={style.prevWrap}>
        <h3>Previus information</h3>
        <ul className={style.listDetails}>
          <li>
            <Link className={style.linkInfo} to="cast">
              Cast
            </Link>
          </li>
          <li>
            <Link className={style.linkInfo} to="reviews">
              Reviews
            </Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
};

export default MoviesDetails;
