import { useParams } from 'react-router-dom';
import { fetchCast } from 'services/MovieAPI';
import { useState, useEffect } from 'react';
import css from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      if (!movieId) return;
      try {
        const data = await fetchCast(movieId);
        setCast([...data.cast]);
      } catch (error) {
        console.log('Error', error.message);
      } finally {
      }
    };
    fetchData();
  }, [movieId]);

  const defaultImageCaster =
    'https://astramed72.ru/upload/iblock/347/sycbae8zbho9u1ki9gfpg13enweryrr7.png';

  return (
    <div>
      {!cast.length && <p>No cast for this movie...</p>}
      <ul className={css.listCast}>
        {cast.map(actor => {
          return (
            <li key={actor.id} className={css.castItem}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                    : defaultImageCaster
                }
                alt={actor.name}
              />
              <p>{actor.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cast;
