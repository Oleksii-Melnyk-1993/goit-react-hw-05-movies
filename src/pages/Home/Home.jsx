import { useEffect, useState } from 'react';
import { fetchTrends } from 'services/MovieAPI';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { css } from '@emotion/react';
import { Loader } from 'components/Loader/Loader';
import { PropagateLoader } from 'react-spinners';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchTrends();
        setMovies([...data.results]);
      } catch (error) {
        console.log('Error', error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

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
      <h1>Most popular movies</h1>
      <MoviesList movies={movies} />
    </>
  );
};

export default Home;
