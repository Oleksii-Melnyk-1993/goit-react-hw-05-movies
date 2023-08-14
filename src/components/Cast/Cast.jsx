import { useParams } from 'react-router-dom';
import { fetchCast } from 'services/MovieAPI';
import { useState, useEffect } from 'react';

export const Cast = () => {
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
      {!cast.length && <p>No info for this movie...</p>}
      <ul>
        {cast.map(actor => {
          return (
            <li key={actor.id}>
              <img
                scr={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
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
